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

    const { v4: uuidv4 } = require("uuid");

    const newUser = userRepository.create({
        id: uuidv4(),
        username,
        email,
        password
    });
    await userRepository.save(newUser)
    return newUser
}

const putUsersService = async (id, username, email, password) => {
    const user = await userRepository.findOne({ where: { id: Number(id) } })

    if (!user) {
        return null;
    }
    if (!username || !email || !password) {
        throw new Error("All fields are required.")
    }
    if (username) {
        user.username = username.toLowerCase()
    }
    if (email || password) {
        username.email = email
        username.password = password
    }
}

module.exports = {
    getUsersService,
    getUsersByIdService,
    postUsersService,
    putUsersService,
}