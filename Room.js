const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Room", RoomSchema);
