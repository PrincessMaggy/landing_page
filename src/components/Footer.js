import React from 'react'
import {Link} from 'react-router-dom';
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

function Footer() {
  return (
    <div className="footer">
      <div className="footerleft">
        <h2><Link id="logo" to="/landing_page" className='footerlogo'>AppName</Link> </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sem, in aliquet justo bibendum non. Suspendisse 
          {/* dapibus ultricies neque sed rhoncus. Integer consequat aliquet aliquet. Quisque aliquam feugiat mauris, eu fringilla dolor eleifend id. Proin nibh dui, dictum nec enim eu, posuere dapibus nulla. Proin interdu
          m condimentum sollicitudin. Ut eros nunc, mattis et mattis nec, viverra eu enim. Aenean fermentum egestas eros. Pellentesque non tellus nisi. Duis convallis ex id dui viverra molestie id at dolor. Nam et libero at 
          enim pretium faucibus sed vel urna. Nunc at bibendum nulla. Nullam a lectus augue. Praesent vitae ipsum blandit, sollicitudin ex eu, viverra ante. Praesent aliquam eros nec ante auctor pellentesque. */}
          </p>
        <motion.div 
      
         className="footerbtn">
          <motion.button    variants={btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}>
            {/* icon */}
            GET IT ON <span>Google PlayStore</span>
          </motion.button>
          <motion.button    variants={btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}>
            {/* icon */}
            Download on the<span>App Store</span>
          </motion.button>
        </motion.div>
      </div>

      <div className="footerright">
            <div className="company">
              <p className="linkTitle">Company</p>
              <Link  className='footerlink' to="/about">About Us</Link> 
              <Link  className='footerlink' to="/landing_page">Career</Link>
              <Link  className='footerlink' to="/landing_page">Business</Link> 
            </div>
            <div className="support">
              <p className="linkTitle">Support</p>
              <Link  className='footerlink' to="/landing_page">Policies </Link> 
              <Link  className='footerlink' to="/landing_page">Learn</Link> 
              <Link  className='footerlink' to="/landing_page">FAQ</Link>
            </div>
            <div className="products">
              <p className="linkTitle">Products</p>
              <Link  className='footerlink' to="/landing_page">Gift Cards</Link> 
              <Link  className='footerlink' to="/landing_page">Airtime To Cash</Link> 
              <Link  className='footerlink' to="/landing_page">Refill</Link>
            </div>
            <div className= "contact">
              <p className="linkTitle">Contact</p>
              <Link  className='footerlink' to="/landing_page">hello@landing_page.com </Link> 
              {/*icons  */}
            </div>
      </div>
  {/* <p>(c) landing_page 2023</p> */}
      
    </div>
  )
}

export default Footer;
