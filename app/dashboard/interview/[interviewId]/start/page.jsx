"use client"
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import QuestionsSection from './_components/QuestionsSection'
import RecordAnswerSection from './_components/RecordAnswerSection'
import { Button } from '@/components/ui/button'
import  Link from 'next/link';

function StartInterview({params}) {
    const [interviewData,setInterviewData]=useState();
    const [mockInterviewQuestion,setMockInterviewQuestion]=useState();
    const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
    useEffect(()=>{
            GetInterviewDetails();
    },[])
    const GetInterviewDetails=async()=>{
            const result=await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId,params?.interviewId))
            const jsonMockResp=JSON.parse(result[0].jsonMockResp);
            console.log(jsonMockResp)

            setMockInterviewQuestion(jsonMockResp);
            setInterviewData(result[0]);
            
        }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
          <div className="w-full h-[500px] max-w-full">
            <QuestionsSection 
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
            />
            <div className="flex gap-4 mt-5">
              {activeQuestionIndex>0&& <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}  className="transition-all transform hover:scale-110 bg-blue-400 hover:bg-blue-500 hover:text-white p-6 text-lg">Previous Question</Button>}
              {activeQuestionIndex!=mockInterviewQuestion?.length-1&& <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)} className="transition-all transform hover:scale-110 bg-blue-400 hover:bg-blue-500 hover:text-white p-6 text-lg">Next Question</Button>}
              {activeQuestionIndex === mockInterviewQuestion?.length - 1 && 
              <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}><Button className="transition-all transform hover:scale-110 bg-red-500 hover:bg-red-500 hover:text-white p-6 text-lg">End Interview</Button>
              </Link>}

            </div>
          </div>


          <div className="md:col-span-1 flex justify-end items-start p-10">
            <RecordAnswerSection 
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}/>
          </div>
          
    
  </div>
  )
}

export default StartInterview