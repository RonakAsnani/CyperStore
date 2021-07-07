const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    phone: 99999999999,
    isAdmin: true,
  },
  {
    name: "Rponak Asnani",
    email: "ronak@example.com",
    phone: 99999999998,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ron Ray",
    email: "ron@example.com",
    phone: 99999999997,
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
