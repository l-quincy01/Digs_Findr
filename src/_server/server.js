import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import imageDownloader from "image-downloader";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

import User from "./models/User.js";
import Place from "./models/Place.js";
import BookingModel from "./models/Booking.js";

dotenv.config();

const app = express();
const bcryptSalt = bcrypt.genSaltSync(6);
const jwtSec = "hdnckjweiwke"; // Consider moving this to your .env file for security: `JWT_SECRET=your_secret`

// Workaround for `__dirname` in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/realEstateLogos", express.static(__dirname + "/realEstateLogos"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173", // Update if deploying to production
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Test route
app.get("/test", (req, res) => {
  res.json("Test GET OK");
});

// User registration
app.post("/register", async (req, res) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    governmentID,
    gender,
    userAddress,
  } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const userDoc = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      governmentID,
      gender,
      userAddress,
    });
    res.json({ userDoc });
  } catch (e) {
    res.status(422).json(e); // Handle duplicate email or other validation errors
  }
});

// User login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (userDoc) {
      const passCheck = bcrypt.compareSync(password, userDoc.password);
      if (passCheck) {
        jwt.sign(
          { email: userDoc.email, id: userDoc._id },
          jwtSec,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(userDoc);
          }
        );
      } else {
        res.status(422).json("Invalid password");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(500).json("Login failed");
  }
});

// Get user profile
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json("Not authenticated");
  jwt.verify(token, jwtSec, {}, async (err, userData) => {
    if (err) throw err;
    const user = await User.findById(userData.id, "-password"); // Exclude password
    res.json(user);
  });
});

// Logout
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

// Upload by link
app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = `${Date.now()}.jpg`;
  try {
    await imageDownloader.image({
      url: link,
      dest: `${__dirname}/uploads/${newName}`,
    });
    res.json(newName);
  } catch (err) {
    res.status(500).json("Image download failed");
  }
});

// Upload files
const photosMiddleware = multer({ dest: "uploads" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = req.files.map((file) => {
    const parts = file.originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = `${file.path}.${ext}`;
    fs.renameSync(file.path, newPath);
    return newPath.replace("uploads/", "");
  });
  res.json(uploadedFiles);
});

// Add new place
app.post("/places/new", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSec, {}, async (err, userData) => {
    if (err) throw err;
    const placeData = req.body;
    try {
      const placeDoc = await Place.create({
        owner: userData.id,
        ...placeData,
      });
      res.json(placeDoc);
    } catch (err) {
      res.status(422).json(err);
    }
  });
});

// Get user places
app.get("/user-places", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSec, {}, async (err, userData) => {
    if (err) throw err;
    const places = await Place.find({ owner: userData.id });
    res.json(places);
  });
});

// Get place by ID
app.get("/places/:id", async (req, res) => {
  const { id } = req.params;
  const place = await Place.findById(id);
  res.json(place);
});

// Update place
app.put("/places/:id", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSec, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.findById(req.body.id);
    if (userData.id === placeDoc.owner.toString()) {
      Object.assign(placeDoc, req.body);
      await placeDoc.save();
      res.json("Updated");
    } else {
      res.status(403).json("Unauthorized");
    }
  });
});

// Bookings
app.post("/bookings", async (req, res) => {
  const userData = await getUserData(req);
  try {
    const booking = await BookingModel.create({
      ...req.body,
      user: userData.id,
    });
    res.json(booking);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user bookings
app.get("/bookings", async (req, res) => {
  const userData = await getUserData(req);
  const bookings = await BookingModel.find({ user: userData.id }).populate(
    "place"
  );
  res.json(bookings);
});

// Helper: Get user data from token
function getUserData(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSec, {}, (err, userData) => {
      if (err) reject(err);
      resolve(userData);
    });
  });
}

// Get all places
app.get("/places", async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
