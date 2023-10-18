// controllers/usersController.js
const User = require('../models/user');

const users = [];

// Create a new user
function createUser(name, email) {
  const newUser = new User(users.length + 1, name, email);
  users.push(newUser);
  return newUser;
}

// Get all users
function getUsers() {
  return users;
}

// Get a user by ID
function getUserById(id) {
  return users.find((user) => user.id === id);
}

// Update a user by ID
function updateUser(id, name, email) {
  const user = getUserById(id);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
  }
  return user;
}

// Delete a user by ID
function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
