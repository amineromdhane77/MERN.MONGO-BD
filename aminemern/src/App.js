
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from './assets/Singup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './assets/Login';
import Home from './Home';
function App() {
 
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Singup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>


    
    </BrowserRouter>

  
  );
}

export default App;
