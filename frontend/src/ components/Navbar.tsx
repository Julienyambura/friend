"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/tailwind.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-white p-4 shadow-md">
      {/* Logo Section */}
      <motion.div
        className="logo flex items-center justify-start text-3xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="text-4xl font-bold text-green-600">
          𝔽2𝕡𝕒𝕨𝕤
        </Link>
      </motion.div>

      {/* Navbar Menu */}
      <motion.ul
        className="flex space-x-6 justify-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/about-us"
            className="text-lg font-medium  hover:text-green-600"
          >
            About Us
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/purrfect-partnership"
            className="text-lg font-medium hover:text-green-600"
          >
            Purrfect Partnership
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/lost-and-found"
            className="text-lg font-medium hover:text-green-600"
          >
            Lost and Found
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/blog" className="text-lg font-medium hover:text-green-600">
            Blog
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/shelters"
            className="text-lg font-medium hover:text-green-600"
          >
            {/* Shelters
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/veterinarians"
            className="text-lg font-medium hover:text-green-600"
          >
            Veterinarians
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            to="/connect-with-us"
            className="text-lg  font-medium hover:text-green-600"
          > */}
            {/* Connect with Us */}
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

// export default Navbar;
