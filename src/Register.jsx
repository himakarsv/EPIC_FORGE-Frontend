import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Default user type is buyer
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://epic-forge-backend.onrender.com/auth/register', {
        username,
        email,
        password,
        role,
      });
      console.log(response.data);

      // After successful registration, store the token and userType in localStorage
    //   localStorage.setItem('token', response.data.token);
    //   localStorage.setItem('userType', response.data.userType);

      // Redirect based on userType
    //   if (response.data.role === 'seller') {
    //     // history.push('/seller/dashboard');
        navigate('/auth/login', { replace: true });

    //   } else {
    //     // history.push('/buyer/products');
    //     navigate('/auth/login', { replace: true });

    //   }
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
