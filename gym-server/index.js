const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const crypto = require('crypto');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();


if (!process.env.SESSION_SECRET) {
    const secretKey = crypto.randomBytes(32).toString('hex');
    fs.appendFileSync('.env', `\nSESSION_SECRET=${secretKey}`);
    console.log('New secret key generated and saved in .env file.');
  } else {
    console.log('SESSION_SECRET already exists in .env file.');
  }
app.use(cors());
app.use(express.json());

const secretKey = crypto.randomBytes(32).toString('hex');

fs.writeFileSync('.env', `SESSION_SECRET=${secretKey}\n`);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
