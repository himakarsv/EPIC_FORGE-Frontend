import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://epic-forge-backend.onrender.com/auth/login', { email, password ,role});
      console.log("Login successfull");

      // After a successful login, store the token and role in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);

      // Redirect based on role
      if (response.data.role === 'seller') {
        // history.push('/seller');
        navigate('/seller', { replace: true });

      } else if (response.data.role === 'buyer') {
        // history.push('/buyer');
        navigate('/buyer', { replace: true });

      }
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <label>User Type:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
