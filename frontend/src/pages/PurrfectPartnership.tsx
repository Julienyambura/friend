"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import AdopterForm from "../ components/AdopterForm";
import RehomerForm from "../ components/RehomerForm";
import "../styles/style.css";

export const PurrfectPartnership: React.FC = () => {
  const [userType, setUserType] = useState<"adopter" | "rehomer" | null>(null);

  return (
    <motion.div
      className="purrfect-partnership"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Purrfect Partnership</h1>
      {!userType && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Are you an adopter or a rehomer?</h2>
          <button onClick={() => setUserType("adopter")}>Adopter</button>
          <button onClick={() => setUserType("rehomer")}>Rehomer</button>
        </motion.div>
      )}
      {userType === "adopter" && <AdopterForm />}
      {userType === "rehomer" && <RehomerForm />}
    </motion.div>
  );
};

// export default PurrfectPartnership;
