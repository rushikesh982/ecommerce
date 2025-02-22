import logo from './logo.svg';
import './App.css';
import Navbar from './header/Navbar';
import Home from './home/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Women from './women/Women';
import Men from './men/Men';
import Accesories from './accesories/Accesories';
import Everything from './everything/Everything';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/everything' element={<Everything />}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/accesories' element={<Accesories/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
