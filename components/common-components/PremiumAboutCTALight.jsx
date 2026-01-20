'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaPhone, FaCommentDots } from 'react-icons/fa';

export default function PremiumAboutCTALight() {
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
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#ED1D2B]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#ED1D2B]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Trust Indicators */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <FaShieldAlt className="text-[#ED1D2B]" />
              <span className="text-sm">SIA Licensed</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaShieldAlt className="text-[#ED1D2B]" />
              <span className="text-sm">21 Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaShieldAlt className="text-[#ED1D2B]" />
              <span className="text-sm">Nationwide Coverage</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Ready to <span className="text-[#ED1D2B]">Secure</span> Your Site?
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-md text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Speak with our security experts today for tailored UK security solutions that protect what matters most.
          </motion.p>

          {/* Multiple CTA Options */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center bg-gradient-to-r from-[#ED1D2B] to-[#c01522] hover:from-[#c01522] hover:to-[#a0101c] text-white font-bold text-md py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Get Free Security Assessment</span>
              <span className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ED1D2B] to-[#c01522] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/quote"
              className="group relative inline-flex items-center bg-white border-2 border-[#ED1D2B] text-[#ED1D2B] hover:bg-[#ED1D2B] hover:text-white font-bold text-md py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Request a Quote</span>
            </Link>
          </motion.div>

          {/* Alternative Contact Options */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            <Link
              href="tel:+441234567890"
              className="flex items-center space-x-3 text-gray-700 hover:text-[#ED1D2B] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#ED1D2B]/10 flex items-center justify-center group-hover:bg-[#ED1D2B]/20 transition-colors duration-300">
                <FaPhone className="text-[#ED1D2B] text-lg" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Call Now</div>
                <div className="font-semibold">+44 (0) 1234 567890</div>
              </div>
            </Link>

            <Link
              href="/chat"
              className="flex items-center space-x-3 text-gray-700 hover:text-[#ED1D2B] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#ED1D2B]/10 flex items-center justify-center group-hover:bg-[#ED1D2B]/20 transition-colors duration-300">
                <FaCommentDots className="text-[#ED1D2B] text-lg" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Live Chat</div>
                <div className="font-semibold">Chat with an Expert</div>
              </div>
            </Link>
          </motion.div>

          {/* Guarantee Badge */}
          <motion.div
            variants={item}
            className="mt-12 inline-flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-6 py-3"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm">
              24/7 Emergency Response Available
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-[#ED1D2B] opacity-20"></div>
    </section>
  );
}