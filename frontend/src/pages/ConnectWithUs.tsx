"use client";

import React from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/tailwind.css";

export const ConnectWithUs: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <motion.div
      className="connect-with-us container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Connect With Us
      </h1>

      {/* Social Media Links */}
      <motion.div
        className="social-links flex justify-center space-x-6 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://twitter.com/furryfriend"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
        >
          <FaTwitter size={40} />
        </a>
        <a
          href="https://instagram.com/furryfriend"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
        >
          <FaInstagram size={40} />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="contact-form max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Send us a message
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-md"
        ></textarea>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Newsletter Section */}
      <motion.div
        className="newsletter mt-12 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Subscribe to our newsletter
        </h2>
        <div className="newsletter-form flex justify-center space-x-4">
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-64 p-3 border border-gray-300 rounded-md"
          />
          <motion.button
            type="submit"
            className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
