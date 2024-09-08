import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./MainScreens/Home";
import Projects from "./MainScreens/Projects";
import About from "./MainScreens/About";
import NoPage from "./MainScreens/NoPage";
import Contact from "./MainScreens/Contact";
import Experience from "./MainScreens/Experience";
import FloatingDock from "./components/Dock";
import Resume from "./MainScreens/Resume";
import LoadingScreen from "./MainScreens/LoadingScreen";

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
        <FloatingDock />
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <LoadingScreen />
        </div>
      )}
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
