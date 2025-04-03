import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Commercial",
    videoUrl: "https://youtube.com/shorts/IoyZh8pgCRw?si=jxR2FFpY0__-HaGa",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3doyT1Ohhcd080u-1HvP8JdgjgCAVeIYymg&s",
  },
  {
    id: 2,
    title: "Social Media Ad",
    videoUrl: "https://youtube.com/shorts/IoyZh8pgCRw?si=jxR2FFpY0__-HaGa",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3doyT1Ohhcd080u-1HvP8JdgjgCAVeIYymg&s",
  },
  {
    id: 3,
    title: "Product Promo",
    videoUrl: "https://youtube.com/shorts/IoyZh8pgCRw?si=jxR2FFpY0__-HaGa",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3doyT1Ohhcd080u-1HvP8JdgjgCAVeIYymg&s",
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 pb-5 pt-24">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 container mx-auto">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
          >
            <a href={item.videoUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{item.title}</h3>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
