// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar"
const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth/login', { replace: false });
  };

  const handleRegisterClick = () => {
    navigate('/auth/register', { replace: false });  };

  return (
    <>
    <Navbar />
    <div style={styles.container}>
      <h1>Welcome to Our Product!</h1>
      <p>Please login or register to continue.</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleLoginClick}>
          Login
        </button>
        <button style={styles.button} onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Home;
