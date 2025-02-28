"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/tailwind.css";
import image11 from "../assets/image11.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
// Define the interface for the LostAnimal type
interface LostAnimal {
  id: string;
  name: string;
  description: string;
  image: string;
  lastSeen: string;
  type: string;
  location: string;
}

export const LostAndFound: React.FC = () => {
  const [lostAnimals, setLostAnimals] = useState<LostAnimal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showReportMissingModal, setShowReportMissingModal] =
    useState<boolean>(false);

  // Static data for testing purposes
  useEffect(() => {
    const fetchLostAnimals = async () => {
      setLoading(true);
      // Simulating an API call with static data
      const animals: LostAnimal[] = [
        {
          id: "1",
          name: "Buddy",
          description: "A friendly golden retriever, loves to play fetch.",
          image: image8,
          lastSeen: "2025-02-20",
          type: "Dog",
          location: "Central Park",
        },
        {
          id: "2",
          name: "Whiskers",
          description:
            "A curious tabby cat, loves to explore the neighborhood.",
          image: image10,
          lastSeen: "2025-02-18",
          type: "Cat",
          location: "Eastside Residential Area",
        },
        {
          id: "3",
          name: "Lola",
          description: "A small rabbit, loves carrots and running in circles.",
          image: image11,
          lastSeen: "2025-02-17",
          type: "Rabbit",
          location: "Sunnydale Garden",
        },
        {
          id: "4",
          name: "Coco",
          description: "A colorful parrot, very talkative and loves company.",
          image: image9,
          lastSeen: "2025-02-15",
          type: "Bird",
          location: "Greenwood Balcony",
        },
      ];
      setLostAnimals(animals);
      setLoading(false);
    };

    fetchLostAnimals();
  }, []);

  // Function to open and close the modal for reporting sightings
  const handleModalToggle = () => setShowModal(!showModal);

  // Function to open and close the modal for reporting missing animals
  const handleReportMissingModalToggle = () =>
    setShowReportMissingModal(!showReportMissingModal);

  return (
    <motion.div
      className="lost-and-found p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl font-semibold text-center">Lost and Found</h1>

      {/* Loading State */}
      {loading && <p className="text-center text-xl">Loading animals...</p>}

      {/* Animal Grid */}
      <div className="animal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lostAnimals.map((animal) => (
          <motion.div
            key={animal.id}
            className="animal-card p-4 border rounded-lg shadow-lg bg-white hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={animal.image || "/placeholder.svg"}
              alt={animal.name}
              className="w-64 h-96
               object-cover rounded-sm mx-auto"
            />
            <h3 className="mt-4 text-xl font-bold">{animal.name}</h3>
            <p className="text-gray-700">{animal.description}</p>
            <p className="text-gray-500">Last seen: {animal.lastSeen}</p>
            <p className="text-gray-500">Location: {animal.location}</p>
            <p className="text-gray-500">Type: {animal.type}</p>

            <button
              onClick={handleModalToggle}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Report Sighting
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for Reporting Sighting */}
      {showModal && (
        <div className="modal fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Report Sighting</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Sighting Location"
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Additional Information"
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleModalToggle}
                className="bg-red-500 text-white px-6 py-2 rounded-md mt-4 w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Reporting Missing Animal */}
      {showReportMissingModal && (
        <div className="modal fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">
              Report Missing Animal
            </h3>
            <form>
              <input
                type="text"
                placeholder="Animal Name"
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Type of Animal"
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Description"
                className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReportMissingModalToggle}
                className="bg-red-500 text-white px-6 py-2 rounded-md mt-4 w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Report Missing Animal Button */}
      <motion.button
        className="report-missing mt-8 bg-orange-500 text-white px-6 py-2 rounded-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleReportMissingModalToggle}
      >
        Report a Missing Animal
      </motion.button>
    </motion.div>
  );
};
