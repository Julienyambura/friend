import React from "react";
import { motion } from "framer-motion";
import "../styles/tailwind.css";

import image2 from "../assets/ image2.jpeg";
import image1 from "../assets/image1.jpeg";
// Correct path relative to your current file
// console.log(image2);
console.log(image1);
export const AboutUs: React.FC = () => {
  return (
    <motion.div
      className="about-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Our Story Section */}
      <section className="our-story bg-brown-200x py-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-brown-600 mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 max-w-6xl mx-auto"
          >
            "Furry Friend" is an online platform dedicated to the welfare of
            pets and animal lovers. Born from a deep passion for animals, our
            mission is to ensure every pet finds a loving home and every pet
            owner has the resources they need to provide the best care for their
            furry companions. Whether you are looking to adopt, rehome, or
            simply connect with like-minded individuals, "Furry Friend" provides
            a safe, user-friendly space for pet adoption, rehoming, and more.
            Our platform also includes features like lost and found animals,
            blog posts about pet care, shelters near your location,
            veterinarians' contacts, and an interactive way to connect with
            others in the animal community. At the heart of "Furry Friend," we
            foster a compassionate, inclusive community to help pets and pet
            owners live happier lives together.
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
                src={image2}
                alt="image2"
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
                src={image1}
                alt="image1"
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
                src={image2}
                alt="image2"
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
          className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-500 transition"
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
