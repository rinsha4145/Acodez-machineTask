import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog1.jpeg",
      title: "The Silent Power Behind Energy Stability: Why IT Operations are the Real MVPs",
      description: "Explore how IT operations quietly underpin energy stability, blending domain expertise technology...",
    },
    {
      id: 2,
      image: "/images/blog2.jpeg",
      title: "Green IT: How Sustainable Practices are Reshaping Energy Operations",
      description: "Discover how IT can lead the charge in ESG alignment and sustainability while optimizing energy operations...",
    },
    {
      id: 3,
      image: "/images/blog3.jpg",
      title: "The Secret to Success: Why People Matter More Than Ever in IT Outsourcing",
      description: "Learn how a people-first approach transforms organizational success and client relationships...",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen relative overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border border-white/10 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="text-green-400 font-semibold text-sm tracking-wider uppercase mb-4">
            BLOG
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Insights That Matter: Thought Leadership From Skedara.
          </h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                height={300}
                width={300} 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-gray-900 text-xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
                
                {/* Read More Link */}
                <button className="inline-flex items-center text-green-500 font-semibold text-sm hover:text-green-600 transition-colors duration-200 group-hover:translate-x-1">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>

     
    </div>
  );
}