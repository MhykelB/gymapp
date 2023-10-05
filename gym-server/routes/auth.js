const express = require('express');
const router = express.Router();
const { registerUser, loginUser, resetPassword, changePassword } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/reset-password', resetPassword);
router.post('/change-password', changePassword);
router.get('/logout', (req, res) => {
  res.send('Logout successful');
});

module.exports = router; 