import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Index from './Component/Index';
import Login from './Component/Login';
import Signup from './Component/Signup';
import OurFleet from './Component/OurFleet';


function App() {
  return (
  <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/Login" element={<Login/>}></Route>
     <Route path="/Signup" element={<Signup/>}/>
    <Route path="/OurFleet" element={<OurFleet/>}/> 
   </Routes>
   </BrowserRouter>
  </div>   
  );
}

export default App;
