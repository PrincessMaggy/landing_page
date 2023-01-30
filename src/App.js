import './styles/main.scss';
import {BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './components/AnimateRoutes';


function App() {
 
  return (
    <div className="App">
         <BrowserRouter>
            <AnimatedRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
