"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface Animal {
  id: string;
  name: string;
  description: string;
  image: string;
  questions: Question[];
  rehomerContact: string;
}

interface Question {
  id: string;
  text: string;
}

const AdopterForm: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showContact, setShowContact] = useState(false);
  const [step, setStep] = useState(1); // Step to manage onboarding flow
  const [searchQuery, setSearchQuery] = useState("");
  const [adopterProfile, setAdopterProfile] = useState({
    livingSituation: "",
    petExperience: "",
    lifestyle: "",
  });

  useEffect(() => {
    // Fetch animals from the backend
    axios
      .get<Animal[]>("http://localhost:5000/api/animals") // Adjust this URL
      .then((response) => setAnimals(response.data))
      .catch((error) => console.error("Error fetching animals:", error));
  }, []);

  const handleAnimalSelect = (animal: Animal) => {
    setSelectedAnimal(animal);
    setStep(2); // Move to next step: Answering questions
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post("/api/validate-answers", { answers });
    if (response.data.success) {
      setShowContact(true);
      setStep(3); // Step 3: Show contact info
    } else {
      alert("Sorry, you did not pass the questionnaire. Please try again.");
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdopterProfile({
      ...adopterProfile,
      [e.target.name]: e.target.value,
    });
  };

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div className="p-8 space-y-6">
      {/* Onboarding steps */}
      {step === 1 && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Welcome to the Adoption Process
          </h2>
          <p className="mt-4 text-lg">
            Browse through available animals and help us understand if you're
            the right fit for them.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full"
            onClick={() => setStep(2)} // Proceed to animal browsing
          >
            Browse Animals
          </button>
        </div>
      )}

      {/* Search Functionality */}
      {step === 2 && (
        <div>
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border rounded-md"
              placeholder="Search for an animal..."
            />
          </div>

          <h2 className="text-xl font-semibold">Available Animals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {filteredAnimals.map((animal) => (
              <motion.div
                key={animal.id}
                className="border rounded-lg p-4 cursor-pointer shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleAnimalSelect(animal)}
              >
                <img
                  src={animal.image || "/placeholder.svg"}
                  alt={animal.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-lg font-semibold">{animal.name}</h3>
                <p className="text-gray-600">{animal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Questionnaire form for selected animal */}
      {step === 3 && selectedAnimal && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">
            Questionnaire for {selectedAnimal.name}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {selectedAnimal.questions.map((question) => (
              <div key={question.id}>
                <label
                  htmlFor={question.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {question.text}
                </label>
                <input
                  type="text"
                  id={question.id}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                  onChange={(e) =>
                    handleAnswerChange(question.id, e.target.value)
                  }
                />
              </div>
            ))}
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full"
            >
              Submit Answers
            </button>
          </form>
        </div>
      )}

      {/* Contact Info Display */}
      {showContact && selectedAnimal && (
        <div className="mt-6 p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">
            Congratulations! Here's the rehomer's contact information:
          </h3>
          <p className="mt-2 text-lg">{selectedAnimal.rehomerContact}</p>
        </div>
      )}

      {/* Adopter Profile Form */}
      <div className="mt-8 p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Your Profile</h3>
        <form className="space-y-4 mt-4">
          <input
            type="text"
            name="livingSituation"
            value={adopterProfile.livingSituation}
            onChange={handleProfileChange}
            className="p-2 w-full border rounded-md"
            placeholder="Living Situation"
          />
          <input
            type="text"
            name="petExperience"
            value={adopterProfile.petExperience}
            onChange={handleProfileChange}
            className="p-2 w-full border rounded-md"
            placeholder="Pet Experience"
          />
          <input
            type="text"
            name="lifestyle"
            value={adopterProfile.lifestyle}
            onChange={handleProfileChange}
            className="p-2 w-full border rounded-md"
            placeholder="Lifestyle"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default AdopterForm;
