import React from 'react';
import { cn } from "@/lib/utils/Grid";
import Image from 'next/image';
// import './Shape.css';
export default function Hero() {
  return (
    <div className="relative flex h-screen w-full  overflow-hidden">
      {/* Hero Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Energy Infrastructure"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
         <div className="relative z-20 max-w-6xl  px-6 lg:px-10 py-16 lg:py-24 flex flex-col items-start space-y-8  ">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Global Experts in{' '}
            <span className="text-green-400">Energy</span>{' '}
            IT Operations | Driving Stability, Scalability, and{' '}
            <span className="text-green-400">Sustainability</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            From energy trading system reliability to renewable integration, Skedara 
            transforms IT operations into engines of growth with sustainable and 
            innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Discover Our Services
            </button>
            <button className="border-2 border-gray-300 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Explore Case Studies
            </button>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-[#0C2A67] opacity-80 shape1" > */}

      {/* </div> */}
      {/* <div className="absolute inset-0 bg-[#1E3A8A] opacity-80 shape2" /> */}
      {/* <div className="absolute inset-0 bg-[#1D4ED8] opacity-80 shape3" /> */}
      {/* <div className="absolute inset-0 bg-[#2563EB] opacity-80 shape4" /> */}
      {/* <div className="absolute  inset-0 bg-[#3B82F6] opacity-80 shape5" /> */}
      {/* <div className="absolute  inset-0 bg-[#60A5FA] opacity-80 shape6" /> */}
      {/* <div className="absolute  inset-0 bg-[#93C5FD] opacity-80 shape7" /> */}
    

      {/* Hero Content */}
     

      {/* Decorative Arrow Elements - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center space-x-2">
        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-r-[25px] border-r-blue-600 border-b-[15px] border-b-transparent"></div>
        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-r-[20px] border-r-cyan-400 border-b-[12px] border-b-transparent"></div>
      </div>

      {/* Bottom Curved Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full z-30"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M0,120L48,130C96,140,192,160,288,155C384,150,480,120,576,120C672,120,768,150,864,150C960,150,1056,120,1152,115C1248,110,1344,130,1392,140L1440,150L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
        />
      </svg>

      {/* Subtle Grid Pattern */}
      <div
        className={cn(
          "absolute opacity-5 inset-0 z-10",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#ffffff_0.5px,transparent_0.5px),linear-gradient(to_bottom,#ffffff_0.5px,transparent_0.5px)]",
        )}
      />
    </div>
      
  );
}