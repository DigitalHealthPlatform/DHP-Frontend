
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav className="bg-[#32C69A] shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">Health</div>
          <div className="space-x-4">
            <Link to="/" className="text-black">Home</Link>
            <Link to="#" className="text-gray-700">About</Link>
            <Link to="#" className="text-gray-700">Services</Link>
            <Link to="#" className="text-gray-700">Contact</Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Nav;
