"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPaw, FaHeart, FaSearch, FaBlog, FaHospital } from "react-icons/fa";
import "../styles/tailwind.css";
import image4 from "../assets/image4.jpeg";
import image10 from "../assets/image10.jpeg";
// import image13 from "../assets/image13.jpeg";

// Profile picture section
const ProfileSection: React.FC = () => (
  <div
    className="profile-section relative h-screen bg-cover bg-center"
    // style={{ backgroundImage: `url(${image13})` }} // Set the background image directly using inline style
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="profile-text text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold text-white"
      >
        Welcome to Furry Friend
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg mt-4"
      >
        Your one-stop platform for all things pets!
      </motion.p>
      <motion.button
        className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg text-xl hover:bg-green-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/purrfect-partnership">Find Your Perfect Pet</Link>
      </motion.button>
    </div>
  </div>
);

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}> = ({ icon, title, description, link }) => (
  <motion.div
    className="feature-card text-center p-6 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={link}>
      <div className="icon text-4xl text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </Link>
  </motion.div>
);

const TestimonialCarousel: React.FC = () => (
  <motion.div
    className="testimonial-carousel relative overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
  >
    <h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
    <div className="flex space-x-6">
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
          className="testimonial text-center bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
        >
          <p>"{testimonial.text}"</p>
          <span className="block mt-2 font-semibold">- {testimonial.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const Home: React.FC = () => {
  return (
    <motion.div
      className="home px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <ProfileSection />
      {/* Features Section */}
      <section className="features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
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
      </section>
      {/* Call to Action Section */}
      <section className="cta text-center mt-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold"
        >
          Ready to find your furry soulmate?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg text-xl"
        >
          <Link to="/purrfect-partnership">Get Started</Link>
        </motion.button>
      </section>
      {/* Testimonial Section */}
      <TestimonialCarousel />
      Adoption Success Story Section
      <section className="adoption-success mt-16">
        <h2 className="text-2xl font-semibold">Adoption Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              image: image4,
              name: "Bella",
              story: "Adopted and loving her new family!",
            },
            {
              image: image10,
              name: "Charlie",
              story: "A new adventure begins with my forever family!",
            },
          ].map((story, index) => (
            <motion.div
              key={index}
              className="adopted-pet-card bg-brown p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index }}
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-32 h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{story.name}</h3>
              <p className="text-md text-white mt-2">{story.story}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

// export default Home;
