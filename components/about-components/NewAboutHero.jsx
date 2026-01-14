'use client';
import Link from 'next/link';
import { FaShieldAlt, FaCheckCircle, FaGlobeEurope } from 'react-icons/fa';

export default function NewAboutHero() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="About Hero Section"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5) contrast(1.1)" }}
          aria-hidden="true"
        >
          <source src="/assets2/homebannervideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#ED1D2B]/60 via-black/60 to-[#ED1D2B]/60"></div>
      </div>

      {/* Static Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ED1D2B]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      {/* Breadcrumb */}
      {/* <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <nav className="flex items-center space-x-2 text-white text-sm" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#ED1D2B] transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#ED1D2B] font-semibold">About</span>
        </nav>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="space-y-6 text-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <div className="flex items-center text-white/90 text-sm">
              <FaShieldAlt className="text-[#ED1D2B] mr-2" /> SIA Licensed
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <FaGlobeEurope className="text-[#ED1D2B] mr-2" /> 87% UK Coverage
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <FaCheckCircle className="text-[#ED1D2B] mr-2" /> 24/7 Service
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            About <span className="text-[#ED1D2B]">Wise-K9</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            SIA-Licensed Security Experts
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-white/90 text-base md:text-lg">
              Wise-K9 is a trusted UK security provider offering bespoke guarding, canine security, and event protection services.
              Our mission is to deliver safety with professionalism, transparency, and confidence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#ED1D2B] hover:bg-[#c01522] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Static Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white/70 text-xs mb-2">Explore More</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}