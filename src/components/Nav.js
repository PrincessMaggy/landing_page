import React from 'react';
import { useState } from 'react';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';

function Nav() {
const [menuOpen, menuClose] = useState(false)
const menuToggle = () =>{
    menuClose((p) => !p)
}


  return (
    <div className="Nav">
         <div className='navContainer'>
            <h2><Link id="logo" to="/newapp" className='navlink'>NewApp</Link> </h2>
         <nav className={!menuOpen ? "" :'isMenu'}>
            <Link  className='navlink' to="/about">About Us</Link> 
            <Link  className='navlink' to="/career">Careers</Link> 
            <Link  className='navlink' to="/products">Products</Link> 
            <Link  className='navlink' to="/contact">Contact Us</Link> 
            <div>
                <button className='navbtn'>Get Started</button>
            </div>
         </nav>
         <div className='toggle'>
         {!menuOpen?  (<BiMenuAltRight onClick={menuToggle}/>) : (<AiOutlineClose  onClick={menuToggle} />) }
           
         </div>
        </div>
    </div>
    
  )
}

export default Nav;