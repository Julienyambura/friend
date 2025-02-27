"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Animal Details Form
const AnimalDetailsForm: React.FC<{
  animalData: any;
  setAnimalData: any;
}> = ({ animalData, setAnimalData }) => {
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

          {/* Additional fields for breed, age, and description would follow the same pattern as above */}
        </div>
      </form>
    </div>
  );
};

// Image Upload Feature
const ImageUpload: React.FC<{
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}> = ({ images, setImages }) => {
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

// Custom Questions for Adopters Section (Optional)
const QuestionsForm: React.FC<{
  questions: string[];
  setQuestions: React.Dispatch<React.SetStateAction<string[]>>;
  isQuestionsEnabled: boolean;
}> = ({ questions, setQuestions, isQuestionsEnabled }) => {
  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  return (
    <>
      {isQuestionsEnabled && (
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
      )}
    </>
  );
};

// Rehomer Form (Final Form for Listing Creation)
const RehomerForm: React.FC = () => {
  // State for form data
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

  const [images, setImages] = useState<File[]>([]);
  const [questions, setQuestions] = useState(["", "", "", "", ""]);
  const [isQuestionsEnabled, setIsQuestionsEnabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      // Append form fields to FormData
      Object.keys(animalData).forEach((key) => {
        formData.append(key, animalData[key as keyof typeof animalData]);
      });

      // Append images to FormData
      images.forEach((image) => {
        formData.append("images", image);
      });

      // Append questions to FormData if enabled
      if (isQuestionsEnabled) {
        questions.forEach((question, index) => {
          formData.append(`question_${index + 1}`, question);
        });
      }

      // Send the data to your backend API
      await axios.post("/api/rehomer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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
        {/* Pass state and setState for animal details */}
        <AnimalDetailsForm
          animalData={animalData}
          setAnimalData={setAnimalData}
        />
        {/* Image upload */}
        <ImageUpload images={images} setImages={setImages} />

        {/* Custom Questions Section */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="customQuestions"
          >
            Would you like to ask custom questions to adopters?
          </label>
          <input
            type="checkbox"
            id="customQuestions"
            checked={isQuestionsEnabled}
            onChange={() => setIsQuestionsEnabled(!isQuestionsEnabled)}
            className="mt-2"
          />
        </div>

        {/* Conditionally render the Questions Form */}
        <QuestionsForm
          questions={questions}
          setQuestions={setQuestions}
          isQuestionsEnabled={isQuestionsEnabled}
        />

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
