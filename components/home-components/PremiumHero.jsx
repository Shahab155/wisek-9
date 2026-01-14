'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaMapMarkedAlt, FaBuilding, FaHardHat, FaUsers } from 'react-icons/fa';

export default function PremiumHero() {
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
    <section
      id="premium-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Premium Hero Section"
    >
      {/* Background Video with Premium Effects */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/assets2/hero-fallback.jpg"
        >
          <source src="/assets2/homebannervideo.mp4" type="video/mp4" />
        </video>

        {/* Premium gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ED1D2B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ED1D2B]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 lg:space-y-10"
        >
          {/* Trust Tagline with Premium Animation */}
          <motion.div
            variants={item}
            className="inline-block"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#ED1D2B] to-[#c01522] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-lg"
            >
              Protect What Matters Most
            </motion.span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            variants={item}
            className="space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
              <span className="block">Professional</span>
              <span className="block bg-gradient-to-r from-[#ED1D2B] to-[#c01522] bg-clip-text text-transparent">
                SIA-Licensed Security
              </span>
              <span className="block">Solutions</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={item}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Trusted nationwide security officers delivering proactive protection for retail,
              corporate, construction, healthcare, and public sectors.
            </p>
          </motion.div>

          {/* Premium Trust Badges */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mt-6"
          >
            {[
              { icon: FaShieldAlt, label: 'Fully SIA Licensed', delay: 0.1 },
              { icon: FaMapMarkedAlt, label: '87% UK Coverage', delay: 0.2 },
              { icon: FaClock, label: '24/7 Availability', delay: 0.3 },
              { icon: FaBuilding, label: 'Corporate Security', delay: 0.4 },
              { icon: FaHardHat, label: 'Construction Security', delay: 0.5 },
              { icon: FaUsers, label: 'Event Security', delay: 0.6 }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + badge.delay, duration: 0.6 }}
                className="flex items-center gap-1.5 sm:gap-2 text-white group"
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ED1D2B] to-[#c01522] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <badge.icon className="w-4 h-4" />
                </motion.div>
                <span className="font-medium text-[10px] sm:text-xs group-hover:text-[#ED1D2B] transition-colors duration-300">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 lg:mt-12"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#ED1D2B] to-[#c01522] hover:from-[#c01522] hover:to-[#a0101c] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-[#ED1D2B]/50 transform hover:scale-105"
            >
              <span className="relative z-10">Get Free Security Consultation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ED1D2B] to-[#c01522]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#ED1D2B]/30 rounded-full"
              />
            </Link>

            <Link
              href="/services"
              className="relative inline-flex items-center justify-center rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/20 hover:shadow-xl hover:scale-105 group"
            >
              <span className="relative z-10">View Our Services</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={item}
            className="flex flex-col items-center mt-10 lg:mt-14"
          >
            <span className="text-gray-300 text-[10px] sm:text-xs mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-5 h-8 rounded-full border border-white/30 flex justify-center p-0.5"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-[#ED1D2B] to-transparent opacity-50"></div>
    </section>
  );
}