import React from "react";

function Home() {
  return (
    <>
      <div className="flex justify-around">
        <div className="w-[400px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <div className="p-8">
            <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold mb-4">
              Task List
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-gray-700">Complete project proposal</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700">Schedule team meeting</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700">Review client feedback</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[400px]  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <div className="p-8">
            <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold mb-4">
              Task List
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-gray-700">Complete project proposal</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700">Schedule team meeting</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700">Review client feedback</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[400px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <div className="p-8">
            <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold mb-4">
              Task List
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-gray-700">Complete project proposal</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700">Schedule team meeting</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700">Review client feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
