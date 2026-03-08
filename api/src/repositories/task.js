const { AppDataSource } = require("../config/db")
const userRepository = AppDataSource.getRepository("Task")

module.exports = { userRepository }