'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

export default function AgencyBenefits() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-Width Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
            We Have <span className="text-red-600">21 Years</span><br className="hidden sm:block" />
            of Security Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT - TEXT CONTENT (No background card, clean & full-width feel) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="max-w-2xl">
              <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                With over two decades of dedicated service in the security industry, we’ve earned a trusted reputation for delivering reliable, professional, and fully scalable protection solutions across diverse sectors.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
                Our highly trained SIA-licensed officers, cutting-edge technology, and rapid-response support teams work together to safeguard your people, property, and events — <span className="font-semibold text-red-600">24/7, 365 days a year</span>.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-red-600/30"
              >
                Contact Us Today
                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT - IMAGE WITH PLAY BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 lg:order-2 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets2/customSecurity.jpg"
                alt="Wise-K9 Professional Security Team in Action"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Play Button */}
              <a
                href="https://www.youtube.com/watch?v=G_G8SdXktHg"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Watch our security services video"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600/30 rounded-full animate-ping" />
                  <div className="relative bg-red-600 hover:bg-red-700 text-white p-6 lg:p-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
                    <FaPlay className="text-3xl lg:text-4xl ml-1" />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}