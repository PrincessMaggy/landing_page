import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import './styles/main.scss';
import {BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
 
  return (
    <div className="App">
         <BrowserRouter>
          
              <Routes>
                <Route path='/newapp' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/career' element={<Career />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                
              </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
