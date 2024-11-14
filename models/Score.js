const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ScoreSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = {
  Score,
};
