import React from 'react';
import { useState } from 'react';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'

function Nav() {
const [menu, setMenu] = useState(false);

const [navbar, setNavbar] = useState(false);


const changeBackground = ()=>{
  if(window.scrollY > 70){
    setNavbar(true);
  }else{
    setNavbar(false);
  }

}
window.addEventListener('scroll', changeBackground)

const menuToggle = () =>{
    setMenu((p) => !p)
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

const item={
  exit:{
    opacity:0,
    height:0,
    transition:{
      ease:"easeInOut",
      duration:0.3,
      delay:1.2
    }
  }
}

  return (
    <motion.div 
    initial= 'initial' 
    className={navbar ? "Nav active" :'Nav'}
    style={{height: !menu ? '4em':'60vh'}}
    animate='animate'
    >
    <AnimatePresence>
        { setMenu && (
          <motion.div variants={stagger} className='navContainer'>
          <div className='logoham'>
            <motion.h2 variants={header}>
                  <Link id="logo" to="/newapp" className='navlink'>Logo</Link> 
            </motion.h2>
            <motion.div 
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
              className='toggle'
         >
         {!menu?  (
          <BiMenuAltRight onClick={menuToggle}/>) : (<AiOutlineClose  onClick={menuToggle} />) }
         </motion.div>
         </div>
            <motion.nav 
            //  variants={header}  
            className={!menu ? "" :'menuOpen'}>
            <motion.ul>
                <motion.li 
                  initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.8}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:1
                        }
                    }}><Link  className='navlink' to="/about">About Us</Link> </motion.li>

                <motion.li
                className='li'
                 initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.7}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:.8
                        }
                    }}><Link  className='navlink' to="/career">Careers</Link> </motion.li>

                <motion.li
                className='li'
                 initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.6}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:.6
                        }
                    }}><Link  className='navlink' to="/products">SignUp</Link> </motion.li>

                <motion.li 
                className='li'
                initial={{y:80,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{delay:.5}}
                    exit={{
                      opacity:0,
                      y:90,
                        transition:{
                          ease:"easeInOut",
                          delay:.4
                        }
                    }}><Link  className='navlink' to="/contact">Contact Us</Link> </motion.li>


                
                </motion.ul>
                <motion.div 
                variants={btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            >
                    <button className='navbtn'>Get Started</button>
                </motion.div>
            </motion.nav>


         
        </motion.div>
        )}
         
        </AnimatePresence>
    </motion.div>
    
  )
}

export default Nav;