import React from 'react'

export default function Logout() {
    const handleClick=()=>{
        localStorage.removeItem('token');
        window.location.href = 'https://epic-forge-backend.onrender.com/auth/login';
    }
  return (
    <>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}
