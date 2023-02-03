import Nav from '../components/Nav';
import React from 'react';
import Footer from '../components/Footer';
import Features from '../components/Features';
import {motion} from 'framer-motion'




function About() {
  return (
    <div 
    className="About">
         <Nav/>
         <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
         </motion.div>
         {/* <Features/> */}
          <Footer/>
    </div>
  )
}

export default About