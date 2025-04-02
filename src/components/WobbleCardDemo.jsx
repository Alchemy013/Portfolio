"use client";
import React from "react";
import { WobbleCard } from "./Ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="pb-32">  {/* Increased bottom padding */}
      {/* Top row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* Box 1: EDUCATION, Contact & Opening (Left, spans 2 columns) */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-[#2D033B] min-h-[400px] lg:min-h-[250px] relative">
          <div className="max-w-lg p-6">
            {/* Header & Contact */}
            <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Rehyann Saini
            </h2>
            <p className="mt-2 text-left text-2xl text-neutral-200">
              +91 7701919054 | rehyannsaini@gmail.com <br />
              linkedin.com/rehyannsaini | github.com/rehyannsaini
            </p>
            {/* Short Opening */}
            <p className="mt-4 text-left text-2xl text-neutral-200">
              Hello, I'm Rehyann Saini, a dedicated computer science student
              passionate about innovation and technology. Welcome to my resume.
            </p>
            {/* EDUCATION */}
            <h3 className="mt-4 text-left text-3xl font-bold text-white">
              EDUCATION
            </h3>
            <p className="mt-1 text-left text-2xl text-neutral-200">
              <strong>SRM University</strong> Aug. 2021 – Present <br />
              Bachelor's Degree in Computer Science, Chennai, India <br />
              <strong>CGPA:</strong> 8.56 <br />
              <br />
              <strong>12th - Salwan Public School</strong> (Year 2021, 90%) <br />
              <strong>10th - Salwan Public School</strong> (Year 2019, 89%)
            </p>
          </div>
        </WobbleCard>

        {/* Box 2: TECHNICAL SKILLS & CERTIFICATIONS (Right) */}
        <WobbleCard containerClassName="col-span-1 bg-grey min-h-[250px] relative">
          <div className="p-6">
            <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              TECHNICAL SKILLS
            </h2>
            <div className="mt-4 text-left text-2xl text-neutral-200">
              <p className="font-bold text-3xl">Languages:</p>
              <p>Python, C, C++, R</p>
              <p className="font-bold text-3xl mt-2">Frameworks & Database:</p>
              <p>Tailwind, React, Firebase, Supabase, Mysql, MongoDB</p>
              <p className="font-bold text-3xl mt-2">Libraries:</p>
              <p>TensorFlow, PyTorch, Keras, Scikit-Learn, Pandas, NumPy, Langchain</p>
              <p className="font-bold text-3xl mt-2">Developer Tools:</p>
              <p>Git, Postman, Vercel</p>
            </div>
            <h3 className="mt-4 text-left text-3xl font-bold text-white">
              CERTIFICATIONS
            </h3>
            <ul className="list-disc ml-5 mt-2 text-2xl text-neutral-200">
              <li>NPTEL Data Analytics with Python</li>
              <li>Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</li>
              <li>IBM Data Analyst Professional Certificate</li>
              <li>Google Data Analytic</li>
            </ul>
          </div>
        </WobbleCard>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full mt-4">
        {/* Box 3: PROFESSIONAL EXPERIENCE */}
        <WobbleCard containerClassName="bg-purple-800 min-h-[250px] relative">
          <div className="max-w-xl p-6">
            <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="mt-4 text-left text-2xl text-neutral-200 space-y-4">
              <div>
                <p className="font-bold text-3xl">
                  Research Intern | MedTech Innovations Lab
                </p>
                <p className="italic text-2xl">May 2024 – Aug. 2024</p>
                <ul className="list-disc ml-5">
                  <li>
                    Developed a custom CNN-LSTM model for classifying Diabetic
                    Foot Ulcer and Ischemia, achieving a 35% accuracy improvement
                    using Elephant Herding Optimization.
                  </li>
                  <li>
                    Achieved 88% accuracy for ischemia and 87% for tissue
                    damage; benchmarked pretrained models and applied advanced
                    optimization to reduce overfitting.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-3xl">
                  AI/ML Intern | Innosphere Ventures
                </p>
                <p className="italic text-2xl">Nov. 2023 – Apr. 2024</p>
                <ul className="list-disc ml-5">
                  <li>
                    Developed an ADHD treatment platform using a
                    Transformer-based BiLSTM-Attention model with LLMs, achieving
                    89% accuracy in symptom detection.
                  </li>
                  <li>
                    Built a predictive pipeline with a stacked ensemble achieving
                    92% accuracy in early symptom detection.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </WobbleCard>

        {/* Box 4: PROJECTS */}
        <WobbleCard containerClassName=" min-h-[400px] relative">
          <div className="max-w-xl p-6">
            <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              PROJECTS
            </h2>
            <div className="mt-4 text-left text-2xl text-neutral-200 space-y-4">
              <div>
                <p className="font-bold text-3xl">
                  Mentoo | Typescript, Supabase (Ongoing)
                </p>
                <p>
                  Designed and developed a platform empowering men by providing a
                  secure and supportive space for sharing personal experiences
                  and challenges.
                </p>
              </div>
              <div>
                <p className="font-bold text-3xl">
                  InsightX | Generative AI (Ongoing)
                </p>
                <p>
                  Developed a Generative AI-powered web search platform using
                  React and FastAPI, providing real-time updates and validated
                  sources.
                </p>
              </div>
              <div>
                <p className="font-bold text-3xl">
                  Sonar Shift | Sklearn, Pandas, Numpy
                </p>
                <p>
                  Developed a logistic regression-based model to classify
                  underwater objects as rocks or mines using sonar signals.
                </p>
              </div>
              <div>
                <p className="font-bold text-3xl">
                  Detection Systems | Python, YOLO, cv2, cvzone
                </p>
                <p>
                  Developed a real-time object detection system using YOLO,
                  accurately identifying and localizing objects in images and
                  video streams.
                </p>
              </div>
            </div>
          </div>
        </WobbleCard>
      </div>

      {/* Download Link */}
      <div className="text-center mt-8">
        <a 
          href="/Rehyann_Saini.pdf" 
          download 
          className="text-xl font-bold text-gray-500 hover:underline"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
