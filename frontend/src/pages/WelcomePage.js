// Welcome page component
// Displays user greeting and provides logout functionality

import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import './WelcomePage.css';
import './WelcomePage.css';

const WelcomePage = () => {
  const [username, setUsername] = useLocalStorage('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear username from localStorage
    setUsername('');
    // Navigate back to login
    navigate('/');
  };

  // If no username, redirect to login (route guard)
  if (!username) {
    navigate('/');
    return null;
  }

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1>Welcome, {username}!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;