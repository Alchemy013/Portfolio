import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./MainScreens/Home";
import Projects from "./MainScreens/Projects";
import About from "./MainScreens/About";
import NoPage from "./MainScreens/NoPage";
import Contact from "./MainScreens/Contact";
import Resume from "./MainScreens/Resume";
import FloatingDock from "./components/Dock";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
          <FloatingDock />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
