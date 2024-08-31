import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate();
  const logout = () =>{
    navigate("/")
  }
  return (
    <>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <button onClick={logout}>Logout</button>
      </ul>
    </>
  )
}

export default Header