import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#32C69A] text-white py-6">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="inline-block">
            <div  className="text-2xl font-bold">Tele-H</div>
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <p>© 2024 Health. All rights reserved.</p>
          </div>
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>
              Address: <a href="https://www.google.com/maps/place/Ghana" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">123 Health St, Wellness City, HC 12345</a>
            </p>
            <p>
              Helpline: <a href="tel:+1234567890" className="text-white hover:underline">+123 456 7890</a>
            </p>
            <p>
              Email: <a href="mailto:info@health.com" className="text-white hover:underline">info@health.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
