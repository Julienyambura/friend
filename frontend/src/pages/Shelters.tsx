"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/tailwind.css";

interface Shelter {
  id: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  distance: number;
  image: string; // Shelter image
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
      className="shelters container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Nearby Animal Shelters
      </h1>

      {/* Shelter Cards */}
      <div className="shelter-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shelters.map((shelter) => (
          <motion.div
            key={shelter.id}
            className="shelter-card flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-48">
              <img
                src={shelter.image || "/placeholder.svg"} // Default to placeholder if no image
                alt={shelter.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800">
                {shelter.name}
              </h2>
              <p className="text-gray-600 mt-2">{shelter.address}</p>
              <p className="text-gray-600 mt-2">Phone: {shelter.phone}</p>
              <p className="text-gray-600 mt-2">
                Distance: {shelter.distance.toFixed(2)} miles
              </p>

              <a
                href={`/blog/${shelter.id}`} // Link to Blog page to read more
                className="mt-4 text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-md text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
