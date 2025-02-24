"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/style.css";

interface Veterinarian {
  id: string;
  name: string;
  address: string;
  phone: string;
  specialties: string[];
  distance: number;
}

interface Location {
  lat: number;
  lng: number;
}

export const Veterinarians: React.FC = () => {
  const [vets, setVets] = useState<Veterinarian[]>([]);
  const [userLocation, setUserLocation] = useState<Location | null>(null);

  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    const fetchVeterinarians = async () => {
      if (userLocation) {
        try {
          const response = await axios.get<Veterinarian[]>(
            `/api/veterinarians?lat=${userLocation.lat}&lng=${userLocation.lng}`
          );
          setVets(response.data);
        } catch (error) {
          console.error("Error fetching veterinarians:", error);
        }
      }
    };

    fetchVeterinarians();
  }, [userLocation]);

  return (
    <motion.div
      className="veterinarians"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Nearby Veterinarians</h1>
      <div className="vet-list">
        {vets.map((vet) => (
          <motion.div
            key={vet.id}
            className="vet-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>{vet.name}</h2>
            <p>{vet.address}</p>
            <p>Phone: {vet.phone}</p>
            <p>Specialties: {vet.specialties.join(", ")}</p>
            <p>Distance: {vet.distance.toFixed(2)} miles</p>
            <a href={`tel:${vet.phone}`}>Call Now</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// export default Veterinarians;
