import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex  items-center p-4 bg-gradient-to-br from-[#27C0EF] to-[#27C0EF] shadow-sm flex-wrap">
      {/* Logo */}
      <div className="mt-5 text-3xl font-bold text-white">ehya</div>

      {/* Desktop Menu */}
      <div className="flex-grow flex items-center justify-end ">
      <nav className="hidden md:flex space-x-6 mt-5 mr-7">
        <a href="#" className="text-white hover:text-blue-200">Home</a>
        <div className="relative group">
          <button className="text-white hover:text-blue-200 flex items-center">
            Landings
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="relative group">
          <button className="text-white hover:text-blue-200 flex items-center">
            Pages
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <a href="#" className="text-white hover:text-blue-200">Docs</a>
        <a href="#" className="text-white hover:text-blue-200">Help</a>
      </nav>

      {/* Login Button */}
      <button className="mt-5 ml-3 hidden md:block bg-blue-800 text-white px-7 py-2 rounded-lg hover:bg-gray-100">
        Login
      </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-white ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full mt-4 space-y-3 flex flex-col items-start">
          <a href="#" className="block text-white hover:text-blue-200">Home</a>
          <a href="#" className="block text-white hover:text-blue-200">Landings</a>
          <a href="#" className="block text-white hover:text-blue-200">Pages</a>
          <a href="#" className="block text-white hover:text-blue-200">Docs</a>
          <a href="#" className="block text-white hover:text-blue-200">Help</a>
          <button className="bg-blue-800 text-[#27C0EF] px-6 py-2 rounded-lg hover:bg-gray-100  text-left">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
