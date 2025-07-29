

import Image from 'next/image';
import React from 'react';

export default function SustainabilitySection() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left Div - SKEDARA Letters */}
      <div className="flex w-[25%] items-center pl-10">
        <div className="flex flex-col space-y-12">
          {/* S - SYSTEM */}
          <div className="flex flex-col items-center">
            <div className="size-25 bg-gray-300 rounded-full flex items-center justify-center mb-3">
              <span className="text-6xl font-bold text-blue-900">S</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 tracking-wider text-center">
              SYSTEM
            </div>
          </div>

          {/* K - KNOWLEDGE */}
          <div className="flex flex-col items-center">
            <div className="size-25 bg-gray-300 rounded-full flex items-center justify-center mb-3">
              <span className="text-6xl font-bold text-blue-900">K</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 tracking-wider text-center">
              KNOWLEDGE
            </div>
          </div>

          {/* E - EXCELLENCE */}
          <div className="flex flex-col items-center">
            <div className="size-25 bg-gray-300 rounded-full flex items-center justify-center mb-3">
              <span className="text-6xl font-bold text-blue-900">E</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 tracking-wider text-center">
              EXCELLENCE
            </div>
          </div>

          {/* DARA - Large */}
           <div className="flex flex-col items-center">
            <div className="size-25 bg-gray-300 rounded-full flex items-center justify-center mb-3">
              <span className="pl-36 relative text-6xl font-bold text-blue-900">DARA</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 tracking-wider text-center">
              STREAM
            </div>
          </div>
         
        </div>
      </div>

      {/* Right Div - Content and Image */}
      <div className=" w-[75%] min-h-screen bg-[#f5f7fd] flex flex-col pl-32 py-10 relative">
        {/* Content Section */}
        <div className="max-w-2xl mb-12">
           <div className="text-[#1b76aa] text-lg md:text-2xl font-medium tracking-wider mb-2">
            SUSTAINABILITY
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Shaping A Sustainable<br />Future Together.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            At Skedara, sustainability is at the core of every service we deliver. Our green IT practices and ESG-aligned solutions empower clients to operate responsibly while building future-ready systems.
          </p>
          
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
            Explore Sustainability Goals
          </button>
          
          <div className="">
          <div className="absolute top-1/6 right-1/2 transform translate-x-32 -translate-y-16">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-gray-400">
            <path 
              d="M20 40 Q60 15, 100 35" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
            <path 
              d="M95 30 L100 35 L95 40" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
         <div className="absolute top-2/6 right-1/6 hidden lg:block">
           <Image 
              height={500}
              width={500}
                src="/images/sustainability.png" 
                alt="Sustainability lightbulb with nature scene" 
                className="size-96 object-contain rotate-40"
              />
              </div>
        </div>
        </div>

      
        
      </div>
    </div>
  );
}