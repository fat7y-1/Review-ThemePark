const Game = require("../models/Game")

const GetAll = async (req, res) => {
  try {
    const All = await Game.find({})
    res.status(200).send(All)
  } catch (error) {
    throw error
  }
}

const CreateGame = async (req, res) => {
  try {
    const create = await Game.create(req.body)
    res.send(create)
  } catch (error) {
    throw error
  }
}

const DeleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id)
    res.send({ msg: "Game Deleted", id: req.params.id })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateGame,
  GetAll,
  DeleteGame,
}
