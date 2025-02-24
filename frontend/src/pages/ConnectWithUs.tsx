"use client";

import React from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/style.css";

export const ConnectWithUs: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <motion.div
      className="connect-with-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Connect With Us</h1>
      <motion.div
        className="social-links"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
        <a
          href="https://twitter.com/furryfriend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={32} />
        </a>
        <a
          href="https://instagram.com/furryfriend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={32} />
        </a>
      </motion.div>
      <motion.form
        className="contact-form"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
      >
        <h2>Send us a message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <motion.div
        className="newsletter"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Subscribe to our newsletter</h2>
        <div className="newsletter-form">
          <input type="email" placeholder="Your Email" required />
          <motion.button
            type="submit"
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

// export default ConnectWithUs;
