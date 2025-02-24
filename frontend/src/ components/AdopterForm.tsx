"use client"

import  React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import axios from "axios"

interface Animal {
  id: string
  name: string
  description: string
  image: string
  questions: Question[]
  rehomerContact: string
}

interface Question {
  id: string
  text: string
}

const AdopterForm: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    // Fetch animals from the backend
    axios.get<Animal[]>("/api/animals").then((response) => setAnimals(response.data))
  }, [])

  const handleAnimalSelect = (animal: Animal) => {
    setSelectedAnimal(animal)
  }

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await axios.post("/api/validate-answers", { answers })
    if (response.data.success) {
      setShowContact(true)
    } else {
      alert("Sorry, you did not pass the questionnaire. Please try again.")
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>Available Animals</h2>
      <div className="animal-list">
        {animals.map((animal) => (
          <motion.div
            key={animal.id}
            className="animal-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleAnimalSelect(animal)}
          >
            <img src={animal.image || "/placeholder.svg"} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>{animal.description}</p>
          </motion.div>
        ))}
      </div>
      {selectedAnimal && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <h3>Questionnaire for {selectedAnimal.name}</h3>
          <form onSubmit={handleSubmit}>
            {selectedAnimal.questions.map((question) => (
              <div key={question.id}>
                <label htmlFor={question.id}>{question.text}</label>
                <input type="text" id={question.id} onChange={(e) => handleAnswerChange(question.id, e.target.value)} />
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </motion.div>
      )}
      {showContact && selectedAnimal && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <h3>Congratulations! Here's the rehomer's contact information:</h3>
          <p>{selectedAnimal.rehomerContact}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default AdopterForm

