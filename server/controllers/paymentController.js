import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

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

const makePayment = async (req, res) => {
  try {
    const { email, firstname, lastname } = req.body;

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
    // myData["name_first"] = "Nondumiso";
    // myData["name_last"] = "Mbuyazi";
    // myData["email_address"] = "ndumane03@gmail.com";

    myData["name_first"] = email;
    myData["name_last"] = firstname;
    myData["email_address"] = lastname;

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
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { makePayment };
