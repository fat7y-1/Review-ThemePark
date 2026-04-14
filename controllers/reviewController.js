const Review = require("../models/Review")

const createReview = async (req, res) => {
  try {
    const addReview = await Review.create(req.body)
    res.send(addReview)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createReview,
}
