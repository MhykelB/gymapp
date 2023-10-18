// controllers/likesController.js
const Like = require('../models/like');

const likes = [];

// Create a new like
function createLike(userId, videoId) {
  const newLike = new Like(likes.length + 1, userId, videoId);
  likes.push(newLike);
  return newLike;
}

// Get all likes
function getLikes() {
  return likes;
}

// Get a like by ID
function getLikeById(id) {
  return likes.find((like) => like.id === id);
}

// Delete a like by ID
function deleteLike(id) {
  const index = likes.findIndex((like) => like.id === id);
  if (index !== -1) {
    likes.splice(index, 1);
  }
}

module.exports = {
  createLike,
  getLikes,
  getLikeById,
  deleteLike,
};
