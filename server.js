const express = require("express")
const logger = require("morgan")

const gameRouter = require("./Routes/gameRouter")

const PORT = process.env.PORT || 3000

const db = require("./db")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/game", gameRouter)

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
