const router = require("express").Router()
const gameController = require("../controllers/gameController")

router.post("/", gameController.CreateGame)

module.exports = router
