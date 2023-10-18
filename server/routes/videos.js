// routes/videos.js
const express = require('express');
const router = express.Router();
const Video = require('../models/video');

// Create a new video
router.post('/videos', (req, res) => {
  const { title, description } = req.body;
  const newVideo = new Video(videos.length + 1, title, description);
  videos.push(newVideo);
  res.status(201).json(newVideo);
});

// Get all videos
router.get('/videos', (req, res) => {
  res.json(videos);
});

// Get a video by ID
router.get('/videos/:id', (req, res) => {
  const videoId = parseInt(req.params.id);
  const video = videos.find((video) => video.id === videoId);
  if (video) {
    res.json(video);
  } else {
    res.status(404).json({ message: 'Video not found' });
  }
});

// Update a video by ID
router.put('/videos/:id', (req, res) => {
  const videoId = parseInt(req.params.id);
  const video = videos.find((video) => video.id === videoId);
  if (video) {
    video.title = req.body.title || video.title;
    video.description = req.body.description || video.description;
    res.json(video);
  } else {
    res.status(404).json({ message: 'Video not found' });
  }
});

// Delete a video by ID
router.delete('/videos/:id', (req, res) => {
  const videoId = parseInt(req.params.id);
  const index = videos.findIndex((video) => video.id === videoId);
  if (index !== -1) {
    videos.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Video not found' });
  }
});

module.exports = router;
