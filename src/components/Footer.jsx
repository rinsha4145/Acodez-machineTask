// import React from 'react';
// import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
// import Image from 'next/image';

// export default function SkedaraFooter() {
//   return (
//     <footer className="bg-blue-900 relative overflow-hidden">
//       {/* Top curved section */}
//       <div className="absolute top-0 left-0 w-full h-24 bg-gray-50">
//         {/* <svg
//           viewBox="0 0 1440 100"
//           className="absolute bottom-0 w-full h-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0 C480,80 960,80 1440,0 L1440,100 L0,100 Z"
//             fill="#1e3a8a"
//           />
//         </svg> */}
//        {/* <svg width="1436" height="454" viewBox="0 0 1436 454" fill="#1e3a8a" xmlns="http://www.w3.org/2000/svg">
// <path d="M1435 18.5 Q1400 15 1350 10 Q1300 5 1250 2 Q1200 1 1150 3 Q1100 5 1050 10 Q1000 15 950 25 Q900 35 850 45 Q800 50 750 60 Q700 65 650 70 Q600 75 550 80 Q500 85 450 90 Q400 92 350 95 Q300 100 250 105 Q200 110 150 115 Q100 120 50 125 L1 128 L0.5 453.5 H1435 Z" stroke="none"/>
// </svg> */}
// <svg width="1440" height="454" viewBox="0 0 1436 454" fill="#1e3a8a" xmlns="http://www.w3.org/2000/svg">
//   <path d="M1470 18.5 C1300 15 1100 8 900 35 C700 62 500 85 200 100 L0 150 L0 453.5 H1435 Z" stroke="none"/>
// </svg>

//       </div>

//       <div className="relative pt-32 pb-16 px-8">
//         <div className="container mx-auto max-w-7xl">

//           {/* Top section with logo and ISO text */}
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">

//              <div className="absolute right-0 top-10 hidden md:block">
//         <svg width="120" height="400" viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <g transform="scale(1.2)">
//             <polygon points="60,0 90,50 30,50" fill="#002F6C" />
//             <polygon points="90,50 120,100 60,100" fill="#1597d6" />
//             <polygon points="60,100 90,150 30,150" fill="#a3bac8" />
//             <polygon points="90,150 120,200 60,200" fill="#405c6b" />
//             <polygon points="60,200 90,250 30,250" fill="#f0f4f7" />
//             <polygon points="90,250 120,300 60,300" fill="#003865" />
//             <polygon points="60,300 90,350 30,350" fill="#7a97a6" />
//             <polygon points="90,350 120,400 60,400" fill="#4c6a83" />
//           </g>
//         </svg>
//       </div>

//             {/* Right side - Logo and ISO text */}
//             <div className="text-right">
//               {/* Skedara logo */}
//              <Image
//                 src="/images/logo.svg" // 🔁 Replace with your logo path
//                 alt="Skedara Logo"
//                 width={150}
//                 height={50}
//                 className="mb-4"
//               />

//               {/* ISO text */}
//               <p className="text-blue-200 text-lg leading-relaxed max-w-md">
//                 On track to achieve ISO 27001, ISO 14001,<br />
//                 and SOC 2 for operational excellence.
//               </p>
//             </div>
//           </div>

//           {/* Navigation and Social Links */}
//           <div className="flex flex-col lg:flex-row justify-between items-center pt-12 border-t border-blue-800">

//             {/* Navigation Links */}
//             <nav className="flex flex-wrap justify-center lg:justify-start space-x-8 mb-8 lg:mb-0">
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
//                 SERVICES
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
//                 CASE STUDIES
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
//                 BLOG
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
//                 ABOUT
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
//                 SUSTAINABILITY
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
//                 CONTACT
//               </a>
//             </nav>

//             {/* Social Icons */}
//             <div className="flex space-x-6">
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200">
//                 <Linkedin className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200">
//                 <Twitter className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200">
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-200">
//                 <Instagram className="w-6 h-6" />
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import React from 'react';
// import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

