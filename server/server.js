const express = require("express");
const app = express();

// Import controllers
const likesController = require("./controllers/likesController");
const videoController = require("./controllers/videosController");
const usersController = require("./controllers/usersController");

// Import models
const Like = require("./models/like");
const Video = require("./models/video");
const User = require("./models/user");

// // Import routes
// const likesRoutes = require("./routes/likesRoutes");
// const videoRoutes = require("./routes/videoRoutes");
// const usersRoutes = require("./routes/usersRoutes");

// Import routes
const likesRoutes = require("./routes/likes"); // there is no file named likesRoutes.js in the routesfolder
const videoRoutes = require("./routes/videos"); // there is no file named videoRoutes.js in the routesfolder
const usersRoutes = require("./routes/users"); // there is no file named usersRoutes.js in the routesfolder

// Set up middleware
app.use(express.json());

// Set up routes
app.use("/likes", likesRoutes);
app.use("/videos", videoRoutes);
app.use("/users", usersRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
