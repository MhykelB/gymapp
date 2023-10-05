// models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true }, 
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  views: { type: Number, default: 0 }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', videoSchema);
