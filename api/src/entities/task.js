const { EntitySchema } = require('typeorm');

const Task = new EntitySchema({
    name: "task",
    tableName: "tasks",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: "increment"
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
        }
    },

    relations: {
        user: {
            type: "many-to-one",
            target: "User",
            joinColumn: {
                name: "user_id"
            },
            nullable: true
        }
    }
})

module.exports = { Task };