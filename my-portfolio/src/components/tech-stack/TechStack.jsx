import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaGithub } from "react-icons/fa";
import { SiFirebase, SiRedux, SiTailwindcss } from "react-icons/si";

function TechStack() {
  return (
    <motion.section
      id="tech-stack"
      className="h-full w-full flex flex-col items-center justify-center bg-[#181826] text-gray-300 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title Animation */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My Tech Stack
      </motion.h1>
      <motion.p
        className="text-gray-400 text-lg text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Technologies I've been working with recently
      </motion.p>

      {/* Tech Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Tech Stack Cards */}
        {techStacks.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center p-4 bg-[#1e1e2e] rounded-xl shadow-lg border border-gray-700 transition-all hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            <Icon size={50} style={{ color }} />
            <p className="mt-3 text-gray-300 font-medium">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

// Updated Tech Stack with Tailwind CSS
const techStacks = [
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "CSS", icon: FaCss3Alt, color: "#2965F1" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" }, // ✅ Fixed Tailwind Card!
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Git", icon: FaGitAlt, color: "#F05033" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
];

export default TechStack;
