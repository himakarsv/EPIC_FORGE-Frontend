import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Logout() {
  const navigate = useNavigate();
    const handleClick=()=>{
        localStorage.removeItem('token');
        navigate('auth/login',{ replace: true });
        // window.location.href = 'https://epic-forge-backend.onrender.com/auth/login';
    }
  return (
    <>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}
