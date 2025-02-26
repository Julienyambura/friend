"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./ components/Navbar";

import "./styles/tailwind.css";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { PurrfectPartnership } from "./pages/PurrfectPartnership";
import { LostAndFound } from "./pages/LostAndFound";
import { Blog } from "./pages/Blog";
import { Shelters } from "./pages/Shelters";
import { Veterinarians } from "./pages/Veterinarians";
import { ConnectWithUs } from "./pages/ConnectWithUs";

// Lazy load pages

export const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/purrfect-partnership"
              element={<PurrfectPartnership />}
            />
            <Route path="/lost-and-found" element={<LostAndFound />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shelters" element={<Shelters />} />
            <Route path="/veterinarians" element={<Veterinarians />} />
            <Route path="/connect-with-us" element={<ConnectWithUs />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};
