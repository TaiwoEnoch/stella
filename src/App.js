import React from "react";
import { Route, Routes } from "react-router-dom";  // Removed Router import here
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/pages/Contact";
import About from './components/pages/About'
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
      <Footer />
    </div>
  );
};

export default App;
