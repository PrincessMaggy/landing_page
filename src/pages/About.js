import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import {motion} from 'framer-motion'




function About() {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className="About">
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

export default About