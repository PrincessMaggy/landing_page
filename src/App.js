import Home from "./pages/Home";
import './styles/main.scss';
import {BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
 
  return (
    <div className="App">
         <BrowserRouter>
          
              <Routes>
                <Route path='/newapp' element={<Home />} />
                
              </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
