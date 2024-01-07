import React from 'react';
import Banner from '../assets/header.webp';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>ST Hiring Platform</h1>
        <p>Hire Best for Best!</p>
        <button>Hire Now</button>
      </div>
    </div>
  )
}

export default Home
