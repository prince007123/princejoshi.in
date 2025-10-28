// ✅ Suraksha Setu — Full Backend (index.js)
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import util from "util";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST"], allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json());
app.use(express.static("./"));

// 🧩 Directory setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------------- EMAIL ALERT SYSTEM ----------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// ---------------------- USER DATABASE ----------------------
const USERS_FILE = "./users.json";

function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// ---------------------- SIGNUP ----------------------
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ success: false, message: "All fields are required" });

  let users = loadUsers();
  const existing = users.find((u) => u.email === email);
  if (existing) return res.status(400).json({ success: false, message: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const surakshaId = "SS-" + Math.floor(100000 + Math.random() * 900000);

  const newUser = { name, email, password: hashedPassword, surakshaId, createdAt: new Date() };
  users.push(newUser);
  saveUsers(users);

  res.json({ success: true, message: "Signup successful", surakshaId });
});

// ---------------------- LOGIN ----------------------
// ---------------------- LOGIN (Fixed) ----------------------
app.post("/api/login", async (req, res) => {
  const { emailOrId, password } = req.body;
  if (!emailOrId || !password)
    return res.status(400).json({ success: false, message: "Email/ID and password required" });

  const users = loadUsers();
  const user = users.find(
    (u) => u.email === emailOrId || u.surakshaId === emailOrId
  );

  if (!user)
    return res.status(401).json({ success: false, message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return res.status(401).json({ success: false, message: "Invalid password" });

  const token = jwt.sign(
    { email: user.email, surakshaId: user.surakshaId },
    "secretKey123",
    { expiresIn: "2h" }
  );

  // ✅ Always send JSON response
  res.json({
    success: true,
    message: "Login successful",
    token,
    surakshaId: user.surakshaId,
  });
});




// ---------------------- VERIFY TOKEN MIDDLEWARE ----------------------
function authOnly(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "No token provided" });
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "secretKey123");
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

// ---------------------- DYNAMIC PRICING ----------------------
app.get("/api/dynamic-pricing/:location", async (req, res) => {
  try {
    const locationName = req.params.location.toLowerCase();
    const dataPath = path.join(__dirname, "locations-pricing.json");
    const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    const location = jsonData.find((loc) => loc.location.toLowerCase() === locationName);
    if (!location) return res.status(404).json({ success: false, message: "Location not found" });

    const month = new Date().getMonth();
    let hotelPrice = location.basePriceHotelPerNight;
    let cabPrice = location.basePriceCabPerKm;

    if (location.peakMonths.includes(month)) {
      hotelPrice *= 1.4;
      cabPrice *= 1.3;
    } else if (location.offMonths.includes(month)) {
      hotelPrice *= 0.8;
      cabPrice *= 0.9;
    }

    res.json({
      success: true,
      location: location.location,
      prices: {
        hotelPerNight: Math.round(hotelPrice),
        cabPerKm: Math.round(cabPrice),
      },
      notes: location.notes,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error loading location data" });
  }
});

// ---------------------- GEOFENCE ----------------------
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const GEOFENCE_FILE = "./geofence.json";

async function ensureGeofenceFile() {
  if (!fs.existsSync(GEOFENCE_FILE)) {
    await writeFile(GEOFENCE_FILE, JSON.stringify({ circle: null }, null, 2));
  }
}
await ensureGeofenceFile();

async function loadGeofence() {
  try {
    const raw = await readFile(GEOFENCE_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return { circle: null };
  }
}

async function saveGeofence(obj) {
  await writeFile(GEOFENCE_FILE, JSON.stringify(obj, null, 2));
}

function distanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ✅ Admin sets geofence
app.post("/api/geofence", authOnly, async (req, res) => {
  const { circle } = req.body;
  if (!circle) return res.status(400).json({ message: "Invalid circle" });
  await saveGeofence({ circle });
  res.json({ success: true, message: "GeoFence saved ✅" });
});

// ✅ Check user location inside/outside geofence
app.post("/api/location-report", authOnly, async (req, res) => {
  const { latitude, longitude } = req.body;
  const gf = await loadGeofence();
  const circle = gf.circle;
  if (!circle) return res.status(400).json({ message: "No geofence set" });

  const dist = distanceMeters(latitude, longitude, circle.lat, circle.lng);
  const outside = dist > circle.radius;

  if (outside) {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `🚨 GeoFence Breach — ${req.user.surakshaId}`,
      text: `User ${req.user.surakshaId} exited safe zone.\nDistance: ${Math.round(dist)}m`,
    };
    await transporter.sendMail(mailOptions);
  }

  res.json({ success: true, outside, distance: Math.round(dist) });
});

// ✅ Root page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ---------------------- SERVER ----------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Suraksha Setu backend running on http://localhost:${PORT}`));

