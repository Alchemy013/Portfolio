"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "../components/Ui/multi-step-loader";

const LoadingStates = [
  { text: "Buying React-Juice " },
  { text: "Buying React-Juice " },
  { text: "Buying React-Juice " },
  { text: "Downloading Libraries" },
  { text: "Adding Bugs" },
  { text: "Running openGL" },
  { text: "Clearing Cache" },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    setRandomText(
      LoadingStates[Math.floor(Math.random() * LoadingStates.length)].text
    );

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[60vh] flex items-center justify-center relative">
      <Loader text={randomText} loading={loading} />
    </div>
  );
}
