import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white py-6 px-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>
        
        <div className="hidden md:flex space-x-6 font-bold">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About Me</Link>
          <Link to="/portfolio" className="hover:text-gray-400 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact Me</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 md:hidden font-bold"
        >
          <Link to="/" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/portfolio" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/contact" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;