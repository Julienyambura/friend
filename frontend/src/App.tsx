"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./ components/Navbar";

import "./styles/style.css";
import { Home } from "./pages/Home";
import { PurrfectPartnership } from "./pages/PurrfectPartnership";
import { Veterinarians } from "./pages/Veterinarians";
import { ConnectWithUs } from "./pages/ConnectWithUs";
import { LostAndFound } from "./pages/LostAndFound";
import { Blog } from "./pages/Blog";
import { Shelters } from "./pages/Shelters";
import { AboutUs } from "./pages/AboutUs";
// import { AboutUs } from "./pages/AboutUs";
export const App: React.FC = () => {
  const backgroundImageUrl = "path_to_your_image.jpg";
  return (
    // <h1>trial home</h1>
    <Router>
      <div
        className="App"
        //  style={{
        //     backgroundImage: `url(${backgroundImageUrl})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundAttachment: "fixed", // Keeps the background fixed on scroll
        //   }}
      >
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

// export default App;
