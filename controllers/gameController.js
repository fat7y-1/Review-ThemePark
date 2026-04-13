const { Game } = require("../models/Game")

const CreateGame = async (req, res) => {
  try {
    const create = await Game.create(req.body)
    res.send(create)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateGame,
}
