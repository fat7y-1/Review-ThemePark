const mongoose = require("mongoose")
const GameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    image: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Game", GameSchema)
