// Controller for authentication-related operations
// Handles login logic and credential validation

const { sendSuccess, sendError } = require('../utils/responseHandler');

const login = (req, res) => {
  const { username, password } = req.body;

  // Basic validation - in a real app, this would involve database checks
  if (!username || !password) {
    return sendError(res, 'Username and password are required', 400);
  }

  // Simple credential check - hardcoded for demo purposes
  if (username === 'admin' && password === 'admin') {
    return sendSuccess(res, {
      message: 'Login successful',
      username: username
    });
  } else {
    return sendError(res, 'Invalid username or password', 401);
  }
};

module.exports = {
  login
};