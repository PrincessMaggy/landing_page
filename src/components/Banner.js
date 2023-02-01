import React from 'react'
import {motion} from 'framer-motion'
    
// icons
import { IconContext } from 'react-icons/lib';
import {IoStar} from 'react-icons/io5'

function Banner() {
    let easing = [0.6, -0.05, 0.01, 0.99];
    
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
      
      const stagger = {
        animate:{
          transition:{
            delayChildren:0.4,
            staggerChildren:0.2,
            staggerDirection:1
          }
        }
      }
      
  
      
      

  return (
    <div>
            <div  initial= 'initial' 
                animate='animate'
                className="main">
                <motion.div 
                className="hero">
                  <div className="hero-left">
                    <h1>NewApp</h1>
                  
                    <p >Lorem ipsum dolultricies neque sed rhoncus. Integer consequat aliquet aliquet. Quisque aliquam feugiat mauris, 
                    eu fringilla dolor eleifend id. Proin nibh dui, dictum nec enim eu, posuere dapibus nulla. Proin interdu </p>
                    <motion.div 
                      variants={btnGroup}
                      whileHover={{scale:1.05}}
                      whileTap={{scale:0.95}}
                      >
                      <button className='navbtn'>Get Started</button>
                      </motion.div>
                    <motion.div className='review_container' variants={stagger}>
                      <motion.p  className='total_review'>64+ reviews</motion.p>
                      <IconContext.Provider value={{color:"#fff", size: "18px"}}>
                          <motion.span whileHover={{scale:1.2, rotate:180, borderRadius:"100%", cursor:'pointer'}}><IoStar/></motion.span>
                          <motion.span whileHover={{scale:1.2, rotate:180, borderRadius:"100%", cursor:'pointer'}}><IoStar/></motion.span>
                          <motion.span whileHover={{scale:1.2, rotate:180, borderRadius:"100%", cursor:'pointer'}}><IoStar/></motion.span>
                          <motion.span whileHover={{scale:1.2, rotate:180, borderRadius:"100%", cursor:'pointer'}}><IoStar/></motion.span>
                          <motion.span whileHover={{scale:1.2, rotate:180, borderRadius:"100%", cursor:'pointer'}}><IoStar/></motion.span>
                      </IconContext.Provider>
                      <p className='more_review'>More than 500+ people patronizing our services</p>
                  </motion.div>
                 
              </div>
                <motion.div 
                className="hero-right" 
                initial={{opacity:0, x:200}} 
                animate={{opacity:1, x:0}}
                transition={{
                  duration:0.5,
                  delay:0.6
                }}
                >
                  </motion.div>
                </motion.div>
            </div>
        </div>

  )
}

export default Banner;