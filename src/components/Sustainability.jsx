// import Image from 'next/image';
// import React from 'react';

// export default function SustainabilitySection() {
//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <div className="grid grid-cols-12 gap-8 items-center">
          
//           {/* Left Side - SKEDARA Letters */}
//           <div className="col-span-12 lg:col-span-3 flex flex-col space-y-16">
//             {/* S - SYSTEM */}
//             <div className="flex flex-col items-center lg:items-start">
//               <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-6">
//                 <span className="text-3xl font-bold text-blue-900">S</span>
//               </div>
//               <div className="text-lg font-bold text-gray-900 tracking-wider">
//                 SYSTEM
//               </div>
//             </div>

//             {/* K - KNOWLEDGE */}
//             <div className="flex flex-col items-center lg:items-start">
//               <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-6">
//                 <span className="text-3xl font-bold text-blue-900">K</span>
//               </div>
//               <div className="text-lg font-bold text-gray-900 tracking-wider">
//                 KNOWLEDGE
//               </div>
//             </div>

//             {/* E - EXCELLENCE */}
//             <div className="flex flex-col items-center lg:items-start">
//               <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-6">
//                 <span className="text-3xl font-bold text-blue-900">E</span>
//               </div>
//               <div className="text-lg font-bold text-gray-900 tracking-wider">
//                 EXCELLENCE
//               </div>
//             </div>

//             {/* DARA - Large */}
//             <div className="flex flex-col items-center lg:items-start mt-8">
//               <div className="w-40 h-24 bg-gray-300 rounded-full flex items-center justify-center">
//                 <span className="text-5xl font-bold text-blue-900">DARA</span>
//               </div>
//             </div>
//           </div>

//           {/* Center Content */}
//           <div className="col-span-12 bg-[#f5f7fd] lg:col-span-5 px-8">
//             <div className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-6">
//               SUSTAINABILITY
//             </div>
//             <h1 className="text-5xl font-bold text-black leading-tight mb-8">
//               Shaping A Sustainable<br />Future Together.
//             </h1>
//             <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
//               At Skedara, sustainability is at the core of every service we deliver. Our green IT practices and ESG-aligned solutions empower clients to operate responsibly while building future-ready systems.
//             </p>
            
//             <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
//               Explore Sustainability Goals
//             </button>
         

//           {/* Right Side - Lightbulb */}
//             {/* Decorative curved arrow */}
//             <div className="absolute -top-12 right-12 hidden lg:block">
//               <svg width="120" height="80" viewBox="0 0 120 80" className="text-gray-400">
//                 <path 
//                   d="M20 40 Q60 15, 100 35" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   fill="none"
//                   strokeLinecap="round"
//                 />
//                 <path 
//                   d="M95 30 L100 35 L95 40" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   fill="none"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>

//             {/* Lightbulb */}
//             <div className="relative">
//               {/* Main bulb shape with nature image */}
//               <div className="w-64 h-80 relative">
//                 {/* Bulb glass part */}
//                 <Image height={400} width={400} className="size-96 rotate-50 mx-auto rounded-full overflow-hidden relative" 
//                     src='/images/sustainability.png'/>
//                 </div>

               
//               </div>
//              </div>
//           </div>

//         </div>

//         {/* Bottom right logo */}
//         <div className="fixed bottom-8 right-8">
//           <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
//             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//               <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

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