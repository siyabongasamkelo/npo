import validator from "validator";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendMessage = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email) return res.status(400).json("Email is required");
    if (!message) return res.status(400).json("Message is required");

    if (!validator.isEmail(email))
      return res.status(400).json("Please enter a valid email");

    const user = process.env.OUTLOOKUSER;
    const pass = process.env.OUTLOOKPASSWORD;

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: `${user}`,
        pass: `${pass}`,
      },
    });

    const options = {
      from: `${user}`,
      to: `${email}`,
      subject: "An Email From Sitinonke.com",
      text: `${message}`,
    };

    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      res.status(200).json("Message sent successfully");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { sendMessage };
