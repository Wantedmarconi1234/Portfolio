import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#181826] text-gray-300 py-16 px-6"
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
        Contact Me
      </motion.h1>

      {/* Contact Container */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-[#222240] p-8 rounded-lg shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Contact Details */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-blue-400">📩 Get in Touch</h2>
          <p className="text-gray-400">Let's build something amazing together!</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-400" size={20} />
              <a href="tel:+233503993375" className="text-gray-300 hover:text-white transition">
                +233 503 993 375
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-400" size={20} />
              <a href="mailto:fredakuffo4@gmail.com" className="text-gray-300 hover:text-white transition">
                fredakuffo4@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-400" size={20} />
              <span className="text-gray-300">Accra, Ghana</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          action="https://formsubmit.co/fredakuffo4@gmail.com" 
          method="POST" 
          className="w-full md:w-1/2 mt-8 md:mt-0 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col">
            <label className="text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
              aria-label="Full Name"
              className="p-3 rounded-md bg-[#2a2a3c] text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="email"
              aria-label="Email Address"
              className="p-3 rounded-md bg-[#2a2a3c] text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              aria-label="Message"
              className="p-3 rounded-md bg-[#2a2a3c] text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Hidden Input for Success Redirect */}
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

          <motion.button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
