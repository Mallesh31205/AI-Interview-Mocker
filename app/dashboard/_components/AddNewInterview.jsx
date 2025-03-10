"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { db } from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
    const [jobPosition,setJobPositon]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonResponse,setJsonResponse]=useState([]);
    const router=useRouter();
    const {user}=useUser();


    const onSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(jobPosition,jobDesc,jobExperience);

        const InputPrompt="Job Position:"+jobPosition+"Job Description:"+jobDesc+"Years OF Experience:"+jobExperience+" based on this give me "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+"interview questions with answers give questions with answers in JSON format";
        const result=await chatSession.sendMessage(InputPrompt);
        const MockJsonResp=(result.response.text()).replace('```json','').replace('```','');
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);

        if(result){
        const resp=await db.insert(MockInterview)
        .values({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResp,
            jobPosition:jobPosition,
            jobDesc:jobDesc,
            jobExperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-YYYY')
        }).returning({mockId:MockInterview.mockId});
        console.log("Inserted Id:",resp)
        if(resp){
            setOpenDailog(false);
            router.push('/dashboard/interview/'+resp[0]?.mockId)
        }
    }
    else{
        console.log("Error");
    }
        setLoading(false);
    }
    
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={()=>setOpenDailog(true)}>
            <h2 className='font-bold text-lg text-center'>+ Add New</h2>

        </div>



        <Dialog open={openDailog} >
        <DialogContent className="max-w-xl">
            <DialogHeader>
            <DialogTitle className="text-2xl"> Tell us more about your job interviwing</DialogTitle>
            <DialogDescription>
                <form onSubmit={onSubmit}>
                <div>
                    <h2 className='font-bold text-2xl'></h2>
                    <h2>Add Details about your job position/role,job descriptiion and years of experience</h2>
                    <div className='font-bold text-xl  my-3'>
                        <label >Job Role/Job Position</label><br />
                        <input className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-md' placeholder='Ex: Full Stack Developer' required
                        onChange={(event)=>setJobPositon(event.target.value)}
                        />
                    </div>
                    <div className='font-bold text-2xl my-3'>
                        <label>Job Description/Tech Stack (In Short)</label><br />
                        <Textarea className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-md' placeholder='Ex: React,Angular,NodeJs,MySql etc' required
                        onChange={(event)=>setJobDesc(event.target.value)}
                        />
                    </div>
                    <div className='font-bold text-2xl my-3'>
                        <label>Years Of Experience</label><br />
                        <input className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-599' placeholder='Ex: 3' type='number' max="32" required
                        onChange={(event)=>setJobExperience(event.target.value)}
                        />
                    </div>
                </div>
                <div className='flex gap-5 justify-end'>
                    <Button className="font-bold text-xl" type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
                    <Button type="Submit" disabled={loading}>
                        {loading?
                        <>
                        <LoaderCircle className='animate-spin' />'Generating from AI'
                        </>:'Start Interview'
                        }
                        </Button>
                </div>
                </form>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>


    </div>
  )
}

export default AddNewInterview