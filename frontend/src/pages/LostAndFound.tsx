"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/style.css";

interface LostAnimal {
  id: string;
  name: string;
  description: string;
  image: string;
  lastSeen: string;
}

const LostAndFound: React.FC = () => {
  const [lostAnimals, setLostAnimals] = useState<LostAnimal[]>([]);

  useEffect(() => {
    const fetchLostAnimals = async () => {
      try {
        const response = await axios.get<LostAnimal[]>("/api/lost-animals");
        setLostAnimals(response.data);
      } catch (error) {
        console.error("Error fetching lost animals:", error);
      }
    };

    fetchLostAnimals();
  }, []);

  return (
    <motion.div
      className="lost-and-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Lost and Found</h1>
      <div className="animal-grid">
        {lostAnimals.map((animal) => (
          <motion.div
            key={animal.id}
            className="animal-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={animal.image || "/placeholder.svg"} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>{animal.description}</p>
            <p>Last seen: {animal.lastSeen}</p>
            <button>Report Sighting</button>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="report-missing"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Report a Missing Animal
      </motion.button>
    </motion.div>
  );
};

export default LostAndFound;
