// "use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/style.css";

export const AboutUs: React.FC = () => {
  return (
    // <h1>about me</h1>
    <motion.div
      className="about-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>About Furry Friend</h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Furry Friend is your one-stop platform for all things related to pet
        adoption, care, and community. We connect animal lovers with pets in
        need, provide resources for pet owners, and support local shelters and
        veterinarians.
      </motion.p>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Our Mission
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        To create a world where every pet has a loving home and every pet owner
        has the resources they need to provide the best care possible.
      </motion.p>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        FAQs
      </motion.h2>
      <motion.ul
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <li>How does the adoption process work?</li>
        <li>What should I consider before adopting a pet?</li>
        <li>How can I list a pet for adoption?</li>
        <li>What services do you offer for pet owners?</li>
      </motion.ul>
    </motion.div>
  );
};

// export default AboutUs;
