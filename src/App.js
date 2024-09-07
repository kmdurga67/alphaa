import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import {  Route, Routes } from 'react-router-dom';
import UpNavbar from './components/UpNavbar';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <UpNavbar />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
