import Image from 'next/image';
import React from 'react';

const ServicesSection = () => {
  return (
    <div className='min-h-screen xl:h-screen'>
      <section className="min-h-screen xl:h-11/12 bg-[#f5f7fd] px-4 sm:px-6 md:px-16 flex flex-col lg:flex-row py-16 sm:py-24 lg:py-36 justify-between gap-8 lg:gap-40">
        {/* LEFT CONTENT */}
        <div className="max-w-full lg:max-w-m flex-shrink-0">
          <p className="text-[#1b76aa] text-lg md:text-2xl font-medium tracking-wider mb-2">OUR SERVICES</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug text-[#111827] mb-4">
            Transforming IT Operations <br />
            Into Engines Of Growth And<br/> 
            Innovation
          </h2>
         
          <p className="text-[#5F5F5F] text-base sm:text-lg mb-6">
            Skedara delivers energy IT excellence and<br className="hidden sm:block"/>tailored solutions, ensuring resilience and<br className="hidden sm:block"/>measurable outcomes
          </p>
          <button className="bg-[#002F6C] text-white font-medium px-6 py-2 rounded-2xl shadow-md hover:bg-[#001f4a] transition">
            Discover Our Services
          </button>
        </div>

        {/* RIGHT SIDE - IMAGE + CARDS */}
        <div className="relative top-9 w-full lg:w-[900px] flex-grow">
          {/* Background image */}
          <div className="relative">
            <Image 
              src="/images/solar.jpg" 
              alt="Solar panels" 
              width={900} 
              height={400}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[200px] rounded-2xl object-cover"
            />
          </div>

          {/* Cards container */}
          <div className="relative lg:absolute lg:top-80 lg:h-96 lg:left-0 lg:right-0 lg:transform lg:-translate-y-1/2 flex flex-col md:flex-row gap-4 px-0 md:px-4 lg:px-8 mt-8 lg:mt-0">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full md:w-1/2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Core Services: <br />
                Energy IT Operations
              </h3>
              <p className="text-[#234177] font-semibold text-sm sm:text-md mb-1">
                <span className='text-[#03BB4C]'>✦</span> Capabilities:
              </p>
              <p className="text-[#5F5F5F] text-base sm:text-lg mb-3">
                24/7 monitoring, incident management, trading reliability, SRE, and compliance.
              </p>
              <p className="text-[#234177] font-semibold text-sm sm:text-md mb-1">
                <span className='text-[#03BB4C]'>✦</span> Value Proposition:
              </p>
              <p className="text-[#5F5F5F] text-base sm:text-lg">
                Ensuring resilience and scalability for critical energy systems, empowering business growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full md:w-1/2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Beyond Energy: <br />
                Tailored Industry Solutions
              </h3>
              <p className="text-[#234177] font-semibold text-sm sm:text-md mb-1">
                <span className='text-[#03BB4C]'>✦</span> Capabilities:
              </p>
              <p className="text-[#5F5F5F] text-base sm:text-lg mb-3">
                Offering business consulting, IT strategy and custom development for compliance workflows
              </p>
              <p className="text-[#234177] font-semibold text-sm sm:text-md mb-1">
                <span className='text-[#03BB4C]'>✦</span> Value Proposition:
              </p>
              <p className="text-[#5F5F5F] text-base sm:text-lg">
                Skedara delivers tailored IT solutions for finance and logistics, ensuring excellence
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;