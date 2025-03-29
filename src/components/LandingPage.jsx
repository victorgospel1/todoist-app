import { useState, useEffect } from "react";

function LandingPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-10 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-5xl font-semibold mb-6 leading-tight">
          Unlock Your <span className="text-blue-400">Productivity</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          MTA is your ultimate tool for maximizing efficiency. Plan, organize,
          and execute your daily tasks seamlessly with our all-in-one solution.
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Whether you're managing{" "}
          <span className="text-blue-400 font-medium">projects</span>,{" "}
          <span className="text-green-400 font-medium">schedules</span>, or{" "}
          <span className="text-purple-400 font-medium">daily routines</span>,
          MTA empowers you to stay in control.
        </p>
        <button className="px-8 py-3 text-lg font-medium rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
