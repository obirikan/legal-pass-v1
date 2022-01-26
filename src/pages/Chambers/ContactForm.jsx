import React from 'react';
import { Link } from 'react-router-dom';
import './styles/cf.css'

 const ContactForm = () => {
  return (
  <div className='parent-2'>
     <div className='items'>
         <h2 className='head'><b>About Us</b></h2>
         <ul>
             <Link to="/"><li>Vision</li></Link>
             <Link to="/"><li>Mission</li></Link>
             <Link to="/"><li>Values</li></Link>
         </ul>
     </div>
     <div className='items'>
         <h2 className='head'><b>Info</b></h2>
         <ul>
             <Link to="/"><li>Career</li></Link>
             <Link to="/"><li>Investment</li></Link>
         </ul>
     </div>
     <div className='items'>
         <h2 className='head'><b>Legal</b></h2>
         <ul>
             <Link to="/"><li>Privacy</li></Link>
             <Link to="/"><li>Terms of use</li></Link>
         </ul>
     </div>
     <div className='items'>
         <h2 className='head'><b>Contact</b></h2>
         <ul>
             <Link to="/"><li>+2330323424</li></Link>
             <Link to="/"><li>+2330323424</li></Link>
         </ul>
     </div>
  </div>
  );
};

export default ContactForm