
import React from 'react';
import { Link } from 'react-router-dom';
import handleLogout from './DoctorsPage'

const Nav = () => {
    return (
      <nav className="bg-[#32C69A] shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to='/' className="text-2xl font-bold">Tele-H</Link>
          <div className="space-x-4">
            <Link to="/" className="text-black">Home</Link>
            <Link to="#" className="text-black-700">About</Link>
            <Link to="#" className="text-black-700">Contact</Link>
            <button
          onClick={handleLogout}
          className="py-2 px-4 bg-[#32C69A] text-black rounded-md hover:bg-teal-600 hover:text-white shadow"
        >
          Logout
        </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Nav;
