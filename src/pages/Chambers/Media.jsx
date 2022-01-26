import React from 'react';
import './styles/media.css'
const Media= () => {
  return (
  <div className='smedia-cont'>
    <div className='parent-cont'>
      <center><h2>Social Media</h2></center>
       <div className='children'>
           <div className='child'><a href="#"><img src='imgs/ig.png' className='img'/></a></div>
           <div className='child'><a href="#"><img src='imgs/l.png' className='img'/></a></div>
           <div className='child'><a href="#"><img src='imgs/f.png' className='img'/></a></div>
           <div className='child'><a href="#"><img src='imgs/t.png' className='img'/></a></div>
       </div>
    </div>
  </div>
  )};
export default Media