import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendMessageRouter from "./routes/sendMessageRouter.js";
import paymentRouter from "./routes/paymentRouter.js";
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//requests

app.use("/send", sendMessageRouter);
app.use("/donate", paymentRouter);

app.all("*", (req, res) => {
  res.status(400).json("404 Page not found");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
