const router = require("express").Router()
const reviewController = require("../controllers/reviewController")

router.post("/", reviewController.createReview)

module.exports = router
