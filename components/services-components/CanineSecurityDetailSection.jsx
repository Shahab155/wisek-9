import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaPaw } from 'react-icons/fa';

export default function CanineSecurityDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/services/canine.jpg"
                alt="Canine Security Services"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaPaw className="text-[#ED1D2B] text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">K9</div>
                  <div className="text-sm text-gray-600">Elite</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Canine Security</span> Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Canine security represents a unique form of vigilance that leverages the natural abilities of dogs to detect suspicious activity. 
              Dogs possess an extraordinary sense of smell and hearing that far exceeds human capabilities, making them invaluable assets in security operations. 
              Our canine security services are often more effective than traditional manned guarding methods, providing superior detection and deterrence capabilities.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Canine Security Services Include:</h3>

              <ul className="space-y-3">
                {[
                  "Professional canine security and guard services",
                  "Police dog handlers with high standards",
                  "Mandatory dog handler training programs",
                  "Dog handler apprenticeships available",
                  "Specialized services for security-related concerns",
                  "Canine units with dogs and handlers for detection",
                  "Detection capabilities for suspicious things, persons, or activities",
                  "Comprehensive security solutions with advanced detection",
                  "Patrol and perimeter security with K9 units",
                  "Emergency response support with trained dogs"
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
                <span className="text-gray-700">SIA Licensed Handlers</span>
              </div>
              <div className="flex items-center">
                <FaPaw className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Trained K9 Units</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">24/7 Availability</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">High Standards</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#ED1D2B] hover:bg-[#c01522] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request Security Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}