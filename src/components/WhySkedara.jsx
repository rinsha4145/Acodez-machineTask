import React from "react";

const WhySkedaraSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Top Left Decorative Triangles */}
      <div className="absolute top-0 left-0 w-64 sm:w-80 h-40">
        <svg
          viewBox="0 0 504 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M116.352 15.2505L166.964 124.369L0.86519 48.8869L116.352 15.2505Z"
            fill="#D9D9D9"
          />
          <path
            d="M286.347 140.694L134.307 48.1425L395.992 0.480722L286.347 140.694Z"
            fill="#01ADED"
          />
          <path
            d="M429.422 120.584L503.201 329.34L214.408 173.419L429.422 120.584Z"
            fill="#66B9D4"
          />
          <path
            d="M116.352 15.2505L166.964 124.369L0.86519 48.8869L116.352 15.2505Z"
            fill="#0C2A67"
          />
        </svg>
      </div>

      {/* Bottom Left Decorative Triangles */}
      <div className="absolute bottom-0 left-0 w-24 sm:w-40 h-28">
        <svg
          viewBox="0 0 124 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M62 70.5L-0.25 140.215L-0.25 0.784958L62 70.5Z"
            fill="#66B9D4"
          />
          <path d="M62 70V140H0L62 70Z" fill="#01ADED" />
          <path d="M62 69.999V140H124.001L62 69.999Z" fill="#0C2A67" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20">
        {/* "WHY Skedara?" Text */}
        <div className="flex items-center mb-10 relative">
          <div className="flex items-center space-x-1">
            <span className="font-['Inter'] text-[#1C77AB] text-xl sm:text-xlx">
              WHY Skedara ?
            </span>
            <span className="font-['Londrina_Solid'] text-[#3FC1E6] text-xs sm:text-sm">
              ?
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-4xl bg-blue-100 p-8 h-80 rounded-tr-none">
            <h3 className="text-blue-900 text-xl font-bold mb-8 leading-tight">
              Tailored Solutions With
              <br />
              Excellence
            </h3>

            <div className="mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4 L18 10 L24 8 L20 14 L26 16 L20 18 L24 24 L18 22 L16 28 L14 22 L8 24 L12 18 L6 16 L12 14 L8 8 L14 10 Z"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M8 24 L24 8" stroke="#1e40af" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <p className="text-blue-900 text-md leading-relaxed">
              From energy trading system reliability to renewable integration,{" "}
              <span className="font-bold">Skedara</span> transforms IT
              operations into engines of growth with sustainable and solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-4xl bg-blue-100 p-8 h-96 rounded-tr-none">
            <h3 className="text-blue-900 text-xl font-bold mb-8 leading-tight">
              Leading IT Toward A<br />
              Greener Future
            </h3>

            <div className="mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 26 L26 6" stroke="#1e40af" strokeWidth="1.5" />
                  <path
                    d="M18 6 L26 6 L26 14"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M6 22 L10 18 L14 22 L18 14 L22 18 L26 12"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <p className="text-blue-900 text-md leading-relaxed">
              Committed to net zero by 2025,{" "}
              <span className="font-bold">Skedara</span> integrates green IT to
              help businesses meet ESG goals and sustainability mandates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-4xl bg-blue-100 p-8 h-96 rounded-tr-none">
            <h3 className="text-blue-900 text-xl font-bold mb-8 leading-tight">
              Global Talent Partnerships
            </h3>

            <div className="mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M4 16 C4 16 8 8 16 8 C24 8 28 16 28 16"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M4 16 C4 16 8 24 16 24 C24 24 28 16 28 16"
                    stroke="#1e40af"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M16 4 L16 28" stroke="#1e40af" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <p className="text-blue-900 text-md leading-relaxed">
              Rooted in India's thriving tech ecosystem and powered by global
              talent, <span className="font-bold">Skedara</span> connects
              expertise to deliver measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySkedaraSection;
