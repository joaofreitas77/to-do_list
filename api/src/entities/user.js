const { EntitySchema } = require('typeorm');

const User = new EntitySchema({
    name: "username",
    tableName: "user",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: "increment"
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