const Review = require("../models/Review")

const createReview = async (req, res) => {
  try {
    const addReview = await Review.create(req.body)
    res.send(addReview)
  } catch (error) {
    throw error
  }
}
const getReview = async (req, res) => {
  try {
    const All = await Review.find({ game: req.params.id })
    res.status(200).send(All)
  } catch (error) {
    throw error
  }
}

const deleteReview = async () => {
  try {
    const deleteReview = await Review.delete(req.params)
    res.send(deleteReview)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createReview,
  deleteReview,
  getReview,
}
