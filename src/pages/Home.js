
// components
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Centre from '../components/Centre';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';


function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const[submenu, setsubmenu]= useState(false);
  const[submenu1, setsubmenu1]= useState(false);

  const togglesubmenu =()=>{
    setsubmenu(!submenu)
    setsubmenu1(false)
  }
  const togglesubmenu1 =()=>{
    setsubmenu1(!submenu1)
    setsubmenu(false)
  }
const toggleall =()=>{
  setsubmenu(false);
  setsubmenu1(false);
}
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

  return (
    <div>
      <motion.div 
         className='home'
   >
  
      <Nav toggleall={toggleall} submenu={submenu} submenu1={submenu1} togglesubmenu={togglesubmenu} togglesubmenu1= {togglesubmenu1}/>
     <Banner toggleall={toggleall} tnGroup={btnGroup} />
     <Card toggleall={toggleall} />
     <Centre toggleall={toggleall}  btnGroup={btnGroup} />
     <Newsletter toggleall={toggleall} />
        <Footer toggleall={toggleall} btnGroup={btnGroup}  />
      </motion.div>
    </div>
  )
}

export default Home;