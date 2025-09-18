import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm flex-wrap"> {/* Added flex-wrap */}
      <div className="text-xl font-bold text-blue-600 mb-2 md:mb-0">ehya</div> {/* Added mb for small screens */}
      <nav className="hidden md:flex space-x-6"> {/* Hidden on small, flex on medium and up */}
        <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
        <div className="relative group">
          <button className="text-gray-600 hover:text-blue-600 flex items-center">
            Landings
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {/* Dropdown content can go here */}
        </div>
        <div className="relative group">
          <button className="text-gray-600 hover:text-blue-600 flex items-center">
            Pages
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {/* Dropdown content can go here */}
        </div>
        <a href="#" className="text-gray-600 hover:text-blue-600">Docs</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Help</a>
      </nav>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 md:ml-0 ml-auto">Login</button> {/* Adjusted margin for alignment */}
      
      {/* Mobile Menu Icon (Hamburger) */}
      <button className="md:hidden text-gray-600 hover:text-blue-600 ml-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>

      {/* A simple mobile menu that could be toggled with state */}
      <div className="md:hidden w-full mt-2 border-t pt-2 space-y-2">
        {/* You'd typically use React state to toggle visibility of this menu */}
        <a href="#" className="block text-gray-600 hover:text-blue-600 px-2 py-1">Home</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600 px-2 py-1">Landings</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600 px-2 py-1">Pages</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600 px-2 py-1">Docs</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600 px-2 py-1">Help</a>
      </div>
    </header>
  );
};
export default Header;

