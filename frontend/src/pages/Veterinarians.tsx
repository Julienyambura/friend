"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/tailwind.css";

// Define the veterinarian interface
interface Veterinarian {
  id: string;
  name: string;
  address: string;
  phone: string;
  specialties: string[];
  distance: number;
  image: string;
}

export const Veterinarians: React.FC = () => {
  const [vets, setVets] = useState<Veterinarian[]>([]);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Get user location using geolocation API
  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("User location:", position.coords); // Log location
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

  // Mock user location for testing (remove when real location is working)
  useEffect(() => {
    if (!userLocation) {
      // Uncomment for testing purposes
      console.log("Mocking user location for testing");
      setUserLocation({ lat: 37.7749, lng: -122.4194 }); // San Francisco mock location
    }
  }, [userLocation]);

  // Fetch veterinarians based on user location
  useEffect(() => {
    if (userLocation) {
      console.log("Fetching vets based on user location:", userLocation); // Log user location

      const sampleVets: Veterinarian[] = [
        {
          id: "1",
          name: "Greenwood Animal Clinic",
          address: "123 Green St, Greenwood",
          phone: "555-1234",
          specialties: ["General Medicine", "Emergency Care", "Surgery"],
          distance: 2.3,
          image: "/images/vet1.jpg", // Ensure image is present in the public folder
        },
        {
          id: "2",
          name: "Sunnydale Vet Services",
          address: "456 Sunnydale Ave, Sunnyside",
          phone: "555-5678",
          specialties: ["Dentistry", "Vaccinations", "Grooming"],
          distance: 5.1,
          image: "/images/vet2.jpg",
        },
        {
          id: "3",
          name: "Caring Paws Veterinary",
          address: "789 Paws Ln, Pet Town",
          phone: "555-8765",
          specialties: ["Orthopedics", "Wellness Checks", "Emergency Care"],
          distance: 3.7,
          image: "/images/vet3.jpg",
        },
        {
          id: "4",
          name: "Paw Health Center",
          address: "101 Paw Ave, Canine City",
          phone: "555-9876",
          specialties: ["Surgery", "Behavioral Therapy", "Wellness Checks"],
          distance: 6.8,
          image: "/images/vet4.jpg",
        },
      ];
      setVets(sampleVets);
    }
  }, [userLocation]);

  return (
    <motion.div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Nearby Veterinarians
      </h1>

      {/* Vet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vets.length === 0 && (
          <div className="text-center text-gray-500">
            <p>No veterinarians available.</p>
          </div>
        )}

        {vets.map((vet) => (
          <motion.div
            key={vet.id}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {/* Vet Image */}
            <div className="relative w-full h-48">
              <img
                src={vet.image || "https://via.placeholder.com/150"}
                alt={vet.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
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
