// components/PremiumCities.jsx
'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function PremiumCities() {
  const cities = [
    { name: 'Surrey', description: 'Premium security services' },
    { name: 'Birmingham', description: "UK's second city" },
    { name: 'Bristol', description: 'South West hub' },
    { name: 'Cardiff', description: "Wales' capital" },
    { name: 'Edinburgh', description: "Scotland's capital" },
    { name: 'Glasgow', description: "Scotland's largest" },
    { name: 'Liverpool', description: 'Maritime city' },
    { name: 'London', description: 'Capital city' },
    { name: 'Manchester', description: 'Industrial heritage' },
    { name: 'Newcastle', description: 'North East' },
    { name: 'Sheffield', description: 'Steel city' },
    { name: 'York', description: 'Historic city' },
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="mx-4 text-[#ED1D2B] text-sm font-semibold tracking-widest uppercase">Coverage</span>
            <div className="w-16 h-0.5 bg-[#ED1D2B]"></div>
          </div>
          
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            UK Cities We <span className="text-[#ED1D2B]">Serve</span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Professional security services across the UK's major metropolitan areas with local expertise and rapid response capabilities.
          </motion.p>
        </motion.div>

        {/* Cities Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {cities.map((city, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ED1D2B] to-[#c01522] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-sm"></div>
              
              <div className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#ED1D2B] to-[#c01522] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ED1D2B] transition-colors duration-300">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {city.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Box */}
        <motion.div 
          variants={item}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#ED1D2B] to-[#c01522] rounded-3xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Don't See Your City?</h3>
              <p className="text-xl mb-6 text-white/90">
                We cover 87% of the UK. Contact us to discuss tailored security solutions.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-[#ED1D2B] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Today
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