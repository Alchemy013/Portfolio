import React from "react";
import { BackgroundGradientAnimation } from "../components/Ui/background-gradient-animation";
import { FlipWords } from "../components/Ui/flip-words";

const words = [
  "Who Am I?",
  "I Am Rehyann Saini",
  "Full-Stack Dev",
  "Ui/Ux Designer",
  "Ai/ML Developer",
];

const About = () => {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-black px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl font-sans text-shadow-lg">
          <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-5xl md:text-6xl lg:text-7xl mx-auto font-bold text-white   ">
              <FlipWords words={words} />
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default About;
