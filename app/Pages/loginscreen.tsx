"use client"
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import '../Style/style.css';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please provide both username and password');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    setError('');
    navigate('/home');
  };

  return (
    <div className='login-form'>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    navigate('/');
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');

    if (!storedUsername) {
      navigate('/');
    }
  }, [navigate]);

  const storedUsername = localStorage.getItem('username');

  return (
    <div>
      <h1>Welcome, {storedUsername}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
