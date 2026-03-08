const { EntitySchema } = require('typeorm');

const Task = new EntitySchema({
    name: "tasks",
    tableName: "tasks",
    columns: {
        id: {
            primary: true,
            type: "varchar",
        },
        title: {
            type: "varchar",
            nullable: false,
        },
        content: {
            type: "varchar",
            nullable: true
        },
        is_completed: {
            type: "boolean",
            default: false
        },
        user_id: {
            type: "varchar",
            nullable: true
        }
    },

    relations: {
        user: {
            type: "many-to-one",
            target: "users",
            joinColumn: {
                name: "user_id"
            },
            nullable: true
        }
    }
})

module.exports = { Task };