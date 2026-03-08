require('dotenv').config();
const { DataSource } = require('typeorm');
const { User } = require('../entities/user');
const { Task } = require('../entities/user');


const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Task],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize().then(function () {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
})
    .catch(function (error) {
        console.log("Erro durante a inicialização do DataSource:", error);
    })

module.exports = { AppDataSource }