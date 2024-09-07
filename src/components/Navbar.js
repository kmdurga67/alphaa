import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

// Logo Component
const LogoComponent = () => (
  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
    <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
      <img src={Logo} alt="logo" className="w-48 h-20" />
    </Link>
  </div>
);

// Navigation Links Component
const NavLinks = ({ className = '', toggleSidebar }) => (
  <ul className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 ${className}`}>
    <li className="cursor-pointer hover:text-yellow-600 transition-colors duration-300">
      <Link to="/" onClick={toggleSidebar}>Home</Link>
    </li>
    <li className="cursor-pointer hover:text-yellow-600 transition-colors duration-300">
      <Link to="/about-us" onClick={toggleSidebar}>About Us</Link>
    </li>
    <li className="cursor-pointer hover:text-yellow-600 transition-colors duration-300">
      <Link to="/services" onClick={toggleSidebar}>Services</Link>
    </li>
    <li className="cursor-pointer hover:text-yellow-600 transition-colors duration-300">
      <Link to="/contact" onClick={toggleSidebar} className="bg-black text-white p-2 rounded-md">
        Call Us Anytime
      </Link>
    </li>
  </ul>
);

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed z-50 top-0 right-0 h-full w-64 sm:w-72 bg-white text-black transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div className="p-4 flex justify-between">
      <h2 className="text-xl font-bold">Menu</h2>
      <button
        className="hover:text-red-600 text-2xl sm:text-3xl font-bold"
        onClick={toggleSidebar}
      >
        &times;
      </button>
    </div>
    <NavLinks toggleSidebar={toggleSidebar} className="p-4 space-y-4 text-lg sm:text-xl font-semibold" />
  </div>
);

// Navbar Component
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white text-black shadow-lg py-4 px-4 flex justify-between items-center">
        <LogoComponent />
        {/* Toggle button for small screens */}
        <button
          className="block sm:hidden text-2xl"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
        {/* Navigation Links for larger screens */}
        <nav className="hidden sm:flex">
          <NavLinks />
        </nav>
      </header>

      {/* Sidebar for small screens */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
