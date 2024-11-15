import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import { log } from "console";
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//requests

const generateSignature = (data, passPhrase = null) => {
  // Create parameter string
  let pfOutput = "";
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] !== "") {
        pfOutput += `${key}=${encodeURIComponent(data[key].trim()).replace(
          /%20/g,
          "+"
        )}&`;
      }
    }
  }

  // Remove last ampersand
  let getString = pfOutput.slice(0, -1);
  if (passPhrase !== null) {
    getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(
      /%20/g,
      "+"
    )}`;
  }

  return crypto.createHash("md5").update(getString).digest("hex");
};

app.get("/test", (req, res) => {
  const merchant_id = process.env.MERCHANT_ID;
  const merchant_key = process.env.MERCHANT_KEY;
  const testMode = false;

  const pfHost = testMode ? "sandbox.payfast.co.za" : "www.payfast.co.za";

  const myData = [];
  // Merchant details
  myData["merchant_id"] = `${merchant_id}`;
  myData["merchant_key"] = `${merchant_key}`;
  myData["return_url"] = "http://localhost:5000/return_url";
  myData["cancel_url"] = "http://localhost:5000/cancel_url";
  myData["notify_url"] = "http://localhost:5000/notify_url";
  // Buyer details
  myData["name_first"] = "Nondumiso";
  myData["name_last"] = "Mbuyazi";
  myData["email_address"] = "ndumane03@gmail.com";
  // Transaction details
  myData["m_payment_id"] = "1234";
  myData["amount"] = "300.00";
  myData["item_name"] = "Order#123";
  // myData["payment_method"] = "dc";

  // Generate signature
  const myPassphrase = "Siyabongasamkelo01";
  // const myPassphrase = "payfast";
  myData["signature"] = generateSignature(myData, myPassphrase);

  let htmlForm = `<form action="https://${pfHost}/eng/process" method="post">`;
  for (let key in myData) {
    if (myData.hasOwnProperty(key)) {
      const value = myData[key];
      if (value !== "") {
        htmlForm += `<input name="${key}" type="hidden" value="${value.trim()}" />`;
      }
    }
  }

  htmlForm += '<input type="submit" value="Pay Now" /></form>';
  res.send(htmlForm);
});

app.get("/notify_url", (req, res) => {
  res.send("Thank you for your payment");
});

app.get("/return_url", (req, res) => {
  res.send("Thank you for your payment");
});

app.get("/cancel_url", (req, res) => {
  res.send("Thank you for your payment");
});

app.all("*", (req, res) => {
  res.status(400).json("404 Page not found");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
