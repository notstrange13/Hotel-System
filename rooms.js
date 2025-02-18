const express = require("express");
const Room = require("../models/Room");

const router = express.Router();

// Get all rooms
router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// Add a new room (Admin only)
router.post("/", async (req, res) => {
  const newRoom = new Room(req.body);
  await newRoom.save();
  res.json({ message: "Room added successfully" });
});

module.exports = router;
