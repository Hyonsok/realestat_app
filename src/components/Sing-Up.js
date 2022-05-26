import React from 'react';
import '../App.css';
import { Button } from './Button.js';
import './Singup.css'

function SingUp() {
  return (
    <div className='signup-container'>
      <div className='text'>
      <p className='hide1'><h1>We're here to guide you home</h1><br/>Let us guide your real estate adventure with the latest news, info, stats, opinions and help that's actually worthwhile</p>
      </div>
      <div className="signup">
      <form>
            <h2>Welcome home</h2>
            <h3 className='sign-p'>Start your real estate adventure here. <br></br> It's free!</h3>
            <input
              className='sign-input'
              name='text'
              type='text'
              placeholder='NAME*'
            />
             <input
              className='sign-input'
              name='email'
              type='email'
              placeholder='EMAIL*'
            />
             <input
              className='sign-input2'
              name='text'
              type='password'
              placeholder='PASSWORD*'
            />
              <label>

    <input type="checkbox" name="fruit[]" value="apples"/>
    <span>Allow RE Peeps.ca to send you email offers and updates</span>
  </label>
        
            <div className='contact-us'>
            <button className='contact-btn' type="submit">LET'S DO THIS</button>
            </div>
            
        </form>
        </div>
    </div>
  );
}

export default SingUp;