// Routes for authentication endpoints
// Defines API routes and connects them to controller functions

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /login - handles user authentication
router.post('/login', authController.login);

module.exports = router;