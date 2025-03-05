"use client"
import React from 'react'

function UpgradePage() {
  return (
    <div className="flex flex-col items-center justify-start h-screen p-16">
      <h2 className="text-3xl font-bold leading-tight mt-0">Upgrade</h2>  {/* Removed top margin */}
      <p className="text-gray-600 mt-0 mb-2">  {/* Removed top margin */}
        Upgrade to a monthly plan to access unlimited mock interviews
      </p>

      <div className="flex flex-wrap gap-4 mt-1 border">  {/* Reduced top margin */}
        {/* Free Plan */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center border border-blue-400">
          <h3 className="text-2xl font-semibold">Free</h3>
          <p className="text-4xl font-bold my-3">0$<span className="text-lg">/month</span></p>
          <ul className="text-gray-600 space-y-1">  {/* Reduced line spacing */}
            <li>✅ Create 3 Free Mock Interviews</li>
            <li>✅ Unlimited Retake Interview</li>
            <li>❌ Practice Question</li>
            <li>❌ Mallesh's.Com Exclusive App Access</li>
            <li>❌ Email Support</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
            Get Started
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center border border-blue-500">
          <h3 className="text-2xl font-semibold">Monthly</h3>
          <p className="text-4xl font-bold my-3">7.99$<span className="text-lg">/month</span></p>
          <ul className="text-gray-600 space-y-1">  {/* Reduced line spacing */}
            <li>✅ Create 3 Free Mock Interviews</li>
            <li>✅ Unlimited Retake Interview</li>
            <li>✅ Practice Question</li>
            <li>✅ Mallesh's.Com Exclusive App Access</li>
            <li>✅ Email Support</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;
