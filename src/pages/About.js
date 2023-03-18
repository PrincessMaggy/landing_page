import Nav from '../components/Nav';
import React from 'react';
import Footer from '../components/Footer';
import Features from '../components/Features';
import {motion} from 'framer-motion'

import { useState } from 'react';



function About() {
  const[submenu, setsubmenu]= useState(false);
  const[submenu1, setsubmenu1]= useState(false);

  const togglesubmenu =()=>{
    setsubmenu(!submenu)
    setsubmenu1(false)
  }
  const togglesubmenu1 =()=>{
    setsubmenu1(!submenu1)
    setsubmenu(false)
  }
const toggleall =()=>{
  setsubmenu(false);
  setsubmenu1(false);
}
  return (
    <div 
    className="About">
         <Nav toggleall={toggleall} submenu={submenu} submenu1={submenu1} togglesubmenu={togglesubmenu} togglesubmenu1= {togglesubmenu1}/>
         <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <Features toggleall={toggleall}/>
          <Footer toggleall={toggleall}/>
         </motion.div>
       
    </div>
  )
}

export default About