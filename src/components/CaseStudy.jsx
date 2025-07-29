import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CaseStudySection = () => {
  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-16 py-5 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
      
      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-[50%] order-2 lg:order-1">
        {/* Background Image */}
        <div 
          className="relative w-3/5 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] rounded-2xl overflow-hidden" 
          style={{
            background: "url('/images/union.jpg') center/cover no-repeat"
          }}
        />

        {/* Explore Case Studies Button */}
        <div className="absolute top-[280px] sm:top-[230px] md:top-[280px] lg:top-[350px] left-0 flex items-center gap-3">
          <span className="text-sm sm:text-base font-medium text-gray-700">
            Explore Case Studies
          </span>
          <div className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg transition-colors cursor-pointer">
            <ArrowRight size={18} />
          </div>
        </div>

        {/* Uptime Badge */}
        <div className="absolute top-[-10px] sm:top-[-15px] left-[58%] sm:left-[55%] bg-green-500 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg z-20">
          <div className="text-center">
            <div className="font-bold">20%</div>
            <div className="text-xs opacity-90">Down Time</div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="absolute top-[25px] sm:top-[20px] left-[52%] sm:left-[62%] bg-[#2d2d2d] text-white rounded-xl p-3 sm:p-4 w-[140px] h-[120px] sm:h-[140px] sm:w-[160px] text-center shadow-lg z-10">
          <p className="text-xs sm:text-sm font-medium mb-1">99.9%</p>
          <p className="text-xs text-gray-300 mb-2">Uptime</p>
          <div className="flex justify-center gap-1">
            <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-blue-400 rounded-sm"></div>
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-sm"></div>
            <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-green-500 rounded-sm"></div>
            <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-gray-400 rounded-sm"></div>
          </div>
        </div>

        {/* Illustration */}
        <img
          src="/images/illustration.png"
          alt="Tech Illustration"
          className="absolute bottom-[-40px] sm:bottom-[-120px] left-[40%] sm:left-[30%] w-[60%] sm:w-[65%] h-auto z-0 hidden sm:block"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[45%] order-1 lg:order-2">
        <p className="text-[#4e84c2] text-xs sm:text-lg font-medium tracking-widest mb-2">CASE STUDY</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111827] leading-snug mb-4">
          Turning IT Challenges Into Growth Opportunities.
        </h2>
        <p className="text-[#6b7280] mb-6 text-sm sm:text-xl leading-relaxed">
          Enabled 99.9% uptime for a global energy leader, reducing downtime by 20% through proactive<br/> monitoring and optimized workflows. Delivered end-to-end migration support for improved<br/> reliability and compliance readiness.
        </p>
        <button className="bg-[#002F6C] text-white font-medium px-4 sm:px-6 py-2 rounded-xl shadow-md hover:bg-[#001f4a] transition w-full sm:w-auto">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;
