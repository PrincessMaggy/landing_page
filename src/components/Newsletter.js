import React from 'react'
import {motion} from 'framer-motion'

function Newsletter(props) {


  return (
    <div className='news' onClick={props.toggleall}>
        <h1> Create a free account now</h1>
        <p>Lorem ipsum ipsum ipsum ipsumipsum</p>
        <div className='newsletter'>
            <input type="text" className='input' placeholder="Enter your email address"/>
            <motion.span 
                variants={props.btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            >
                    <button className='newsbtn'>Get Started</button>
                </motion.span>
        </div>
    </div>
  )
}

export default Newsletter