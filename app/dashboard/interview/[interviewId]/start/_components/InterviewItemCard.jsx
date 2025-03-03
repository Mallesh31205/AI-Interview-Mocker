import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
function InterviewItemCard({interview}) {
    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedback=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
    }
  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-sky-500'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-500'>{interview?.jobExperience} Years Of Experience</h2>
        <h2 className='text-xs text-gray-500'>Created At: {interview.createdAt}</h2>

        <div className='flex justify-between mt-3 gap-5'>
            <Button size="sm" onClick={onFeedback} variant="outline" className="w-full">Feedback</Button>
            <Button size="sm" onClick={onStart} className="w-full">Start</Button>


        </div>
    </div>
  )
}

export default InterviewItemCard