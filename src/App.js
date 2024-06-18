import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Feature from './components/Feature';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Support />
      <Feature />
      <Feedback />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
