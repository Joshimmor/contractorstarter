"use client"
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-20"
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-4">
            <li className="py-2"><a href="#" className="text-white">Home</a></li>
            <li className="py-2"><a href="#" className="text-white">About</a></li>
            <li className="py-2"><a href="#" className="text-white">Services</a></li>
            <li className="py-2"><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;