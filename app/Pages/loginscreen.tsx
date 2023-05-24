"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setError, clearError } from '../GlobalRedux/reducers';
import { RootState } from '../GlobalRedux/store';
import { useNavigate } from 'react-router-dom';
import '../Style/style.css';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { username, password, error } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      dispatch(setUsername(storedUsername));
      dispatch(setPassword(storedPassword));
      navigate('/home');
    }
  }, [dispatch, navigate]);

  const handleLogin = () => {
    if (!username || !password) {
      dispatch(setError('Please provide both username and password'));
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    dispatch(clearError());
    navigate('./home');
  };

  return (
    <div className="login-form">
      <input
        type="text"
        value={username}
        onChange={(e) => dispatch(setUsername(e.target.value))}
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        placeholder="Password"
      />
      <br />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScreen;
