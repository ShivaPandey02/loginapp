"use client"
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import '../Style/style.css';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe');

    if (storedRememberMe && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please provide both username and password');
      return;
    }

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('rememberMe');
    }

    setError('');
    navigate('/home');
  };

  return (
    <div>
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
      <label>
        <input
          className='checkbox'
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Remember me
      </label>
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
    localStorage.removeItem('rememberMe');
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
