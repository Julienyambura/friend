"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/tailwind.css";

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
      className="veterinarians container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Nearby Veterinarians
      </h1>

      {/* Vet Cards */}
      <div className="vet-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vets.map((vet) => (
          <motion.div
            key={vet.id}
            className="vet-card flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {/* Placeholder image for vet or a logo if available */}
            <div className="relative w-full h-48">
              <img
                src="/placeholder-vet-image.jpg" // Replace with actual image if available
                alt={vet.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800">
                {vet.name}
              </h2>
              <p className="text-gray-600 mt-2">{vet.address}</p>
              <p className="text-gray-600 mt-2">Phone: {vet.phone}</p>
              <p className="text-gray-600 mt-2">
                Specialties: {vet.specialties.join(", ")}
              </p>
              <p className="text-gray-600 mt-2">
                Distance: {vet.distance.toFixed(2)} miles
              </p>

              <a
                href={`tel:${vet.phone}`}
                className="mt-4 text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-md text-center"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
