import React from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/portrait-2.jpg";

function Hero() {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-16 bg-[#1c1c24] text-gray-300"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      
      {/* Left Content */}
      <motion.div 
        className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg space-y-4"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold flex items-center gap-2">
          Hi <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>👋</motion.span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold">I am Fredrick Akuffo</h2>
        <p className="text-lg sm:text-xl font-light text-gray-400 leading-relaxed">
          I build web applications that are fast, responsive, and visually stunning.
        </p>
      </motion.div>

      {/* Right Profile Image */}
      <motion.div 
        className="flex justify-center mt-8 md:mt-0"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-40 sm:w-56 md:w-64 lg:w-72 rounded-full border-4 border-gray-500 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

    </motion.div>
  );
}

export default Hero;
