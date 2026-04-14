const express = require("express")
const logger = require("morgan")

const gameRouter = require("./Routes/gameRouter")
const reviewRouter = require("./Routes/reviewRouter")
const PORT = process.env.PORT || 3000
const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])
const db = require("./db")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/game", gameRouter)
app.use("/review", reviewRouter)
app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
