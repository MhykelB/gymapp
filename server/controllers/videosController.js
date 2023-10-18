// controllers/videosController.js
const Video = require('../models/video');

const videos = [];

// Create a new video
function createVideo(title, description) {
  const newVideo = new Video(videos.length + 1, title, description);
  videos.push(newVideo);
  return newVideo;
}

// Get all videos
function getVideos() {
  return videos;
}

// Get a video by ID
function getVideoById(id) {
  return videos.find((video) => video.id === id);
}

// Update a video by ID
function updateVideo(id, title, description) {
  const video = getVideoById(id);
  if (video) {
    video.title = title || video.title;
    video.description = description || video.description;
  }
  return video;
}

// Delete a video by ID
function deleteVideo(id) {
  const index = videos.findIndex((video) => video.id === id);
  if (index !== -1) {
    videos.splice(index, 1);
  }
}

module.exports = {
  createVideo,
  getVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
};
