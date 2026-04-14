const Review = require("../models/Review")
const game = require("../models/Game")

const createReview = async (req, res) => {
  try {
    const addReview = await Review.create(req.body)
    res.send(addReview)
  } catch (error) {
    throw error
  }
}

const getAllReview = async (req, res) => {
  try {
    const getReview = await Review.find({ game: req.params.id })
    res.send(getReview)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createReview,
  getAllReview,
}
