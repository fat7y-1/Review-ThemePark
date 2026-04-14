const router = require("express").Router()
const reviewController = require("../controllers/reviewController")

router.post("/", reviewController.createReview)
router.delete("/", reviewController.deleteReview)

module.exports = router
