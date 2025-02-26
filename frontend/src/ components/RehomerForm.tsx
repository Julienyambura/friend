"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Animal Details Form
const AnimalDetailsForm: React.FC = () => {
  const [animalData, setAnimalData] = useState({
    type: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    temperament: "",
    healthConditions: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAnimalData({
      ...animalData,
      [name]: value,
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Animal Details</h2>
      <form>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Animal Type (Species):
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={animalData.type}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700"
            >
              Breed:
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={animalData.breed}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age:
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={animalData.age}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Animal Description:
            </label>
            <textarea
              id="description"
              value={animalData.description}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

// Image Upload Feature
const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <label
        htmlFor="image-upload"
        className="block text-sm font-medium text-gray-700"
      >
        Upload Animal Images:
      </label>
      <input
        type="file"
        id="image-upload"
        multiple
        onChange={handleImageChange}
        className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="mt-4 flex space-x-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`Preview ${index}`}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Animal History & Storytelling Section
const AnimalHistoryForm: React.FC = () => {
  const [history, setHistory] = useState("");

  const handleHistoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHistory(e.target.value);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <label
        htmlFor="history"
        className="block text-sm font-medium text-gray-700"
      >
        Animal's History & Story:
      </label>
      <textarea
        id="history"
        value={history}
        onChange={handleHistoryChange}
        className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
        placeholder="Share the animal's history..."
        maxLength={500}
      />
    </div>
  );
};

// Needs & Requirements Section
const NeedsRequirementsForm: React.FC = () => {
  const [needs, setNeeds] = useState({
    fencedYard: false,
    experienceWithBreed: false,
    noYoungChildren: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNeeds({ ...needs, [name]: checked });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <label className="block text-sm font-medium text-gray-700">
        Animal Needs & Requirements:
      </label>
      <div className="mt-2 space-y-2">
        <label className="block text-sm">
          <input
            type="checkbox"
            name="fencedYard"
            checked={needs.fencedYard}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Requires a fenced yard
        </label>
        <label className="block text-sm">
          <input
            type="checkbox"
            name="experienceWithBreed"
            checked={needs.experienceWithBreed}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Needs adopter with experience in this breed
        </label>
        <label className="block text-sm">
          <input
            type="checkbox"
            name="noYoungChildren"
            checked={needs.noYoungChildren}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          No young children in the household
        </label>
      </div>
    </div>
  );
};

// Custom Questions for Adopters Section
const QuestionsForm: React.FC = () => {
  const [questions, setQuestions] = useState(["", "", "", "", ""]);

  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <label className="block text-sm font-medium text-gray-700">
        Custom Questions for Adopters:
      </label>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={`question-${index}`}
            className="block text-sm font-medium text-gray-700"
          >
            Question {index + 1}:
          </label>
          <input
            type="text"
            id={`question-${index}`}
            value={question}
            onChange={(e) => handleQuestionChange(e, index)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            maxLength={100}
          />
        </div>
      ))}
    </div>
  );
};

// Contact Information Section
const ContactInfoForm: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <label className="block text-sm font-medium text-gray-700">
        Contact Information:
      </label>
      <input
        type="text"
        name="name"
        value={contactInfo.name}
        onChange={handleContactChange}
        placeholder="Your Name"
        className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />
      <input
        type="email"
        name="email"
        value={contactInfo.email}
        onChange={handleContactChange}
        placeholder="Your Email"
        className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />
      <input
        type="tel"
        name="phone"
        value={contactInfo.phone}
        onChange={handleContactChange}
        placeholder="Your Phone"
        className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

// Rehomer Form (Final Form for Listing Creation)
const RehomerForm: React.FC = () => {
  const [formData, setFormData] = useState({
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
      className="max-w-4xl mx-auto p-6"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Rehomer Form
      </h2>
      <form onSubmit={handleSubmit}>
        <AnimalDetailsForm />
        <ImageUpload />
        <AnimalHistoryForm />
        <NeedsRequirementsForm />
        <QuestionsForm />
        <ContactInfoForm />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default RehomerForm;
