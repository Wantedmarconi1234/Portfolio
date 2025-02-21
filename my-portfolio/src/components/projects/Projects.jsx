import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project data
const projects = [
  {
    title: "Movie Trailer App",
    description: "A responsive movie trailer app for previewing movie trailers developed with react and API integration",
    gradient: "bg-gradient-to-br from-[#6a11cb] to-[#2575fc]",
    github: "https://github.com/Wantedmarconi1234/Trailer_App.git",
    live: "https://trailer-app-cj39.vercel.app/",
  },
  {
    title: "Age Calculator",
    description: "A calculator designed to calculate users age with their Date of birth. This was developed with HTML, CSS and Javascript",
    gradient: "bg-gradient-to-br from-[#ff512f] to-[#dd2476]",
    github: "https://github.com/Wantedmarconi1234/age-calculator-repo.git",
    live: "https://age-calculator-repo-gules.vercel.app/",
  },
  {
    title: "Three theme Calculator",
    description: "A calculator three colored theme calculator. This was developed with HTML, CSS and Javascript",
    gradient: "bg-gradient-to-br from-[#dd2687] to-[#dd2476]",
    github: "https://github.com/Wantedmarconi1234/calculator-app-repo.git",
    live: "https://calculator-app-repo.vercel.app/",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app built with React and API integration.",
    gradient: "bg-gradient-to-br from-[#22999e] to-[#38ef7d]",
    github: "https://github.com/Wantedmarconi1234/Weather_App_Repo.git",
    live: "https://weather-app-repo-fawn.vercel.app/",
  },
  {
    title: "Country search app",
    description: "A responsive application for searching for countries and getting the countries info. Application was developed with React and Tailwind CSS",
    gradient: "bg-gradient-to-br from-[#fc4a1a] to-[#f7b733]",
    github: "https://github.com/Wantedmarconi1234/countries-application-repo.git",
    live: "https://countries-application-repo.vercel.app/",
  },
  {
    title: "Advise app",
    description: "An advised app built with HTML, CSS, and Javascript with API integration.",
    gradient: "bg-gradient-to-br from-[#4DD0E1] to-[#00838F]",
    github: "https://github.com/Wantedmarconi1234/advise-generator.git",
    live: "https://advise-generator-coral.vercel.app/",
  },
];

function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="min-h-screen flex w-full flex-col items-center py-16 text-gray-300 bg-[#1a1a2e]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title Animation */}
      <motion.h1 
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Projects
      </motion.h1>

      {/* Project Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full min-w-[250px] max-w-[320px] mx-auto bg-[#222240] border border-gray-700"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Gradient Header */}
            <motion.div 
              className={`h-36 w-full rounded-lg ${project.gradient} flex items-center justify-center`}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
            </motion.div>

            {/* Project Info */}
            <p className="mt-3 text-sm text-gray-400">{project.description}</p>

            {/* Links */}
            <div className="flex items-center justify-between mt-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
