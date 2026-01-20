'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay, FaShieldAlt, FaClock, FaMapMarkedAlt, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function PremiumAgencyBenefits() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

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
  }

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-[#ED1D2B] opacity-20"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT - ENHANCED TEXT CONTENT WITH TRUST BADGES */}
          <motion.div 
            variants={item}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="max-w-2xl">
              {/* Enhanced heading with premium styling */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="w-12 h-0.5 bg-[#ED1D2B]"></div>
                  <span className="mx-3 text-[#ED1D2B] text-sm font-semibold tracking-widest uppercase flex items-center">
                     21 Years of Excellence
                  </span>
                  <div className="w-12 h-0.5 bg-[#ED1D2B]"></div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  We Have <span className="text-[#ED1D2B]">21 Years</span><br className="hidden sm:block" />
                  of Security Excellence
                </h2>
              </div>

              <p className="text-base lg:text-md text-gray-700 mb-6 leading-relaxed">
                With over two decades of dedicated service in the security industry, we've earned a trusted reputation for delivering reliable, professional, and fully scalable protection solutions across diverse sectors.
              </p>

              <p className="text-base lg:text-md text-gray-700 mb-8 leading-relaxed">
                Our highly trained SIA-licensed officers, cutting-edge technology, and rapid-response support teams work together to safeguard your people, property, and events — <span className="font-semibold text-[#ED1D2B]">24/7, 365 days a year</span>.
              </p>

              {/* Enhanced Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: FaShieldAlt, title: 'SIA Licensed', subtitle: 'Fully certified', color: 'bg-[#ED1D2B]' },
                  { icon: FaClock, title: '24/7 Service', subtitle: 'Always available', color: 'bg-[#ED1D2B]' },
                  { icon: FaMapMarkedAlt, title: 'Nationwide', subtitle: 'UK coverage', color: 'bg-[#ED1D2B]' }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className={`${badge.color} p-3 rounded-full text-white`}>
                      <badge.icon className="text-lg" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{badge.title}</div>
                      <div className="text-xs text-gray-600">{badge.subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group relative inline-flex items-center bg-gradient-to-r from-[#ED1D2B] to-[#c01522] hover:from-[#c01522] hover:to-[#a0101c] text-white font-bold text-base lg:text-md py-4 px-7 lg:px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Contact Us Today</span>
                <span className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ED1D2B] to-[#c01522] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT - PREMIUM IMAGE SECTION */}
          <motion.div 
            variants={item}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Premium Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/assets2/customSecurity.jpg"
                  alt="Wise-K9 Professional Security Team in Action"
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Premium overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Premium Play Button */}
                <a
                  href="https://www.youtube.com/watch?v=G_G8SdXktHg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  aria-label="Watch our security services video"
                >
                  <div className="relative group/play">
                    <div className="absolute inset-0 bg-[#ED1D2B] rounded-full opacity-20 animate-ping scale-150"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-2xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:shadow-red-500/30">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#ED1D2B] rounded-full">
                        <FaPlay className="text-white text-sm ml-1" />
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Premium corner accents */}
                <div className="absolute top-4 left-4 w-16 h-1 bg-gradient-to-r from-[#ED1D2B] to-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-16 h-1 bg-gradient-to-l from-[#ED1D2B] to-white rounded-full"></div>
              </div>

              {/* Decorative premium elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#ED1D2B]/10 to-white/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-[#ED1D2B]/10 to-white/10 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}