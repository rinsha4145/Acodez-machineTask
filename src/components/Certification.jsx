// import React from 'react';

// const CertificationsSection = () => {
//   return (
//     <section className="relative bg-white px-6 md:px-16 py-16 overflow-hidden">
//       {/* Top Text */}
//       <div className="mb-10">
//         <p className="text-[#4e84c2] text-sm font-medium tracking-widest mb-2">CERTIFICATIONS</p>
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#111827]">
//           Building Trust With Industry Standards.
//         </h2>
//       </div>

//       {/* Certifications Grid */}
//       <div className="relative grid md:grid-cols-2 gap-10 items-center">
//         {/* First Cert Row */}
//         <div className="flex items-center gap-6">
//           <img
//             src="/images/iso14001.webp" // 🔁 Replace with your ISO 14001 badge
//             alt="ISO 14001"
//             className="w-[100px]"
//           />
//           <div className="bg-[#f9fafb] p-6 rounded-xl shadow-md w-full">
//             <p className="text-[#002f6c] font-semibold mb-1">ISO 14001:</p>
//             <p className="text-[#002f6c] text-sm leading-relaxed">
//               Committed To Net Zero Emissions By 2025, Reflecting Our Dedication To Sustainable Practices.
//             </p>
//           </div>
//         </div>

//         {/* Second Cert Row */}
//         <div className="flex items-center gap-6">
//           <div className="bg-[#f9fafb] p-6 rounded-xl shadow-md w-full text-right">
//             <p className="text-[#002f6c] font-semibold mb-1">ISO 27001:</p>
//             <p className="text-[#002f6c] text-sm leading-relaxed">
//               Strengthening Secure IT Operations For Energy And Finance Clients.
//             </p>
//           </div>
//           <img
//             src="images/iso27001.png" // 🔁 Replace with your ISO 27001 badge
//             alt="ISO 27001"
//             className="w-[100px]"
//           />
//         </div>
//       </div>

//       {/* Button */}
//       <div className="mt-12 text-center">
//         <button className="bg-[#002F6C] hover:bg-[#001f4a] text-white font-medium px-6 py-2 rounded-lg shadow-md transition">
//           Learn Certificates
//         </button>
//       </div>

//       {/* Right-Side Triangle Pattern */}
//       <div className="absolute right-0 top-10 hidden md:block">
//         <svg width="237" height="624" viewBox="0 0 237 624" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M129 0L172.301 75H85.6987L129 0Z" fill="#6D827C"/>
// <path d="M187 475L230.301 550H143.699L187 475Z" fill="#B6CACE"/>
// <path d="M130 150L173.301 225H86.6987L130 150Z" fill="#C2E6F2"/>
// <path d="M87 225L130.301 300H43.6987L87 225Z" fill="#B6CACE"/>
// <path d="M172 75L215.301 150H128.699L172 75Z" fill="#0C2A67"/>
// <path d="M86 75L42.6987 0H129.301L86 75Z" fill="#0C2A67"/>
// <path d="M173 225L129.699 150H216.301L173 225Z" fill="#0167A2"/>
// <path d="M87 225L43.6987 150H130.301L87 225Z" fill="#0C2A67"/>
// <path d="M130 300L86.6987 225H173.301L130 300Z" fill="#6D827C"/>
// <path d="M87 375L43.6987 300H130.301L87 375Z" fill="#0167A2"/>
// <path d="M86.9995 375L43.6982 300H130.301L86.9995 375Z" fill="#0C2A67"/>
// <path d="M87 525L43.6987 450H130.301L87 525Z" fill="#B6CACE"/>
// <path d="M100 624L56.6987 549H143.301L100 624Z" fill="#F0F0F0"/>
// <path d="M130 450L86.6987 375H173.301L130 450Z" fill="#B6CACE"/>
// <path d="M173 225L129.699 150H216.301L173 225Z" fill="#B6CACE"/>
// <path d="M129 150L85.6987 75H172.301L129 150Z" fill="#01ADED"/>
// <path d="M130.209 150.908L43.6064 150.908L86.9077 75.9077L130.209 150.908Z" fill="#B6CACE"/>
// <path d="M43.8145 150.815L87.1157 75.8154H0.513184L43.8145 150.815Z" fill="#B6CACE"/>
// <path d="M171.645 75.3505L236.597 112.851L214.946 150.35L171.645 75.3505Z" fill="#C2E6F2"/>
// </svg>

//       </div>
//     </section>
//   );
// };

// export default CertificationsSection;
// import React from 'react';

// const CertificationsSection = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen p-8 relative overflow-hidden">
//       {/* Geometric pattern on the right */}
//       <div className="absolute right-0 top-0 h-full w-96 flex flex-col justify-center">
//         <div className="flex flex-col space-y-1">
//           {/* Top row of triangles */}
//           <div className="flex justify-end space-x-1">
//             <div className="w-16 h-14 bg-blue-900 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//             <div className="w-16 h-14 bg-gray-400 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//           </div>

//           {/* Second row */}
//           <div className="flex justify-end space-x-1">
//             <div className="w-16 h-14 bg-gray-300 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//             <div className="w-16 h-14 bg-blue-500 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//             <div className="w-16 h-14 bg-blue-900 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//           </div>

//           {/* Third row */}
//           <div className="flex justify-end space-x-1">
//             <div className="w-16 h-14 bg-blue-900 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//             <div className="w-16 h-14 bg-gray-400 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//           </div>

//           {/* Fourth row */}
//           <div className="flex justify-end space-x-1">
//             <div className="w-16 h-14 bg-gray-300 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//           </div>

