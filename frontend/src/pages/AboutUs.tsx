import React from "react";
import { motion } from "framer-motion";
import "../styles/tailwind.css";

export const AboutUs: React.FC = () => {
  return (
    <motion.div
      className="about-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Our Story Section */}
      <section className="our-story bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-brown-600 mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Furry Friend was born out of a deep passion for animals and a desire
            to make a positive impact on the lives of pets and their owners. We
            began with the goal of creating a platform where people could easily
            connect with adoptable pets, learn how to care for them, and support
            the wonderful people who dedicate their lives to animal welfare. Our
            mission is to ensure that every pet finds a loving home and that
            every pet owner has the tools they need to provide the best care
            possible.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission bg-brown-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg max-w-3xl mx-auto"
          >
            To create a world where every pet has a loving home, and every pet
            owner has access to the knowledge and resources needed to provide
            the best care for their furry friends. We are committed to
            empowering pet lovers and supporting animal welfare organizations
            through our platform.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-3xl font-bold text-brown-600 mb-8"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="value-card bg-white p-6 rounded-lg shadow-lg">
              <img
                src={"/images /image2.jpeg"}
                alt="Compassion"
                className="w-12 h-12 mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold text-brown-600 mb-2">
                Compassion
              </h3>
              <p className="text-gray-700">
                We believe in treating every pet and person with kindness and
                empathy.
              </p>
            </div>
            <div className="value-card bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/icons/heart.svg"
                alt="Integrity"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-brown-600 mb-2">
                Integrity
              </h3>
              <p className="text-gray-700">
                We operate with honesty and transparency in everything we do,
                ensuring trust in our platform.
              </p>
            </div>
            <div className="value-card bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/icons/handshake.svg"
                alt="Community"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-brown-600 mb-2">
                Community
              </h3>
              <p className="text-gray-700">
                We are committed to building a strong, supportive community for
                pets, pet owners, and animal lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta py-16 text-center bg-brown-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Make a Difference?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-lg max-w-2xl mx-auto mb-6"
        >
          Join us in our mission to provide every pet with a loving home and
          help make a positive impact on animal welfare.
        </motion.p>
        <motion.button
          className="bg-brown-700 text-white py-3 px-8 rounded-full hover:bg-brown-800 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <a href="/contact">Contact Us</a>
        </motion.button>
      </section>
    </motion.div>
  );
};
