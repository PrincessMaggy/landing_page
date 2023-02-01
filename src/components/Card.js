import React from 'react'
import { IconContext } from 'react-icons/lib'
import { IoMailOutline, IoChevronForward, IoApps, IoNotifications,IoPieChart, IoNewspaper, IoCard, IoColorFill } from 'react-icons/io5'

import {motion} from 'framer-motion'


function Card() {

    let easing = [0.6, -0.05, 0.01, 0.99];

    const container ={
        show:{
            transition:{
                staggerChildren:0.2
            }
        }
    };

    const item ={
        hidden:{opacity:0, y:20},
        show:{
            opacity:1,
            y:0,
            transition:{
                ease:'easeInOut',
                duration:0.2
            }
        }
    }

    const title ={
        hidden:{
            y:60,
            opacity:0
        },
        show:{
            y:0,
            opacity:1,
            transition:{
                delay:0.2,
                duration:0.6,
                ease:easing
            }
        }
    }

    const hoverEffect ={
        whileHover:{
            scale:1.5, rotate:630, borderRadius: "100%"
        },
        whileTap:{
            scale:0.8, rotate:630, borderRadius:"100%"
        }
    }


  return (
    <motion.div className='service_container'>
        <motion.div variants={title} className='title_wrapper'>
            <motion.span 
            className='service_title'
            initial={{y:20,opacity:0}}
            animate={{y:0, opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.5, delay:1.8}}
            >Our Services</motion.span>
            <motion.h2
             initial={{y:200,opacity:0}}
            animate={{y:0, opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.5, delay:1}}
            >Save Time Lorem ipsum dolor sit amet<br/> for your business</motion.h2>
        </motion.div>

        <motion.div 
        className='service_card'
        variants={container}
        initial="hidden"
        exit= "exit"
        whileInView = "show"
        viewport={{once:false}}
        >
            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"  className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                       
                        <IoMailOutline/>
                    </IconContext.Provider>
                </motion.span>
                <motion.h3 variants={title}>Lorem ipsum dolor dolultricies<br/> lorem ipsum</motion.h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"  className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                       
                        <IoApps/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                    <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"  className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                       
                        <IoNotifications/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>


            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"  className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                       
                        <IoPieChart/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            
            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"  className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                       
                        <IoColorFill/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            
            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"  className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                       
                        <IoNewspaper/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            
            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"  className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        <IoCard/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            
            <motion.div className='card' variants={item}>
                <motion.span variants={hoverEffect} whileHover="whileHover"   className='service_icon' style={{backgroundColor:"#fff"}}>
                    <IconContext.Provider value={{color: "#ff631c", size:"25px"}}>
                        <IoMailOutline/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lorem ipsum dolor dolultricies<br/> lorem ipsum</h3>
                <a href='#home'>
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#ff631c", size:"18px"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

        </motion.div>
    
    </motion.div>
  )
}

export default Card