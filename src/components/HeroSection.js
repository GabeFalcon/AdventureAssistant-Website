import React from 'react';
import '../App.css'; 
import { Button } from './Button'; 
import './HeroSection.css'; 

function HeroSection() {
  return (
    <div className='hero-container'> 
      <div className='hero-content'> 
        <h1>ADVENTURE AWAITS</h1> 
        <p>What Can I Assist You With?</p> 
        <div className='hero-btns'> 
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            link='https://discord.com/oauth2/authorize?client_id=1224901358390607952&permissions=8&scope=applications.commands+bot'
          >
            Invite <i className='fa-brands fa-discord' /> 
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            link='https://discord.gg/KMwKr7G4By'
          >
            Support Server <i className='fa-solid fa-wrench' /> 
          </Button>
        </div>
      </div>
      <div className='video-container'> 
        <video src='/videos/video-2.mp4' autoPlay loop muted /> 
      </div>
    </div>
  );
}

export default HeroSection;
