const router = require("express").Router()
const reviewController = require("../controllers/reviewController")

router.post("/", reviewController.createReview)
router.get("/", reviewController.getAllReview)

module.exports = router
