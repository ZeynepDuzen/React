import React from 'react';
import reactLogo from './images/react.png';
import '../styles/Navbar.css';


function Navbar(){
   return(
       <>
       <nav className='navigation'>
         <img src={reactLogo} className='reactLogo' alt='this is an alt message'/>
         <h1 className='left-title'>React Facts</h1>
         <h3 className='right-title'>React Course - 1</h3>
       </nav>
       </>                       
   )
}

export default Navbar;