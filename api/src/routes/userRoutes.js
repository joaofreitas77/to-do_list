const {
    getUsersController,
    getUsersByIdController,
    postUsersController,
    putUsersController,

} = require("../controllers/userController")

module.exports = (app) => {
    //pegando controlador de usuario
    app.get("/users", getUsersController)
    //pegando usuario por id com controlador
    app.get("/users/:id", getUsersByIdController)
    //criando usuarios com post
    app.post("/users", postUsersController)
    //editando usuarios com put
    app.put("/users/:id", putUsersController)
}