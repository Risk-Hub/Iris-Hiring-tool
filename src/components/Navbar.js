import React from 'react'
import {Link} from "react-router-dom"
// import Logo from '../assets/ST_logo.avif'
import '../styles/Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>STHire</div>
      <div className='rightSide'>
        <div id="nav-comp">
          <Link to="/">Home</Link>
        </div>
        <div id="nav-comp">
          <Link to="/teams">Hire</Link>
        </div>
        <div id="nav-comp">
          <Link to="/logout">LogOut</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
