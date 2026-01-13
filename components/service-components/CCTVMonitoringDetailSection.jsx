import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaVideo } from 'react-icons/fa';

export default function CCTVMonitoringDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets2/service-01.jpg"
                alt="CCTV Monitoring Services"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaVideo className="text-[#ED1D2B] text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">CCTV Monitoring</span> Solutions
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our trained and licensed CCTV staff provide professional monitoring and surveillance services 
              with detailed incident reporting. We offer peace of mind for your business security with 
              comprehensive surveillance capabilities and professional logging of activities.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Monitoring Services:</h3>
              
              <ul className="space-y-3">
                {[
                  "Licensed CCTV operators",
                  "Detailed incident reports",
                  "Professional monitoring with detailed logging of activities",
                  "Peace of mind for business security",
                  "Supplier partnerships for managed CCTV installation",
                  "24/7 surveillance capabilities",
                  "Real-time monitoring services",
                  "Comprehensive incident documentation",
                  "Professional response protocols",
                  "Advanced surveillance technology"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#ED1D2B] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center">
                <FaShieldAlt className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Licensed Operators</span>
              </div>
              <div className="flex items-center">
                <FaVideo className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">24/7 Monitoring</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Real-time Response</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Professional Service</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-block bg-[#ED1D2B] hover:bg-[#c01522] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Monitoring
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}