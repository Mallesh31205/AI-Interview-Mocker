"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import React, { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router=useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);
    setFeedbackList(result); // Remove the array wrapper
  };

  return (
    <div className="p-10">
      

      {feedbackList?.length===0 ? (
          <h2 className="font-bold text-xl text-gray-500">No Interview Feedback Record Found</h2>)
        :(
      <>
      <h2 className="text-3xl font-bold text-green-500">Congratulations!</h2>
      <h2 className="font-bold text-2xl my-1">Here Is Your Interview Feedback</h2>
      <h2 className="text-blue-600 font-medium text-lg my-3">
        Your Overall interview rating: <strong></strong>
      </h2>
      <h2 className="text-sm text-gray-700">
        Find below interview questions with correct answers, your answers, and
        feedback for improvement.
      </h2>
      {feedbackList &&
        feedbackList.map((item, index) => (
          <Collapsible key={item.id}>
            <CollapsibleTrigger className="p-2 bg-secondary flex justify-between rounded-lg my-2 text-left">
              Question: {item.question} <ChevronsUpDown className="h-12 w-14 text-blue-500 hover:text-red-500" />

            </CollapsibleTrigger>
            <CollapsibleContent className="mt-7">
              <div className="flex flex-col gap-3">
                    <h2 className="text-black p-2 rounded-lg border bg-teal-100"><strong>Rating:</strong> <br />{item.rating}</h2>

                    <h2 className="p-2 border rounded-lg bg-pink-100 text-sm text-black"><strong>Your Answer:</strong><br />{item.userAns}</h2>

                    <h2 className="text-black p-2 rounded-lg border bg-green-200"><strong >Correct Answer:</strong> <br />{item.correctAns}</h2>

                    <h2 className="text-black p-2 rounded-lg border bg-blue-200"><strong >Feedback:</strong><br />{item.feeedback}</h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
        </>)}
        <Button onClick={()=>router.replace('/dashboard')} className='mt-8 bg-blue-500 w-32 h-11'>Go Home</Button>
    </div>
  )
};

export default Feedback;
