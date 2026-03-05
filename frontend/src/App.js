// Main App component with routing
// Sets up React Router and handles route protection

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

// Route guard component to protect authenticated routes
const ProtectedRoute = ({ children }) => {
  const [username] = useLocalStorage('username');
  return username ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/welcome"
            element={
              <ProtectedRoute>
                <WelcomePage />
              </ProtectedRoute>
            }
          />
          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
