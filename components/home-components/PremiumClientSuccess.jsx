'use client';
import Link from "next/link";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PremiumClientSuccess() {
  const stories = [
    {
      title: "Securing a Retail Chain in London",
      img: "/assets2/coverage.jpg",
      desc: "Our SIA-licensed guards and 24/7 CCTV monitoring reduced shoplifting by 40% for a major London retailer.",
      link: "/assets2/retail-case-study.pdf",
    },
    {
      title: "Flawless Festival Security in Surrey",
      img: "/assets2/Event Security-01.jpg",
      desc: "Our event security team, including K9 units, managed a 20,000-attendee festival in Surrey with zero incidents.",
      link: "/assets2/event-case-study.pdf",
    },
    {
      title: "Protecting a Manchester Construction Site",
      img: "/assets2/customSecurity.jpg",
      desc: "Wise-K9's mobile patrols and canine security safeguarded a £10M construction project, preventing theft.",
      link: "/assets2/construction-case-study.pdf",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-[#ED1D2B] opacity-20"></div> */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-[#ED1D2B]"></div>
            <span className="mx-4 text-[#ED1D2B] text-sm font-semibold tracking-widest uppercase">Success Stories</span>
            <div className="w-16 h-0.5 bg-[#ED1D2B]"></div>
          </div>
          
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Client <span className="text-[#ED1D2B]">Success Stories</span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            See how Wise-K9 delivers tailored security solutions for businesses and events across the UK.
          </motion.p>
        </motion.div>

        {/* Success Stories Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -15 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400 to-gray-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 blur-sm"></div>
              
              <div className="p-0">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={story.img}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {story.desc}
                  </p>
                  <Link
                    href={story.link}
                    target="_blank"
                    className="inline-flex items-center text-[#ED1D2B] hover:text-[#c01522] font-semibold transition-colors duration-300 group"
                  >
                    View Case Study
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div 
          variants={item}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-[#ED1D2B] to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Your Security, Our Priority
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us to discover how we can protect your business or event with bespoke security solutions.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#ED1D2B] to-[#c01522] hover:from-[#c01522] hover:to-[#a0101c] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-[#ED1D2B]/5 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[#ED1D2B]/5 rounded-full blur-xl -z-10"></div>
    </section>
  );
}