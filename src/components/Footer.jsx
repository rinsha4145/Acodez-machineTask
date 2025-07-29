

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
