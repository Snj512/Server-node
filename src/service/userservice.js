const AppDataSource = require("../config/dbconnect");
const User = require("../models/users");

const createUser = async (userData) => {
  const userRepository = AppDataSource.getRepository(User);
  const newUser = userRepository.create(userData);
  return await userRepository.save(newUser);
};

const findUserByUsername = async (username) => {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.findOneBy({ username });
};

module.exports = { createUser, findUserByUsername };
