"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/style.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img src="/images/f2-logo.png" alt="F2 Logo" />
        </Link>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/about-us">About Us</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/purrfect-partnership">Purrfect Partnership</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/lost-and-found">Lost and Found</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/blog">Blog</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/shelters">Shelters</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/veterinarians">Veterinarians</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/connect-with-us">Connect with Us</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/calendar">Pet Care Calendar</Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
