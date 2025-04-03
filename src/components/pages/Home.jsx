import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elevate Your Brand with Stunning Video Content
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl mb-6 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I create compelling short video content that captivates audiences and drives engagement. Let’s craft your story together!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Link 
          to="/portfolio" 
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 text-lg font-semibold rounded-full transition"
        >
          View My Work
        </Link>
      </motion.div>
      <motion.div>
      <div className="flex space-x-4 mt-5">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition text-2xl">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition text-2xl">
            <FaYoutube />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
