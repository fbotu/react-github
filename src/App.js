import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';


function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
