import React from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import About from "./components/about/About";
import TechStack from "./components/tech-stack/TechStack";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-gray-300">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[#181818] text-white">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-10 flex items-center justify-center bg-[#1e1e2e]">
        <About />
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="min-h-screen flex items-center justify-center bg-[#242435]">
        <TechStack />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-[#2a2a3c]">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center text-gray-200">
        <Contact />
      </section>
    </div>
  );
};

export default App;
