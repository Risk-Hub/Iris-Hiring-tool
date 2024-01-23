import React from 'react';
import Banner from '../assets/header.webp';
import "../styles/Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>ST Hiring Platform</h1>
        <p>Hire Best for Best!</p>
        <Link to="/teams"><button type="button" class="btn btn-link">Hire Now</button></Link>
      </div>
    </div>
  )
}

export default Home
