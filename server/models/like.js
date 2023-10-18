// models/like.js
const likes = [];

class Like {
  constructor(id, userId, videoId) {
    this.id = id;
    this.userId = userId;
    this.videoId = videoId;
  }
}

module.exports = Like;
