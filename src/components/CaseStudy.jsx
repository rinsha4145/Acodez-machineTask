import Image from 'next/image';
import React from 'react';

const CaseStudySection = () => {
  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-16 py-5 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-[60%] order-2 lg:order-1">
        {/* Background image */}
      <div className="relative w-3/5 h-[250px] sm:h-[300px] md:h-[200px] lg:h-[370px] "
     style={{
      
       background: "url('/images/union.jpg') center/cover no-repeat"
     }}>
  
 <div className="relative top-80 flex items-center gap-2">
  <span className="text-xs sm:text-sm font-medium text-gray-800">Explore Case Studies</span>
  <div className="bg-green-500 rounded-full w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
    →
  </div>
</div>
  
</div>

{/* Keep your existing Explore CTA */}

        {/* Uptime badge */}
        <div className="absolute top-[-5px] sm:top-[-10px] left-[35%] sm:left-[40%] bg-green-500 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full shadow-md z-10">
          <span className="block text-center">20%</span>
          <span className="block text-center text-xs">Down Time</span>
        </div>

        {/* Uptime Chart Card */}
        <div className="absolute top-[20px] sm:top-[30px] left-[55%] sm:left-[58%] bg-[#2d2d2d] text-white rounded-xl p-3 sm:p-4 w-[110px] sm:w-[130px] text-center shadow-lg z-10">
          <p className="text-xs sm:text-sm font-medium mb-1">99.9%</p>
          <p className="text-xs text-gray-300 mb-2">Uptime</p>
          <div className="flex justify-center gap-1">
            <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-blue-400 rounded-sm"></div>
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-sm"></div>
            <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-green-500 rounded-sm"></div>
            <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-gray-400 rounded-sm"></div>
          </div>
        </div>

        {/* Bottom Illustration */}
        <img
          src="/chart-overlay.png" // 🔁 Replace with your actual overlay image
          alt="Overlay"
          className="absolute bottom-[-40px] sm:bottom-[-60px] left-[10%] w-[70%] z-0 hidden sm:block"
        />

        {/* Explore CTA */}
        
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[45%] order-1 lg:order-2">
        <p className="text-[#4e84c2] text-xs sm:text-sm font-medium tracking-widest mb-2">CASE STUDY</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111827] leading-snug mb-4">
          Turning IT Challenges Into Growth Opportunities.
        </h2>
        <p className="text-[#6b7280] mb-6 text-sm sm:text-base leading-relaxed">
          Enabled 99.9% uptime for a global energy leader, reducing downtime by 20% through proactive monitoring and optimized workflows. Delivered end-to-end migration support for improved reliability and compliance readiness.
        </p>
        <button className="bg-[#002F6C] text-white font-medium px-4 sm:px-6 py-2 rounded-lg shadow-md hover:bg-[#001f4a] transition w-full sm:w-auto">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;