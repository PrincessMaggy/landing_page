import React from 'react';
import Nav from '../components/Nav';

import Footer from '../components/Footer';
import {motion} from 'framer-motion'

function Career() {
  return (
    <motion.div
   initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
      >
           <Nav/>
           <motion.div
           initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
  
           </motion.div>
          <Footer/>
    </motion.div>
  )
}

export default Career