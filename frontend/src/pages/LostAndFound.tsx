"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/tailwind.css";

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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredAnimals, setFilteredAnimals] =
    useState<LostAnimal[]>(lostAnimals);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showReportMissingModal, setShowReportMissingModal] =
    useState<boolean>(false);

  // Fetch lost animals from the API
  useEffect(() => {
    const fetchLostAnimals = async () => {
      setLoading(true);
      try {
        const response = await axios.get<LostAnimal[]>("/api/lost-animals");
        setLostAnimals(response.data);
        setFilteredAnimals(response.data);
      } catch (error) {
        console.error("Error fetching lost animals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLostAnimals();
  }, []);

  // Filter animals based on search query
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredAnimals(lostAnimals);
    } else {
      setFilteredAnimals(
        lostAnimals.filter(
          (animal) =>
            animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            animal.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            animal.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, lostAnimals]);

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

      {/* Search and Filter Bar */}
      <div className="my-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by animal name, type, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 w-full sm:w-80 border-2 border-gray-300 rounded-md"
        />
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-xl">Loading animals...</p>}

      {/* Animal Grid */}
      <div className="animal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimals.map((animal) => (
          <motion.div
            key={animal.id}
            className="animal-card p-4 border rounded-lg shadow-lg bg-white hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={animal.image || "/placeholder.svg"}
              alt={animal.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-bold">{animal.name}</h3>
            <p className="text-gray-700">{animal.description}</p>
            <p className="text-gray-500">Last seen: {animal.lastSeen}</p>
            <p className="text-gray-500">Location: {animal.location}</p>
            <p className="text-gray-500">Type: {animal.type}</p>

            <button
              onClick={handleModalToggle}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md"
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