// const SkedaraFooter = () => {
//   return (
//     <div className="relative w-full h-96 bg-gradient-to-br overflow-hidden">
//       {/* Wave background */}
//       <div className="absolute inset-0">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 1436 454"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute top-0 left-0 w-full h-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M1435 18.5 C1300 12 1100 8 900 35 C700 62 500 85 200 100 L0 150 L0 453.5 H1435 Z"
//             fill="#1e3a8a"
//           />
//         </svg>
//       </div>

//       {/* Geometric triangular shapes on the left */}

//       {/* Main content container */}
//       <div className=" z-10 flex flex-col h-full">
//         {/* Top section with logo and certification text */}
//         <div className="flex justify-between items-start pt-8 px-12">
//           <div className="flex-1"></div>

//           <div className="text-right">
//             {/* Skedara logo */}
//             <div className="flex items-center justify-end mb-4">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-cyan-400 rounded transform rotate-45"></div>
//                 <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
//                 <span className="text-white text-2xl font-bold">Skedara</span>
//               </div>
//             </div>

//             {/* Certification text */}
//             <p className="text-blue-200 text-sm max-w-md">
//               On track to achieve ISO 27001, ISO 14001,<br />
//               and SOC 2 for operational excellence.
//             </p>
//           </div>
//         </div>

//         {/* Navigation menu */}
//         <div className="flex-1 flex items-center justify-center">
//           <nav className="flex space-x-12">
//             <a href="#" className="text-white hover:text-cyan-300 font-medium border-b border-transparent hover:border-cyan-300 pb-1 transition-colors">
//               SERVICES
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 font-medium border-b border-transparent hover:border-cyan-300 pb-1 transition-colors">
//               CASE STUDIES
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 font-medium border-b border-transparent hover:border-cyan-300 pb-1 transition-colors">
//               BLOG
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 font-medium border-b border-transparent hover:border-cyan-300 pb-1 transition-colors">
//               ABOUT
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 font-medium border-b border-transparent hover:border-cyan-300 pb-1 transition-colors">
//               SUSTAINABILITY
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 font-medium border-b border-transparent hover:border-cyan-300 pb-1 transition-colors">
//               CONTACT
//             </a>
//           </nav>
//         </div>

//         {/* Bottom section with social icons */}
//         <div className="pb-8 px-12">
//           <div className="flex justify-end space-x-6">
//             <a href="#" className="text-white hover:text-cyan-300 transition-colors">
//               <Linkedin size={24} />
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 transition-colors">
//               <Twitter size={24} />
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 transition-colors">
//               <Facebook size={24} />
//             </a>
//             <a href="#" className="text-white hover:text-cyan-300 transition-colors">
//               <Instagram size={24} />
//             </a>

//             {/* Language selector */}
//             <div className="ml-8 bg-white rounded-full w-10 h-10 flex items-center justify-center">
//               <span className="text-xs font-bold text-blue-900">EN</span>
//             </div>
//           </div>
//         </div>
//       </div>
//         <div className="absolute left-0 bottom-0 w-96 h-full">

//        <svg width="525" height="131" viewBox="0 0 525 131" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M75 87L0 130.301L0 43.6987L75 87Z" fill="#0167A2"/>
// <path d="M300 44L225 87.3013V0.69873L300 44Z" fill="#B6CACE"/>
// <path d="M375 87L300 130.301V43.6987L375 87Z" fill="#0167A2"/>
// <path d="M450 44L375 87.3013V0.69873L450 44Z" fill="#B6CACE"/>
// <path d="M525 87L450 130.301V43.6987L525 87Z" fill="#6D827C"/>
// <path d="M75 87L150 43.6987V130.301L75 87Z" fill="#0167A2"/>
// <path d="M225 87L300 43.6987V130.301L225 87Z" fill="#6D827C"/>
// <path d="M150 44L225 0.69873V87.3013L150 44Z" fill="#0167A2"/>
// <path d="M150 130.301H75V87L150 130.301Z" fill="#B6CACE"/>
// <path d="M300 130.301H225V87L300 130.301Z" fill="#01ADED"/>
// <path d="M450 130.301H375V87L450 130.301Z" fill="#0167A2"/>
// </svg>

