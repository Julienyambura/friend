import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import SignUp from "../ components/SignUp";
import Login from "../ components/Login";
import AdopterForm from "../ components/AdopterForm";
import RehomerForm from "../ components/RehomerForm";
import "../styles/tailwind.css";

export const PurrfectPartnership: React.FC = () => {
  const { user, signup, login } = useAuth(); // Using the useAuth hook to access user and auth methods
  const [userType, setUserType] = useState<"adopter" | "rehomer" | null>(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // If the user is not logged in, show the sign-up and login forms
  if (!user) {
    return (
      <motion.div
        className="purrfect-partnership py-10 px-4 flex justify-center items-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-brown-600 mb-6">
            Purrfect Partnership
          </h1>

          {/* Conditional rendering for SignUp and Login */}
          {showSignUp ? (
            <SignUp
              signup={signup}
              onSuccess={() => setUserType(null)} // Reset userType after sign-up
            />
          ) : showLogin ? (
            <Login
              signIn={login} // Pass login function here
              onSuccess={() => setUserType(null)} // Reset userType after login
            />
          ) : (
            <div className="text-center">
              <button
                onClick={() => setShowSignUp(true)}
                className="bg-brown-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-brown-700 transition mb-4"
              >
                Sign Up
              </button>
              <br />
              <button
                onClick={() => setShowLogin(true)}
                className="bg-brown-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-brown-700 transition"
              >
                Log In
              </button>
            </div>
          )}
        </div>
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
              className="bg-brown-600 text-black py-2 px-6 rounded-lg shadow-md hover:bg-brown-700 transition"
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
