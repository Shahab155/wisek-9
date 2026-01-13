import Link from 'next/link';
import { FaShieldAlt, FaMapMarkerAlt, FaClock, FaPaw } from 'react-icons/fa';

export default function SecurityDogServicesHero() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="Security Dog Services Hero Section"
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

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ED1D2B]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="space-y-6 text-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <div className="flex items-center text-white/90 text-sm">
              <FaShieldAlt className="text-[#ED1D2B] mr-2" /> SIA Licensed
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <FaMapMarkerAlt className="text-[#ED1D2B] mr-2" /> 87% UK Coverage
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <FaClock className="text-[#ED1D2B] mr-2" /> 24/7 Service
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <FaPaw className="text-[#ED1D2B] mr-2" /> Trained K9 Units
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Security Dog Services
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Specially trained dogs for personal protection, property protection, and building searches
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-white/90 text-base md:text-lg">
              Our specially trained dogs provide enhanced detection capabilities and a powerful deterrent presence 
              for maximum security. We offer specialized services for personal protection, property protection, 
              and building searches with specially trained handlers and advanced scent detection.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#ED1D2B] hover:bg-[#c01522] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaShieldAlt /> Get Protected
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white/70 text-xs mb-2">Explore Services</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}