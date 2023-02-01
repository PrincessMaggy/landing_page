import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import {motion} from 'framer-motion'

function Contact() {
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

export default Contact