import React from 'react';
import { useState } from 'react';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

function Nav() {
const [menuOpen, menuClose] = useState(false)
const menuToggle = () =>{
    menuClose((p) => !p)
}

// animations
let easing = [0.6, -0.05, 0.01, 0.99];
const stagger ={
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.8, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easing
    }
  }
}

const btnGroup ={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easing
    }
  }
}


  return (
    <motion.div 
    initial= 'initial' 
    className="Nav"
    animate='animate'
    >
         <motion.div variants={stagger} className='navContainer'>
            <motion.h2 variants={header}><Link id="logo" to="/newapp" className='navlink'>Logo</Link> </motion.h2>
         <motion.nav variants={stagger} className={!menuOpen ? "" :'isMenu'}>
            <div><Link  className='navlink' to="/about">About Us</Link> </div>
            <Link  className='navlink' to="/career">Careers</Link> 
            <Link  className='navlink' to="/products">Products</Link> 
            <Link  className='navlink' to="/contact">Contact Us</Link> 
            <motion.div 
            variants={btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}
         >
                <button className='navbtn'>Get Started</button>
            </motion.div>
         </motion.nav>
         <motion.div 
         variants={header} 
         className='toggle'
         >
         {!menuOpen?  (<BiMenuAltRight onClick={menuToggle}/>) : (<AiOutlineClose  onClick={menuToggle} />) }
           
         </motion.div>
        </motion.div>
    </motion.div>
    
  )
}

export default Nav;