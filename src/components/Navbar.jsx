"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Utility function to return conditional class
  const getLinkClass = (tab) =>
    `text-gray-700  ${
      activeTab === tab ? "border-b-3 border-[#0fba4d] font-semibold" : ""
    }`;

  const getMobileLinkClass = (tab) =>
    `text-gray-700 block py-3 px-4 hover:bg-gray-50 ${
      activeTab === tab ? "border-l-4 border-[#0fba4d] font-semibold bg-gray-50" : ""
    }`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between w-full bg-white py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/images/logo-gray.svg" alt="Logo" width={350} height={350} className="w-auto h-12 sm:h-16 lg:h-20" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center text-md space-x-10">
          <Link href="/" className={getLinkClass("home")} onClick={() => setActiveTab("home")}>
            HOME
          </Link>
          <Link href="#" className={getLinkClass("sustainability")} onClick={() => setActiveTab("sustainability")}>
            SUSTAINABILITY
          </Link>
          <Link href="#" className={getLinkClass("service")} onClick={() => setActiveTab("service")}>
            SERVICE
          </Link>
          <Link href="#" className={getLinkClass("blog")} onClick={() => setActiveTab("blog")}>
            BLOG
          </Link>
          <Link href="#" className={getLinkClass("about")} onClick={() => setActiveTab("about")}>
            ABOUT
          </Link>
          <Link href="#" className={getLinkClass("contact")} onClick={() => setActiveTab("contact")}>
            CONTACT
          </Link>

          <button className="bg-[#0c2a67] text-white py-2 px-5 rounded-3xl hover:bg-blue-900">
            Talk To Experts
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Image src="/images/logo.png" alt="Logo" width={200} height={200} className="w-auto h-10" />
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-gray-900"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="py-4">
              <Link 
                href="/home" 
                className={getMobileLinkClass("home")} 
                onClick={() => handleMobileLinkClick("home")}
              >
                HOME
              </Link>
              <Link 
                href="/sustainability" 
                className={getMobileLinkClass("sustainability")} 
                onClick={() => handleMobileLinkClick("sustainability")}
              >
                SUSTAINABILITY
              </Link>
              <Link 
                href="/service" 
                className={getMobileLinkClass("service")} 
                onClick={() => handleMobileLinkClick("service")}
              >
                SERVICE
              </Link>
              <Link 
                href="/blog" 
                className={getMobileLinkClass("blog")} 
                onClick={() => handleMobileLinkClick("blog")}
              >
                BLOG
              </Link>
              <Link 
                href="/about" 
                className={getMobileLinkClass("about")} 
                onClick={() => handleMobileLinkClick("about")}
              >
                ABOUT
              </Link>
              <Link 
                href="/contact" 
                className={getMobileLinkClass("contact")} 
                onClick={() => handleMobileLinkClick("contact")}
              >
                CONTACT
              </Link>

              {/* Mobile CTA Button */}
              <div className=" mt-6">
                <button className="w-full bg-[#0c2a67] text-white py-3 px-5 rounded-3xl hover:bg-blue-900 font-medium">
                  Talk To Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}