import React from 'react';
import Nav from '../components/Nav';
import { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import {motion} from 'framer-motion'

function Career() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

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
    <motion.div
   initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
      >
           <Nav toggleall={toggleall} submenu={submenu} submenu1={submenu1} togglesubmenu={togglesubmenu} togglesubmenu1= {togglesubmenu1}/>
           <motion.div
           initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
  
           </motion.div>
          <Footer toggleall={toggleall}/>
    </motion.div>
  )
}

export default Career