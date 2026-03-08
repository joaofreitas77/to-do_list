const {
    getUsersController,
    getUsersByIdController,
    postUsersController,

} = require("../controllers/userController")

module.exports = (app) => {
    //pegando controlador de usuario
    app.get("/users", getUsersController)
    //pegando usuario por id com controlador
    app.get("/users/:id", getUsersByIdController)
    //criando usuarios com post
    app.post("/users", postUsersController)
}