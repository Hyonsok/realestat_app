import React from 'react';
import '../App.css';
import { Button } from './Button.js';
import './Hero.css';


function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>We are here to help you.</h1>
      <p>What are you waiting for?</p>
      <form>
            <input
              className='hero-input'
              name='submit'
              type='sbumit'
              placeholder='City, Neighbourhood, Adress, School'
            />
        </form>
      <div className='hero-btns'>
        <Button
          cbuttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact Me
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Search <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hero;