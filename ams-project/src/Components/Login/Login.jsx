import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication logic
    if (username === 'admin' && password === '1234') {
      onLogin(true); // Call the onLogin function passed from App.js
      navigate('/my-asset'); // Redirect to MyAsset page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Asset Management System</h1>
        <h2>Welcome Back!</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p>or</p>
        <button className="google-login-button">
          Login with Google
        </button>
        <p><a href="#">Forgot Password?</a></p>
      </div>
    </div>
  );
};

export default Login;
