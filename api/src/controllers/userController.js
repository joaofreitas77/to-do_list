const {
    getUsersService,
    getUsersByIdService,
    postUsersService,

} = require("../services/userService")

const getUsersController = async (req, res) => {
    try {
        const data = await getUsersService(req.query.name)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getUsersByIdController = async (req, res) => {
    try {
        const user = await getUsersByIdService(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "Not Found" })
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postUsersController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await postUsersService(username, email, password)

        return res.status(201).json(newUser)
    } catch (error) {
        if (error.message === "All fields are required.") {
            return res.status(400).json({ message: error.message })
        }
        if (error.message === "User already exists") {
            return res.status(409).json({ message: error.message })
        }
        console.error(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    getUsersController,
    getUsersByIdController,
    postUsersController,
}