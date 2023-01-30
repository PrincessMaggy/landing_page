import React from 'react'
import {Routes, Route, useLocation } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

import {AnimatePresence} from 'framer-motion'


function AnimatedRoutes() {
    const location= useLocation()
  return (
   
    <AnimatePresence>
        
          <Routes location={location} key={location.pathname}>
                <Route path='/newapp' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/career' element={<Career />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
         </Routes>
    
    </AnimatePresence>
  

  )
}

export default AnimatedRoutes