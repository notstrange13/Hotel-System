const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

// Create a booking
router.post("/", async (req, res) => {
  const newBooking = new Booking(req.body);
  await newBooking.save();
  res.json({ message: "Booking created successfully" });
});

// Get all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find().populate("user").populate("room");
  res.json(bookings);
});

module.exports = router;
