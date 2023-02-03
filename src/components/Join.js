import React from 'react'
import {motion} from 'framer-motion'

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



function Join() {
  return (
    <div className="Join">
          <div className="join-left">
            <h1>Introducing newapp</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.dapibus ultricies neque sed rhoncus. Integer consequat aliquet aliquet. Quisque aliquam feugiat mauris, eu fringilla dolor eleifend id. Proin nibh dui, dictum nec enim eu, posuere dapibus nulla. Proin interdu
        m condimentum sollicitudin. Ut eros nunc, mattis et mattis nec, viverra e</p>
        

            <motion.button
             variants={btnGroup}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}>Join the waitlist</motion.button>
          </div>
          <div className="join-right">

          </div>
    </div>
  )
}

export default Join