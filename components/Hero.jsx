/* eslint-disable */

import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlinePlayCircle, AiOutlineStar } from "react-icons/ai";

export default () => {
  const features = [
    {
      name: "High-Quality Signals",
      icon: <AiOutlineCheckCircle className="w-5 h-5 text-green-500" />,
    },
    {
      name: "Comprehensive Education",
      icon: <AiOutlinePlayCircle className="w-5 h-5 text-blue-500" />,
    },
    {
      name: "Top-Rated Traders",
      icon: <AiOutlineStar className="w-5 h-5 text-yellow-500" />,
    },
  ];

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-2 text-gray-500 text-sm">
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Trade Forex with Confidence
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0">
            Learn the art of forex trading and gain access to high-quality trading signals. Join our community and start your forex journey today!
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex">
              Browse Courses
            </a>
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
              Get Access
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
            <button
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
              onClick={() => setVideoPopUp(true)}
            >
              <AiOutlinePlayCircle className="w-6 h-6 m-auto" />
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => setVideoPopUp(false)}
            >
              <AiOutlinePlayCircle className="w-5 h-5 m-auto" />
            </button>
            <video className="rounded-lg w-full max-w-2xl" controls autoPlay={true}>
              <source src="https://res.cloudinary.com/floatui/video/upload/v1669411003/Binary_Search_Algorithm_in_100_Seconds_hyg6n5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