//           {/* Fifth row */}
//           <div className="flex justify-end space-x-1">
//             <div className="w-16 h-14 bg-gray-400 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//             <div className="w-16 h-14 bg-gray-300 transform rotate-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="mb-16">
//           <h3 className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
//             CERTIFICATIONS
//           </h3>
//           <h1 className="text-4xl font-bold text-gray-900 leading-tight">
//             Building Trust With Industry<br />
//             Standards.
//           </h1>
//         </div>

//         {/* Certifications Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* ISO 14001 */}
//           <div className="flex items-start space-x-8">
//             <div className="flex-shrink-0">
//               <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-xs text-white font-semibold">CERTIFIED</div>
//                   <div className="text-white font-bold text-lg">ISO</div>
//                   <div className="text-white font-bold text-lg">14001</div>
//                   <div className="text-xs text-white">★★★★★</div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold text-blue-900 mb-4">ISO 14001:</h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Committed To Net Zero Emissions By 2025,<br />
//                 Reflecting Our Dedication To<br />
//                 Sustainable Practices.
//               </p>
//             </div>
//           </div>

//           {/* ISO 27001 */}
//           <div className="flex items-start space-x-8 lg:flex-row-reverse">
//             <div className="flex-shrink-0">
//               <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-xs text-white font-semibold">CERTIFIED</div>
//                   <div className="text-white font-bold text-lg">ISO</div>
//                   <div className="text-white font-bold text-lg">27001</div>
//                   <div className="text-xs text-white">★★★★★</div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 lg:text-right">
//               <h2 className="text-2xl font-bold text-blue-900 mb-4">ISO 27001:</h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Strengthening Secure IT Operations For Energy And<br />
//                 Finance Clients.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Learn Certificates Button */}
//         <div className="text-center mt-16">
//           <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
//             Learn Certificates
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificationsSection;
import Image from "next/image";
import React from "react";

const CertificationsSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Right side geometric pattern */}
      <div className="absolute right-0 top-0 w-64 h-full hidden md:block">
        <div className="absolute right-24 top-20 w-32 h-96">
          <svg
            width="237"
            height="624"
            viewBox="0 0 237 624"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG paths unchanged */}
            <path d="M129 0L172.301 75H85.6987L129 0Z" fill="#6D827C" />
            <path d="M187 475L230.301 550H143.699L187 475Z" fill="#B6CACE" />
            <path d="M130 150L173.301 225H86.6987L130 150Z" fill="#C2E6F2" />
            <path d="M87 225L130.301 300H43.6987L87 225Z" fill="#B6CACE" />
            <path d="M172 75L215.301 150H128.699L172 75Z" fill="#0C2A67" />
            <path d="M86 75L42.6987 0H129.301L86 75Z" fill="#0C2A67" />
            <path d="M173 225L129.699 150H216.301L173 225Z" fill="#0167A2" />
            <path d="M87 225L43.6987 150H130.301L87 225Z" fill="#0C2A67" />
            <path d="M130 300L86.6987 225H173.301L130 300Z" fill="#6D827C" />
            <path d="M87 375L43.6987 300H130.301L87 375Z" fill="#0167A2" />
            <path d="M86.9995 375L43.6982 300H130.301L86.9995 375Z" fill="#0C2A67" />
            <path d="M87 525L43.6987 450H130.301L87 525Z" fill="#B6CACE" />
            <path d="M100 624L56.6987 549H143.301L100 624Z" fill="#F0F0F0" />
            <path d="M130 450L86.6987 375H173.301L130 450Z" fill="#B6CACE" />
            <path d="M173 225L129.699 150H216.301L173 225Z" fill="#B6CACE" />
            <path d="M129 150L85.6987 75H172.301L129 150Z" fill="#01ADED" />
            <path d="M130.209 150.908L43.6064 150.908L86.9077 75.9077L130.209 150.908Z" fill="#B6CACE" />
            <path d="M43.8145 150.815L87.1157 75.8154H0.513184L43.8145 150.815Z" fill="#B6CACE" />
            <path d="M171.645 75.3505L236.597 112.851L214.946 150.35L171.645 75.3505Z" fill="#C2E6F2" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto px-6 md:px-10 py-16">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-[#1b76aa] text-xl md:text-2xl tracking-wide uppercase mb-4">
            CERTIFICATIONS
          </p>
          <h1 className="text-xl md:text-4xl text-gray-900 leading-tight">
            Building Trust With Industry
            <br />
            Standards.
          </h1>
        </div>

        {/* ISO 14001 Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 mb-24">
          {/* ISO 14001 Badge */}
          <div className="flex-shrink-0">
            <Image
              src="/images/iso14001.webp"
              alt="ISO 14001"
              width={100}
              height={100}
              className="w-32 h-32"
            />
          </div>

          {/* ISO 14001 Content */}
          <div className="w-full md:w-1/2 pt-8 shadow-lg rounded-lg p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              ISO 14001:
            </h2>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              Committed To Net Zero Emissions By 2025,
              <br />
              Reflecting Our Dedication To
              <br />
              Sustainable Practices.
            </p>
          </div>
        </div>

        {/* ISO 27001 Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-8 md:gap-12 mb-16">
          {/* ISO 27001 Badge */}
          <div className="flex-shrink-0">
            <Image
              src="/images/iso27001.png"
              alt="ISO 27001"
              width={100}
              height={100}
              className="w-32 h-32"
            />
          </div>

          {/* ISO 27001 Content */}
          <div className="w-full md:w-1/2 pt-8 shadow-lg rounded-lg p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              ISO 27001:
            </h2>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              Strengthening Secure IT Operations For Energy And
              <br />
              Finance Clients.
            </p>
          </div>
        </div>

        {/* Learn Certificates Button */}
        <div className="flex justify-center mt-20">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-2 rounded-xl transition-colors duration-300">
            Learn Certificates
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;

