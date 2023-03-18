import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import play from '../img/playstore.svg'
import apple from '../img/apple.svg'
import  twitter from '../img/twitter.svg'
import  youtube from '../img/youtube.svg'
import  instagram from '../img/instagram.svg'
import  facebook from '../img/facebook.svg'

function Footer(props) {
  return (
    <div className='footer-container' onClick={props.toggleall}>
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
          <motion.button    variants={props.btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}>
            <img src={play} alt="play" />
          </motion.button>
          <motion.button    variants={props.btnGroup}
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}>
            <img src={apple} alt="apple" />
          </motion.button>
        </motion.div>
      </div>

      <div className="footerright">
            <div className="company">
              <p className="linkTitle">Company</p>
              <Link  className='footerlink' to="/about">About Us</Link> 
              <Link  className='footerlink' to="/sample">Career</Link>
              <Link  className='footerlink' to="/sample">Business</Link> 
            </div>
            <div className="support">
              <p className="linkTitle">Support</p>
              <Link  className='footerlink' to="/sample">Policies </Link> 
              <Link  className='footerlink' to="/sample">Learn</Link> 
              <Link  className='footerlink' to="/sample">FAQ</Link>
            </div>
            <div className="products">
              <p className="linkTitle">Products</p>
              <Link  className='footerlink' to="/sample">Gift Cards</Link> 
              <Link  className='footerlink' to="/sample">Airtime To Cash</Link> 
              <Link  className='footerlink' to="/sample">Refill</Link>
            </div>
            <div className= "contact">
              <p className="linkTitle">Contact</p>
              <Link  className='footerlink' to="/sample">hello@sample.com </Link> 
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
              {/*icons  */}
            </div>
      </div>
      </div>
  <p className='copy'>&copy; sample 2023</p>
      
    </div>
  )
}

export default Footer;
