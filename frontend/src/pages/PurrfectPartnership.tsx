import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext"; // Importing the useAuth hook
import SignUp from "../ components/SignUp";
import Login from "../ components/Login";
import AdopterForm from "../ components/AdopterForm";
import RehomerForm from "../ components/RehomerForm";
import "../styles/tailwind.css";

export const PurrfectPartnership: React.FC = () => {
  // Using the useAuth hook to access the current user
  const { user } = useAuth();
  const [userType, setUserType] = useState<"adopter" | "rehomer" | null>(null);

  // If the user is not logged in, show the sign-up and login forms
  if (!user) {
    return (
      <motion.div
        className="purrfect-partnership py-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-3xl font-bold text-center text-brown-600 mb-6">
          Purrfect Partnership
        </h1>
        <SignUp />
        <Login />
      </motion.div>
    );
  }

  // If the user is logged in, show the form selection options (Adopter or Rehomer)
  return (
    <motion.div
      className="purrfect-partnership py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl font-bold text-center text-brown-600 mb-6">
        Purrfect Partnership
      </h1>

      {/* User Type Selection */}
      {!userType && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-xl mb-4">Are you an adopter or a rehomer?</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setUserType("adopter")}
              className="bg-brown-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-brown-700 transition"
            >
              I am an Adopter
            </button>
            <button
              onClick={() => setUserType("rehomer")}
              className="bg-brown-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-brown-700 transition"
            >
              I am a Rehomer
            </button>
          </div>
        </motion.div>
      )}

      {/* Display Forms Based on User Selection */}
      {userType === "adopter" && <AdopterForm />}
      {userType === "rehomer" && <RehomerForm />}
    </motion.div>
  );
};

export default PurrfectPartnership;
