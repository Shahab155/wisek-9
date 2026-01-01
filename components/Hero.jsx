'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-28  "
      aria-label="Hero Section"
    >
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/assets2/hero-fallback.jpg" // Recommended: add a still frame
        >
          <source src="/assets2/homebannervideo.mp4" type="video/mp4" />
        </video>

        {/* Enhanced gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Trust Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block text-red-500 text-sm sm:text-base font-bold tracking-widest uppercase"
          >
            Protect What Matters Most
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            Professional <br />
            <span className="text-red-600 drop-shadow-lg">SIA-Licensed</span> Security
            <br />
            Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Trusted nationwide security officers delivering proactive protection for retail,
            corporate, construction, healthcare, and public sectors.
          </motion.p>

          {/* Trust Badges with React Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 text-sm sm:text-base"
          >
            <div className="flex items-center gap-3 text-white">
              <FaShieldAlt className="w-7 h-7 text-red-500" />
              <span className="font-medium">Fully SIA Licensed</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <FaMapMarkedAlt className="w-7 h-7 text-red-500" />
              <span className="font-medium">87% UK Coverage</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <FaClock className="w-7 h-7 text-red-500" />
              <span className="font-medium">24/7 Availability</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-red-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:bg-red-700 hover:shadow-red-600/50"
            >
              <span className="relative z-10">Get Appointment</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-red-500/30 rounded-full"
              />
            </Link>

            <Link
              href="/about"
              className="rounded-full border-2 border-white/50 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20 hover:shadow-xl"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}