import React from 'react';
import '../styles/MainContent.css';
import reactLogo from './images/react.png';

function MainContent(){
   return(
                              
     <div className='maincontent'>
      <br/> 
      <br/>                                              
      <h1 className='main-title'>Fun Facts About React</h1> 
      <ul className='list'>
         <img src={reactLogo} className='logo1' alt="this is an alt message" />                      
         <li className='clause1'>Was first released in 2013</li>
         <img src={reactLogo} className='logo2' alt='this is an alt message'/>                    
         <li className='clause2'>Was originally created by Jordan Walke</li> 
         <img src={reactLogo} className='logo3' alt='this is an alt message'/>                    
         <li className='clause3'>Has well over 100K stars on GitHub</li>
         <img src={reactLogo} className='logo4' alt='this is an alt message'/>                     
         <li className='clause4'>Is maintained by Facebook</li>
         <img src={reactLogo} className='logo5' alt='this is an alt message'/>                     
         <li className='clause5'>Powers thousands of enterprise apps, includinding mobile apps</li>                     
      </ul>
     </div>
                         
   )
}

export default MainContent;