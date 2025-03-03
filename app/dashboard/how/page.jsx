"use client";
import React from "react";
import { CheckCircle, PlayCircle, FileText, Award } from "lucide-react";

const steps = [
  { icon: <PlayCircle size={40} className="text-blue-500" />, title: "Start Interview", description: "Begin a mock interview with real-time questions." },
  { icon: <FileText size={40} className="text-green-500" />, title: "Answer Questions", description: "Respond to structured interview questions." },
  { icon: <CheckCircle size={40} className="text-yellow-500" />, title: "Receive Feedback", description: "Get instant insights and performance review." },
  { icon: <Award size={40} className="text-purple-500" />, title: "Improve & Succeed", description: "Enhance your skills and prepare for real interviews." }
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 mt-[-70px]">
      <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
      <p className="text-gray-600 mt-1 mb-6">A simple process to sharpen your interview skills.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-lg p-5 rounded-lg">
            {step.icon}
            <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
            <p className="text-gray-600 text-center mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
