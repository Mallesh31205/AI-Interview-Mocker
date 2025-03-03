"use client";
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import {  Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from '@/utils/GeminiAIModel';
import Image from "next/image";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";


function RecordAnswerSection({mockInterviewQuestion, activeQuestionIndex, interviewData}) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  // UseEffect to handle updates to the `userAnswer` based on results
  useEffect(() => {
    results.map((result)=>(
      setUserAnswer((prevAns) => prevAns + result?.transcript)
  ))
  }, [results]);

  useEffect(()=>{
    if(!isRecording && userAnswer.length>10){
      UpdateUserAnswer();
    
    if (!userAnswer || userAnswer.length < 10) {
      setLoading(false);
      toast("Error While Saving Your Answer, Please Record Again", {
        style: {
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '8px',
          padding: '10px',
          fontWeight: 'bold',
        },
      });
      return;
    }
  }

  },[userAnswer])

  const StartStopRecording= async () => {
    if (isRecording) {
      
      stopSpeechToText();
    } else {
      startSpeechToText();
    }

  };
  const UpdateUserAnswer=async()=>{
    
    setLoading(true);
    const feedbackPrompt =
        "Question:" +
        mockInterviewQuestion[activeQuestionIndex]?.question +
        ", User Answer:" +
        userAnswer +
        ",Depends on question user answer for given interview questions" +
        "Please Give us rating for answer and feedback as area of improvement if any" +
        "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field, give me in only json format";
        console.log(feedbackPrompt)

      const result = await chatSession.sendMessage(feedbackPrompt);

      const MockJsonResp = result.response.text().replace('```json', '').replace('```', '');
      console.log(MockJsonResp);
      
      const JsonFeedbackResp = JSON.parse(MockJsonResp);

      const resp = await db.insert(UserAnswer)
      .values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feeedback: JsonFeedbackResp.feedback,
        rating: JsonFeedbackResp.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY'),
      });

      if (resp) {
        toast("User Answer Recorded Successfully");
        setResults('');
        setResults([]);
      }
      setResults([]);
      setLoading(false);

  }
  const [isCameraOn, setIsCameraOn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Interview Tips */}
      {!isCameraOn && (
        <p className="text-blue-400 text-lg text-center mb-2">
          <h2>😊 Smile | 🪑 Sit straight | 🎥 Face the camera properly</h2>
        </p>
      )}

<div className="flex flex-col items-center justify-center w-full h-auto my-2 rounded-lg p-2 bg-black relative">
  {!isCameraOn && (
    <div className="absolute top-2 flex justify-center w-full">
      <Image 
        src={'/webcam.png'} 
        alt="Web Cam" 
        width={250} 
        height={250} 
        className="w-32 sm:w-40 md:w-52 lg:w-64 xl:w-72 h-auto"
      />
    </div>
  )}

  <Webcam
    videoConstraints={{ facingMode: "environment" }} // Back camera
    onUserMedia={() => setIsCameraOn(true)} // Hide image when camera starts
    mirrored={false} // Ensure proper orientation
    className="w-full sm:w-3/4 md:w-2/3 lg:w-[100%] xl:w-[100%] h-[250px] md:h-[300px] lg:h-[350px] rounded-lg object-cover"
  />
</div>


      {/* Record Button */}
      <Button 
        disabled={loading} 
        className="ml-48 p-6 text-lg mt-10 bg-blue-400 hover:bg-green-300 transition-all" 
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-500 flex gap-2 items-center cursor-pointer">
            <StopCircle /> Stop Recording...
          </h2>
        ) : (
          <h2 className="text-white p-4 rounded-lg flex gap-2 items-center">
            <Mic className="text-black" style={{ width: '30px', height: '30px' }} />
            Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;
