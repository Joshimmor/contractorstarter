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
        className="p-4 bg-transparent fixed top-4 right-4 z-20 flex flex-col justify-center items-center"
      >
        <div className={`w-6 h-1 bg-black mb-1 transform transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-1 bg-black mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`w-6 h-1 bg-black transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      <div
        className={`fixed shadow-lg top-0 left-0 h-full w-64 bg-white text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="p-4">
          
          <ul className="mt-4 divide-y divide-grey-200">
            <li className="py-2"><a href="#" className="text-black ">Home</a></li>
            <li className="py-2"><a href="#" className="text-black">About</a></li>
            <li className="py-2"><a href="#" className="text-black">Services</a></li>
            <li className="py-2"><a href="#" className="text-black">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
