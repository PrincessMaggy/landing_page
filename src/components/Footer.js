import React from 'react'
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <div className="footer">
      <div className="footerleft">
      <h2><Link id="logo" to="/newapp" className='navlink'>NewApp</Link> </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum diam sem, in aliquet justo bibendum non. Suspendisse 
        {/* dapibus ultricies neque sed rhoncus. Integer consequat aliquet aliquet. Quisque aliquam feugiat mauris, eu fringilla dolor eleifend id. Proin nibh dui, dictum nec enim eu, posuere dapibus nulla. Proin interdu
        m condimentum sollicitudin. Ut eros nunc, mattis et mattis nec, viverra eu enim. Aenean fermentum egestas eros. Pellentesque non tellus nisi. Duis convallis ex id dui viverra molestie id at dolor. Nam et libero at 
        enim pretium faucibus sed vel urna. Nunc at bibendum nulla. Nullam a lectus augue. Praesent vitae ipsum blandit, sollicitudin ex eu, viverra ante. Praesent aliquam eros nec ante auctor pellentesque. */}
        </p>
      <div className="footerbtn">
        <button>
          {/* icon */}
          GET IT ON <span>Google PlayStore</span>
        </button>
        <button>
          {/* icon */}
          Download on the<span>App Store</span>
        </button>
      </div>
      </div>

      <div className="footerright">
            <div classname="company">
              <p className="linkTitle">Company</p>
              <Link  className='footerlink' to="/about">About Us</Link> 
              <Link  className='footerlink' to="/career">Career</Link>
              <Link  className='footerlink' to="/business">Business</Link> 
            </div>
            <div classname="support">
              <p className="linkTitle">Support</p>
              <Link  className='footerlink' to="/policies">Policies </Link> 
              <Link  className='footerlink' to="/learn">Learn</Link> 
              <Link  className='footerlink' to="/faq">FAQ</Link>
            </div>
            <div classname="products">
              <p className="linkTitle">Products</p>
              <Link  className='footerlink' to="/giftcard">Gift Cards</Link> 
              <Link  className='footerlink' to="/giftcard">Airtime To Cash</Link> 
              <Link  className='footerlink' to="/refill">Refill</Link>
            </div>
            <div classname= "contact">
              <p className="linkTitle">Contact</p>
              <Link  className='footerlink' to="/newapp">hello@newapp.com </Link> 
              {/*icons  */}
            </div>
      </div>
  
      
    </div>
  )
}

export default Footer;