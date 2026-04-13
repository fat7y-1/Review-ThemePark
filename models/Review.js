const { Schema } = require("mongoose")

const ReviewSchema = new Schema(
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

module.exports = ReviewSchema
