const { Schema } = require("mongoose")

const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    image: { type: String },
  },
  { timestamps: true }
)

module.exports = GameSchema
