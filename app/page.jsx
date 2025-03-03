import React from "react";
import Link from "next/link";

const PracticeInterview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gray-300 h-64 w-full flex justify-center items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-20 h-12 border-4 border-gray-700 flex items-center rounded-lg justify-center">
            <div className="w-2 h-5 border-t-[10px] bg-gray-300 border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-x-gray-700"></div>
          </div>
          <h2 className="font-bold text-2xl text-gray-800">Practice Interview</h2>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center relative w-full h-[calc(100vh-16rem)]">
          <img
            src="ii.png"
            alt="Interview Practice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Practice your interview skills virtually at home and secure your next job.
            </h1>
            <p className="text-white text-lg md:text-xl mb-4">
              We've teamed up with interview experts and recruiters so you can practise your interviewing skills. 
            </p>
            <p className="text-white text-lg md:text-xl mb-6">
              Completely secure, FREE and easy to use.
            </p>
            <Link href={'/sign-in'}>
            <button className="bg-white text-gray-700 text-lg md:text-xl font-bold py-3 px-6 rounded-full">
                        Get started
            </button>
            </Link>

            
          </div>
        </div>
      </main>
    </div>
  );
};

export default PracticeInterview;