//       </div>
//     </div>
//   );
// };

// export default SkedaraFooter;

import React from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const SkedaraFooter = () => {
  return (
   <div className="relative w-full h-96 overflow-hidden">
  {/* Background split layer */}
  <div className="absolute inset-0 flex z-0">
    <div className="w-1/4 bg-white"></div>
    <div className="w-3/4 bg-[#f5f7fd]"></div>
  </div>

  {/* Foreground content layer */}
  <div className="relative z-10">
      {/* Wave background */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1436 454"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M1435 18.5 C1300 12 1100 8 900 35 C700 62 500 85 200 100 L0 150 L0 453.5 H1435 Z"
            fill="#1e3a8a"
          />
        </svg>
      </div>

      {/* Geometric triangular shapes on the left bottom */}
     

      {/* Main content container */}
      <div className="relative z-10 flex flex-col space-y-10 h-full px-12 py-8">
        {/* Top right - Logo and certification */}
        <div className="flex justify-end">
          <div className="text-right">
            {/* Skedara logo */}
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={350}
              height={350}
              className="w-auto size-10 sm:h-16 lg:h-15"
            />

            {/* Certification text */}
          
          </div>
        </div>
  <p className="text-[#D5D0CC] text-lg flex justify-end leading-relaxed">
              On track to achieve ISO 27001, ISO 14001,
              <br />
              and SOC 2 for operational excellence.
            </p>
        {/* Center - Navigation menu */}
        <div className="flex justify-end">
          <nav className="flex space-x-10 border-b border-white">
            <a
              href="#"
              className="text-white hover:text-cyan-300  text-md tracking-wide border-b-2 border-transparent hover:border-cyan-300 pb-2 transition-all duration-300"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  text-md tracking-wide border-b-2 border-transparent hover:border-cyan-300 pb-2 transition-all duration-300"
            >
              CASE STUDIES
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  text-md tracking-wide border-b-2 border-transparent hover:border-cyan-300 pb-2 transition-all duration-300"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  text-md tracking-wide border-b-2 border-transparent hover:border-cyan-300 pb-2 transition-all duration-300"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  text-md tracking-wide border-b-2 border-transparent hover:border-cyan-300 pb-2 transition-all duration-300"
            >
              SUSTAINABILITY
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  text-md tracking-wide border-b-2 border-transparent hover:border-cyan-300 pb-2 transition-all duration-300"
            >
              CONTACT
            </a>
          </nav>
        </div>

        {/* Bottom right - Social icons */}
        <div className="flex justify-end ">
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-cyan-300  hover:scale-110 "
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  hover:scale-110 "
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  hover:scale-110 "
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-cyan-300  hover:scale-110 "
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
       <div className="absolute left-0 bottom-0 w-80 h-40">
        {/* Base large triangle */}
        <svg
          width="525"
          height="131"
          viewBox="0 0 525 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M75 87L0 130.301L0 43.6987L75 87Z" fill="#0167A2" />
          <path d="M300 44L225 87.3013V0.69873L300 44Z" fill="#B6CACE" />
          <path d="M375 87L300 130.301V43.6987L375 87Z" fill="#0167A2" />
          <path d="M450 44L375 87.3013V0.69873L450 44Z" fill="#B6CACE" />
          <path d="M525 87L450 130.301V43.6987L525 87Z" fill="#6D827C" />
          <path d="M75 87L150 43.6987V130.301L75 87Z" fill="#0167A2" />
          <path d="M225 87L300 43.6987V130.301L225 87Z" fill="#6D827C" />
          <path d="M150 44L225 0.69873V87.3013L150 44Z" fill="#0167A2" />
          <path d="M150 130.301H75V87L150 130.301Z" fill="#B6CACE" />
          <path d="M300 130.301H225V87L300 130.301Z" fill="#01ADED" />
          <path d="M450 130.301H375V87L450 130.301Z" fill="#0167A2" />
        </svg>
      </div>
    </div>
    </div>
  );
};

export default SkedaraFooter;
