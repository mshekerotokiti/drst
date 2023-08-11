
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import WhatWeDo from './components/Whatwedo';
import Contact from './components/Contact';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/whatwedo" element={<WhatWeDo/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>  
    </div>
      
  );
};
export default App;
