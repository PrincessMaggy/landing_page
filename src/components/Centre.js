import React from 'react'
import phoneimg from '../img/phone.png'
import {motion} from 'framer-motion'
import play from '../img/playstore.svg'
import apple from '../img/apple.svg'



function Centre(props) {

  return (
    <div className='Centre' onClick={props.toggleall}>
        <h1 className='title'>Lorem ipsum ipsum ipsum</h1>
        <div className='centre-container'>
            <div className='phone-img'>
                <img src={phoneimg} alt="img"/>
            </div>
            <div className='centre-content'>
                <h1>Download our <br/> Mobile App</h1>
                <motion.button    
                className='centre-btn'
                variants={props.btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}>
                <img src={apple} alt="apple" />
            </motion.button>

            <motion.button    
            className='centre-btn'
            variants={props.btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}>
                <img src={play} alt="play" />
            </motion.button>
            </div>
        </div>
    </div>
  )
}

export default Centre