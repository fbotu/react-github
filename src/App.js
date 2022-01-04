import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';



function App() {
    return (
        <div className='App m-0 p-0'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
