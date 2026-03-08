require("dotenv").config()
const express = require("express")
const routes = require("./routes")

//const taskRoutes = require("./routes/taskRoutes")

const app = express()
const router = express.Router()
const port = process.env.PORT

app.use(express.json())

app.use(router)
//app.use(taskRoutes)
routes(router)

app.listen(port, ( ) => {
    console.log(`Runing on http://localhost:${port}/`)
}) 