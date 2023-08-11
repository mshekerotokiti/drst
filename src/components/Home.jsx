import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Whatwedo from './Whatwedo';
import Contact from './Contact';
import Footer from './Footer';
import Landing from './Landing';

const Home = () => {
  return (
  <div>
    <Navbar/>
    <Landing id="home"/>
    <About id="about"/>
    <Whatwedo id="whatwedo"/>
    <Contact id="contact"/>
    <Footer/>
  </div>
  );
};

export default Home;