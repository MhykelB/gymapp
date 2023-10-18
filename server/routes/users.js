// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = new User(users.length + 1, name, email);
  users.push(newUser);
  res.status(201).json(newUser);
});

// Get all users
router.get('/users', (req, res) => {
  res.json(users);
});

// Get a user by ID
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Update a user by ID
router.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user by ID
router.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
