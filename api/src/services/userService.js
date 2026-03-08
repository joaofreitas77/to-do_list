const { like, Like } = require("typeorm")
const { userRepository } = require("../repositories/user")

const getUsersService = async (name) => {
    console.log(name, "oi")
    const filter = {}

    if (name) {
        filter.username = Like(`%${name}`)
    }

    const usuario = await userRepository.find({ where: filter })
    console.log(usuario)
    return usuario
}

const getUsersByIdService = async (id) => {
    const user = await userRepository.findOne({
        where: { id: Number(id) }
    })

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}

const postUsersService = async (username, email, password) => {
    if (!username || !email || !password) {
        throw new Error("All fields are required.")
    }

    const userAlreadyExists = await userRepository.findOne({ where: { username } })
    if (userAlreadyExists) {
        throw new Error("User already exists")
    }

    const newUser = userRepository.create({ username, email, password })
    await userRepository.save(newUser)
    return newUser
}

module.exports = {
    getUsersService,
    getUsersByIdService,
    postUsersService
}