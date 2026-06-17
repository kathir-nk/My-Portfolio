import React, { useState, useEffect } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Intro from './pages/Intro';

import { Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  // Check if intro was already watched in this session
  useEffect(() => {
    const introWatched = sessionStorage.getItem("introWatched");
    if (introWatched === "true") {
      setShowIntro(false);
    }
  }, []);

  const handleIntroEnd = () => {
    sessionStorage.setItem("introWatched", "true");
    setShowIntro(false);
  };

  // Reset intro on refresh (sessionStorage clears on tab close)
  // But if you want intro on EVERY refresh, use this instead:
  useEffect(() => {
    // Clear intro watched on mount (every refresh shows intro)
    // Remove this if you want intro only once per tab session
    // sessionStorage.removeItem("introWatched");
  }, []);

  return (
    <>
      {/* Header only shows after Intro finishes */}
      {!showIntro && <Header />}

      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode
        <>
          {showIntro ? (
            <Intro onIntroEnd={handleIntroEnd} />
          ) : (
            <>
              <Hero />
              <Skills />
              <Experience />
              <Education />
              <Contact />
            </>
          )}
        </>
      ) : (
        // Router Mode
        <Routes>
          <Route
            path="/"
            element={
              showIntro ? (
                <Intro onIntroEnd={handleIntroEnd} />
              ) : (
                <>
                  <Hero />
                </>
              )
            }
          />
          <Route path="/skills" element={<><Header /><Skills /></>} />
          <Route path="/experience" element={<><Header /><Experience /></>} />
          <Route path="/education" element={<><Header /><Education /></>} />
          <Route path="/contact" element={<><Header /><Contact /></>} />
          <Route path="/projects" element={<><Header /><Projects /></>} />
        </Routes>
      )}
    </>
  );
}