const router = require("express").Router()
const reviewController = require("../controllers/reviewController")

router.post("/", reviewController.createReview)
router.get("/:id", reviewController.getReview)
router.delete("/:id", reviewController.deleteReview)

module.exports = router
