import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.div className="img">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3doyT1Ohhcd080u-1HvP8JdgjgCAVeIYymg&s" 
          alt="" 
          className="py-12"
        />
      </motion.div>
      <motion.div
        className="max-w-3xl text-center text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4">
          I am a passionate short video content creator, specializing in crafting engaging and impactful videos
          for brands, businesses, and personal projects. With years of experience in video editing, motion graphics,
          and storytelling, I bring creativity and precision to every project.
        </p>
        <p className="mb-4">
          My work has helped brands boost their online presence, drive engagement, and connect with their audiences
          in meaningful ways. I take pride in delivering high-quality, visually stunning videos that leave a lasting impression.
        </p>
        <p>
          Let's collaborate and bring your vision to life!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
