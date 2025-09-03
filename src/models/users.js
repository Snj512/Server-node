const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
      unique: true,
      length: 50,
    },
    password: {
      type: "text",
    },
    role: {
      type: "enum",
      enum: ["admin", "manager", "user"],
      default: "user",
    },
    created_at: {
      type: "timestamp",
      createDate: true,
    },
  },
});

module.exports = User;
