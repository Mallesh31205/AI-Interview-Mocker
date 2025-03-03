"use client";
import React, { useState } from "react";

const questions = [
  { question: "Tell me about yourself.", answer: "I am a dedicated professional with experience in [your field]. I specialize in [your expertise] and have worked on projects involving [key achievements]." },
  { question: "Why do you want to work for this company?", answer: "I admire the company's vision and culture. My skills align with your current projects, and I see an opportunity to contribute meaningfully while growing professionally." },
  { question: "What are your greatest strengths?", answer: "My key strengths include problem-solving, adaptability, and strong communication skills, which help me collaborate effectively in a team." },
  { question: "What is your biggest weakness?", answer: "I sometimes focus too much on details, but I am working on balancing efficiency with perfectionism to improve productivity." },
  { question: "Describe a challenging work situation and how you handled it.", answer: "In a previous role, I faced [specific challenge]. I addressed it by [solution], which led to [positive outcome]." },
  { question: "Where do you see yourself in five years?", answer: "I aim to grow into a leadership role where I can contribute to strategic decision-making and mentor junior professionals." },
  { question: "Why should we hire you?", answer: "I have the skills, experience, and motivation to make a significant contribution to your team, and I am committed to delivering results." },
  { question: "Tell me about a time you worked in a team.", answer: "I collaborated on [project name], where my role was [your role]. We successfully delivered [result] by leveraging teamwork and clear communication." },
  { question: "How do you handle stress and pressure?", answer: "I stay focused on prioritizing tasks, maintaining organization, and ensuring clear communication to handle high-pressure situations effectively." },
  { question: "How do you prioritize your work?", answer: "I use task management techniques like Eisenhower’s Matrix to categorize urgent and important tasks and adjust priorities accordingly." },
  { question: "What motivates you at work?", answer: "I am driven by challenges, opportunities to learn new skills, and the ability to contribute meaningfully to projects and team success." },
  { question: "Describe a time when you had a conflict with a coworker.", answer: "I approached the situation with open communication, actively listened to their concerns, and worked toward a mutually beneficial resolution." },
  { question: "What are your salary expectations?", answer: "Based on my skills and industry standards, I expect a competitive salary in the range of [expected range], but I am open to discussion." },
  { question: "What do you know about our company?", answer: "Your company is known for [key aspect], and I appreciate its commitment to [values]. Your recent project in [area] aligns with my interests." },
  { question: "Tell me about a time you led a project.", answer: "I led [project name] by coordinating the team, setting deadlines, and ensuring smooth execution, which resulted in [achievement]." },
  { question: "How do you stay updated with industry trends?", answer: "I regularly follow industry publications, attend conferences, and participate in professional networks to stay informed." },
  { question: "What is your biggest professional achievement?", answer: "One of my greatest accomplishments was [achievement], which resulted in [impact, e.g., revenue growth, efficiency improvement]." },
  { question: "What is your management style?", answer: "I believe in a collaborative leadership style that fosters open communication, clear goal-setting, and team empowerment." },
  { question: "Tell me about a mistake you made at work.", answer: "I once [describe mistake]. I took responsibility, corrected it, and implemented a strategy to prevent similar issues in the future." },
  { question: "How do you handle tight deadlines?", answer: "I break tasks into manageable steps, prioritize critical components, and maintain clear communication with stakeholders to meet deadlines effectively." },
  { question: "How would you describe your ideal work environment?", answer: "An environment that encourages innovation, values teamwork, and promotes continuous learning aligns with my professional aspirations." },
  { question: "How do you deal with difficult clients or stakeholders?", answer: "I listen carefully to understand their concerns, maintain professionalism, and propose solutions that address their needs while aligning with project goals." },
  { question: "Tell me about a time you improved a process.", answer: "I identified inefficiencies in [process] and introduced [improvement], which led to increased productivity and streamlined workflow." },
  { question: "How do you adapt to new technologies?", answer: "I actively explore emerging technologies, engage in hands-on learning, and take courses to stay proficient in relevant tools." },
  { question: "Do you prefer working independently or in a team?", answer: "I am adaptable and thrive in both settings. I enjoy collaboration but am also comfortable handling tasks independently when needed." },
  { question: "What is your approach to problem-solving?", answer: "I analyze the issue, break it down into components, research possible solutions, and implement the best course of action while considering long-term impact." },
  { question: "How do you handle constructive criticism?", answer: "I view feedback as an opportunity to grow. I listen attentively, apply relevant suggestions, and continuously work on self-improvement." },
  { question: "Do you have any questions for us?", answer: "Yes, I’d like to learn more about the team dynamics and how success is measured in this role." },
  { question: "How do you manage competing priorities?", answer: "I assess urgency, communicate with stakeholders, and adjust schedules accordingly to balance multiple tasks effectively." },
  { question: "How do you ensure high-quality work?", answer: "I follow best practices, conduct thorough reviews, and seek feedback to maintain high standards in my work." },
  { question: "What makes you stand out from other candidates?", answer: "My unique combination of skills, experience, and commitment to excellence sets me apart and makes me a strong candidate for this role." }
];

const InterviewQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 pt-16">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96 text-center">
        <h2 className="text-xl font-bold text-gray-800">Interview Question</h2>
        <p className="mt-4 text-gray-700 text-lg">{questions[currentQuestion].question}</p>

        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        {showAnswer && <p className="mt-3 text-gray-600 border-t pt-3">{questions[currentQuestion].answer}</p>}

        <div className="mt-16 flex justify-between">
          <button onClick={prevQuestion} disabled={currentQuestion === 0} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Previous</button>
          <span className="text-gray-600">{currentQuestion + 1} / {questions.length}</span>
          <button onClick={nextQuestion} disabled={currentQuestion === questions.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestions;
