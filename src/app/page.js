import BlogSection from '@/components/Blog'
import CaseStudySection from '@/components/CaseStudy'
import CertificationsSection from '@/components/Certification'
import SkedaraFooter from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ServicesSection from '@/components/Service'
import SustainabilitySection from '@/components/Sustainability'
import WhySkedaraSection from '@/components/WhySkedara'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-screen'>
        <Navbar/>
        <Hero/>
      </div>
        <WhySkedaraSection/>

      <ServicesSection/>
      <CaseStudySection/>
      <CertificationsSection/>
      <BlogSection/>
      <SustainabilitySection/>
      <SkedaraFooter/>
    </>
  )
}