import React from 'react'
import Logo from '../assets/ST_logo.avif'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>STHire</div>
      <div className='rightSide'>
        <div id="nav-comp">Home</div>
        <div id="nav-comp">Hire</div>
        <div id="nav-comp">LogOut</div>
      </div>
    </div>
  )
}

export default Navbar
