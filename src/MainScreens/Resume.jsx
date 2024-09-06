import React from "react";
import FloatingDock from "../components/Dock";

const Resume = () => {
  return (
    <div>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
        <FloatingDock />
      </div>
    </div>
  );
};

export default Resume;
