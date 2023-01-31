import React from 'react';
// components
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Card from '../components/Card';
import Join from '../components/Join';

// import heroimg from '../img/home-hero.png'
import {motion} from 'framer-motion'

// icons
import { IconContext } from 'react-icons/lib';
import {IoStar} from 'react-icons/io5'

function Home() {
  return (
    <div>
      <motion.div 
         className='home'
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x:window.innerWidth, transition:{duration:0.1}}}
   >
        <div className="main">
            <Nav/>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="hero">
              <div className="hero-left">
                <h1>Lorem ipsum dolor sit amet, consectetur.</h1>

                <p>Lorem ipsum dolultricies neque sed rhoncus. Integer consequat aliquet aliquet. Quisque aliquam feugiat mauris, eu fringilla dolor eleifend id. Proin nibh dui, dictum nec enim eu, posuere dapibus nulla. Proin interdu </p>
                <button className='navbtn'>Get Started</button>
                <div className='review_container'>
                  <p className='total_review'>64+ reviews</p>
                  <IconContext.Provider value={{color:"#fff", size: "18px"}}>
                      <span><IoStar/></span>
                      <span><IoStar/></span>
                      <span><IoStar/></span>
                      <span><IoStar/></span>
                      <span><IoStar/></span>
                  </IconContext.Provider>
                  {/* <p className='more_review'>More than 500+ people patronizing our services</p> */}
              </div>
             
          </div>
            <div className="hero-right">
              </div>
            </motion.div>
        </div>
          <Card/>
          <Join/>
          <Footer/>
      </motion.div>
    </div>
  )
}

export default Home;