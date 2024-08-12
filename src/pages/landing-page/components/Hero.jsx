import React from 'react';
import "../../../App.css";
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/hero-bg.jpg')] h-screen flex flex-col justify-center items-center bg-cover bg-center">
            <h1 className="text-white text-4xl font-bold mb-4">Telemedicine</h1>
            <p className="text-white text-lg mb-8">Your trusted online healthcare provider</p>
            <div className="flex space-x-4">
            <Link to="signup" className="bg-white hover:text-white hover:bg-[#32C69A] text-green-bg-green-500 px-6 py-2 rounded mr-2">Sign Up</Link>
                <span className='h-'>|</span>
                <Link to="login" className="bg-white hover:text-white hover:bg-[#32C69A] text-green-bg-green-500 px-8 py-2 rounded mr-2">Login</Link>
            </div>
        </div>
    );
};

export default Hero;
