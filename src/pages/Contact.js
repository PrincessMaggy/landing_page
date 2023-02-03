import React from 'react';
import Nav from '../components/Nav';
import Form from '../components/Form';
import Footer from '../components/Footer';
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
              
            {/* <Form/> */}
           </motion.div>
           
          <Footer/>
    </motion.div>
  )
}

export default Contact