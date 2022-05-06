import React from 'react';
import '../App.css';
import { Button } from './Button.js';
import './Contact.css';

function ContactUs() {
  return (
    <div className='contact-container'>
      <div className='text'>
      <h1>Let's Talk With Us!</h1>
      <p className='hide'>Do you want to contact us?<br/>Please fill out the form next to it and press the submit button.<br/>We'll get back to you<br/>Thank you!<br/></p>
      </div>
      <form>
            <h2>Your Name</h2>
            <input
              className='contact-input'
              name='text'
              type='text'
            />
            <h2>Contact Number</h2>
             <input
              className='contact-input'
              name='text'
              type='text'
            />
            <h2>Content</h2>
             <input
              className='contact-input2'
              name='text'
              type='text'
            />
            <div className='contact-us'>
            <button className='contact-btn' type="submit">Submit</button>
            </div>
            
        </form>

    </div>
  );
}

export default ContactUs;