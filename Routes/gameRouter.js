const router = require("express").Router()
const gameController = require("../controllers/gameController")

router.post("/", gameController.CreateGame)
router.get("/", gameController.GetAll)
router.delete("/:id", gameController.DeleteGame)

module.exports = router
