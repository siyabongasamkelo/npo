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
      // host: "smtp.ethereal.email",
      service: "gmail",
      // host: "smtp.gmail.com",
      // port: 465,
      // secure: true, // true for port 465, false for other ports
      auth: {
        user: `${user}`,
        pass: `${pass}`,
      },
    });

    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "siyabongatesting@gmail.com", // sender address
      to: "siyabongasamkelociam@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { sendMessage };
