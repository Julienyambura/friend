"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface FormData {
  breed: string;
  questions: string[];
  contactInfo: string;
}

const RehomerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    breed: "",
    questions: ["", "", "", "", ""],
    contactInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    if (e.target.name === "questions" && index !== undefined) {
      const newQuestions = [...formData.questions];
      newQuestions[index] = e.target.value;
      setFormData({ ...formData, questions: newQuestions });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/rehomer", formData);
      alert("Your animal has been listed for adoption!");
    } catch (error) {
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Rehomer Form</h2>
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="breed">Animal Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Questions for Potential Adopters:</h3>
          {formData.questions.map((question, index) => (
            <div key={index}>
              <label htmlFor={`question-${index}`}>Question {index + 1}:</label>
              <input
                type="text"
                id={`question-${index}`}
                name="questions"
                value={question}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="contactInfo">Contact Information:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default RehomerForm;
