// Service layer for authentication API calls
// Abstracts HTTP requests and provides clean interface for auth operations

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const authService = {
  // Login user with provided credentials
  async login(credentials) {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      // Throw the error response data for component handling
      throw error.response?.data || { message: 'Network error' };
    }
  }
};

export default authService;