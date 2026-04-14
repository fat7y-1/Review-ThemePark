const mongoose = require("mongoose")
const ReviewSchema = new mongoose.Schema(
  {
    commit: { type: String, required: true },
    rating: { type: Number },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Review", ReviewSchema)
