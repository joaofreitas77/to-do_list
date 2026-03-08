const { EntitySchema } = require('typeorm');

const User = new EntitySchema({
    name: "users",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "varchar",
        },
        username: {
            type: "varchar",
            nullable: false
        },
        email: {
            type: "varchar",
            nullable: false,
        },
        password: {
            type: "varchar",
            nullable: false,
        }
    }
})



module.exports = { User };