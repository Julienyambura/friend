"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/style.css";

interface Shelter {
  id: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  distance: number;
}

interface Location {
  lat: number;
  lng: number;
}

export const Shelters: React.FC = () => {
  const [shelters, setShelters] = useState<Shelter[]>([]);
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
    const fetchShelters = async () => {
      if (userLocation) {
        try {
          const response = await axios.get<Shelter[]>(
            `/api/shelters?lat=${userLocation.lat}&lng=${userLocation.lng}`
          );
          setShelters(response.data);
        } catch (error) {
          console.error("Error fetching shelters:", error);
        }
      }
    };

    fetchShelters();
  }, [userLocation]);

  return (
    <motion.div
      className="shelters"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Nearby Animal Shelters</h1>
      <div className="shelter-list">
        {shelters.map((shelter) => (
          <motion.div
            key={shelter.id}
            className="shelter-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>{shelter.name}</h2>
            <p>{shelter.address}</p>
            <p>Phone: {shelter.phone}</p>
            <p>Distance: {shelter.distance.toFixed(2)} miles</p>
            <a href={shelter.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// export default Shelters;
