// Login page component
// Manages login state and integrates with the login form

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import authService from '../services/authService';
import useLocalStorage from '../hooks/useLocalStorage';
import './LoginPage.css';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [savedUsername, setSavedUsername] = useLocalStorage('username');
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await authService.login(credentials);

      if (response.message === 'Login successful') {
        // Save username for future visits
        setSavedUsername(credentials.username);
        // Navigate to welcome page
        navigate('/welcome');
      }
    } catch (error) {
      // Error is handled in LoginForm component
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <LoginForm
          onLogin={handleLogin}
          initialUsername={savedUsername}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default LoginPage;