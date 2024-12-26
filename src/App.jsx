import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);
  return (
    <>
      <div className="light-mode">
        <Router>
          <div className={darkMode ? "dark-mode" : "light-mode"}>
            <Header toggleMode={toggleMode} darkMode={darkMode}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
