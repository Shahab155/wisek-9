import Link from 'next/link';
import { FaShieldAlt, FaMapMarkerAlt, FaClock, FaCar } from 'react-icons/fa';

export default function MobilePatrolsHero() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="Mobile Patrols Hero Section"
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
              <FaMapMarkerAlt className="text-[#ED1D2B] mr-2" /> Nationwide Coverage
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <FaClock className="text-[#ED1D2B] mr-2" /> 24/7 Service
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <FaCar className="text-[#ED1D2B] mr-2" /> Marked Vehicles
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            MOBILE PATROLS
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            STRATEGIC APPROACH TO MOBILE PATROL SECURITY
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-white/90 text-base md:text-lg">
              Keep your property safe and secure with Wise-K9 mobile patrol services in London. 
              We address everything related to mobile patrol security services with our strategic approach.
            </p>
          </div>

          {/* Key Benefits */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-semibold">24/7 Protection</h3>
              <p className="text-white/80 text-sm">Continuous security coverage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-semibold">Random Checks</h3>
              <p className="text-white/80 text-sm">Unpredictable patrol patterns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-semibold">Dog-Assisted</h3>
              <p className="text-white/80 text-sm">Patrols with K9 units available</p>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#ED1D2B] hover:bg-[#c01522] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaShieldAlt /> Get Free Case Evaluation
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