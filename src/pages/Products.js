import React from 'react';
import Nav from '../components/Nav';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';


function Products() {

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
  return (
    <div>
           <Nav toggleall={toggleall} submenu={submenu} submenu1={submenu1} togglesubmenu={togglesubmenu} togglesubmenu1= {togglesubmenu1}/>
           <Pricing toggleall={toggleall}/>
          <Footer toggleall={toggleall}/>
    </div>
  )
}

export default Products