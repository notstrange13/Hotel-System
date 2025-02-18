const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  checkInDate: Date,
  checkOutDate: Date,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Booking", BookingSchema);
