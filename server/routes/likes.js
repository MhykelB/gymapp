// routes/likes.js
const express = require('express');
const router = express.Router();
const Like = require('../models/like');

// Create a new like
router.post('/likes', (req, res) => {
  const { userId, videoId } = req.body;
  const newLike = new Like(likes.length + 1, userId, videoId);
  likes.push(newLike);
  res.status(201).json(newLike);
});

// Get all likes
router.get('/likes', (req, res) => {
  res.json(likes);
});

// Get a like by ID
router.get('/likes/:id', (req, res) => {
  const likeId = parseInt(req.params.id);
  const like = likes.find((like) => like.id === likeId);
  if (like) {
    res.json(like);
  } else {
    res.status(404).json({ message: 'Like not found' });
  }
});

// Delete a like by ID
router.delete('/likes/:id', (req, res) => {
  const likeId = parseInt(req.params.id);
  const index = likes.findIndex((like) => like.id === likeId);
  if (index !== -1) {
    likes.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Like not found' });
  }
});

module.exports = router;
