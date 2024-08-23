import React from 'react'

export default function Logout() {
    const handleClick=()=>{
        localStorage.removeItem('token');
        window.location.href = 'auth/login';
    }
  return (
    <>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}
