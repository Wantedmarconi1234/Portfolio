import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section 
      id="about" 
      className="h-full w-full flex flex-col items-center justify-center bg-[#1a1a2e] text-gray-300 py-16 px-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      
      {/* Section Title */}
      <motion.h1 
        className="text-gray-200 font-bold text-4xl text-center mb-8"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* Content Container */}
      <div className="max-w-3xl text-center space-y-10">
        
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold">👋 Hi, I’m <span className="text-blue-400">Fredrick Akuffo</span></h2>
          <p className="mt-4 leading-relaxed text-gray-400">
            A passionate <span className="font-bold text-white">Frontend Developer</span> with a keen eye for detail and a love for crafting 
            beautiful, user-friendly experiences. With expertise in <span className="font-bold text-white">React, Tailwind CSS, and JavaScript</span>, 
            I specialize in building <span className="text-white">responsive, dynamic, and interactive</span> web applications.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div 
          className="text-left bg-[#222240] p-6 rounded-xl shadow-lg shadow-blue-900/40"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3">🚀 What I Do</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Develop <span className="font-bold text-white">clean, maintainable, and scalable</span> web applications</li>
            <li>Transform UI/UX designs into <span className="font-bold text-white">pixel-perfect interfaces</span></li>
            <li>Optimize websites for <span className="text-white">speed, accessibility, and performance</span></li>
            <li>Continuously <span className="text-white">learn and adapt</span> to new technologies</li>
          </ul>
        </motion.div>

        {/* Why Work With Me? */}
        <motion.div 
          className="text-left bg-[#222240] p-6 rounded-xl shadow-lg shadow-blue-900/40"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3">💡 Why Work With Me?</h3>
          <p className="text-gray-400">
            I thrive on challenges and love solving problems through <span className="font-bold text-white">creative solutions</span> and <span className="text-white">efficient code</span>.  
            Whether it's building a startup project or contributing to open-source, I'm always excited to <span className="text-white">collaborate and innovate</span>.
          </p>
        </motion.div>

        {/* Let's Connect */}
        <motion.div 
          className="text-left bg-[#222240] p-6 rounded-xl shadow-lg shadow-blue-900/40"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3">📩 Let’s Connect!</h3>
          <p className="text-gray-400">
            If you're looking for a <span className="font-bold text-white">dedicated developer</span> to bring your ideas to life, feel free to <span className="font-bold text-white">reach out</span>.  
            Let’s build something amazing together! 🚀
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;
