const { AppDataSource } = require("../config/db")
const userRepository = AppDataSource.getRepository("User")

module.exports = { userRepository }