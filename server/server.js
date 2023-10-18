const express = require('express');
const app = express();

// Import controllers
const likesController = require('./controllers/likesController');
const videoController = require('./server/controllers/videoController');
const usersController = require('./server/controllers/usersController');

// Import models
const Like = require('./server/models/likes');
const Video = require('./server/models/video');
const User = require('./server/models/user');

// Import routes
const likesRoutes = require('./server/routes/likesRoutes');
const videoRoutes = require('./server/routes/videoRoutes');
const usersRoutes = require('./server/routes/usersRoutes');

// Set up middleware
app.use(express.json());

// Set up routes
app.use('/likes', likesRoutes);
app.use('/videos', videoRoutes);
app.use('/users', usersRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});