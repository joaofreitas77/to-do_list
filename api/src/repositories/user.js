const { AppDataSource } = require("../config/db")
const userRepository = AppDataSource.getRepository("users")

module.exports = { userRepository }