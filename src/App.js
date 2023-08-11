
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Whatwedo from './components/Whatwedo';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/whatwedo" element={<Whatwedo/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>  
    </div>
      
  );
};
export default App;
