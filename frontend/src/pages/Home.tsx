"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPaw,
  FaHeart,
  FaSearch,
  FaBlog,
  FaHospital,
  FaCalendarAlt,
} from "react-icons/fa";
import "../styles/style.css";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}> = ({ icon, title, description, link }) => (
  <motion.div
    className="feature-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={link}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  </motion.div>
);

export const Home: React.FC = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="hero">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Furry Friend
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your one-stop platform for all things pets!
        </motion.p>
      </header>

      <section className="features">
        <FeatureCard
          icon={<FaPaw />}
          title="Purrfect Partnership"
          description="Connect with your ideal pet companion through our matching system."
          link="/purrfect-partnership"
        />
        <FeatureCard
          icon={<FaHeart />}
          title="Lost and Found"
          description="Reunite lost pets with their families or find a new friend."
          link="/lost-and-found"
        />
        <FeatureCard
          icon={<FaBlog />}
          title="Pet Care Blog"
          description="Discover tips, tricks, and stories about pet care and companionship."
          link="/blog"
        />
        <FeatureCard
          icon={<FaSearch />}
          title="Find Shelters"
          description="Locate animal shelters in your area and support their cause."
          link="/shelters"
        />
        <FeatureCard
          icon={<FaHospital />}
          title="Veterinarians"
          description="Find trusted veterinarians near you for your pet's health needs."
          link="/veterinarians"
        />
        <FeatureCard
          icon={<FaCalendarAlt />}
          title="Pet Care Calendar"
          description="Keep track of your pet's appointments, medications, and more."
          link="/calendar"
        />
      </section>

      <section className="cta">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Ready to find your furry soulmate?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/purrfect-partnership">Get Started</Link>
        </motion.button>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-container">
          {[
            {
              name: "Sarah M.",
              text: "Furry Friend helped me find my perfect companion. The process was so smooth!",
            },
            {
              name: "Mike T.",
              text: "The Lost and Found feature reunited me with my cat. I'm forever grateful!",
            },
            {
              name: "Emily R.",
              text: "The Pet Care Blog has been an invaluable resource for a first-time pet owner like me.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <p>"{testimonial.text}"</p>
              <span>- {testimonial.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

// export default Home;
