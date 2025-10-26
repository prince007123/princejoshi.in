import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

app.get("/", (req, res) => {
  res.send("🚀 Server is running fine!");
});

app.post("/send", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "🚨 Restricted Zone Alert!",
      text: `User has entered restricted zone.\n\nLocation:\nLatitude: ${latitude}\nLongitude: ${longitude}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
