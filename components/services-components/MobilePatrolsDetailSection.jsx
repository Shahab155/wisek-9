import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaCar, FaDog, FaEye } from 'react-icons/fa';

export default function MobilePatrolsDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/services/mobile-patrol.jpg"
                alt="Mobile Patrol Services"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaCar className="text-[#ED1D2B] text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Patrol</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Mobile Patrol</span> Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Mobile patrol security involves security officers driving around areas to ensure everything runs smoothly. 
              Guards operate 24/7 to protect assigned areas, preventing trespassing, violence, or vandalism. 
              The service includes checking doors/windows that may have been left open and informing property owners.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Mobile Patrol Services Include:</h3>

              <ul className="space-y-3">
                {[
                  "Vast area coverage for large properties",
                  "24/7 continuous protection and monitoring",
                  "Trespassing prevention and security enforcement",
                  "Suspicious activity detection and response",
                  "Property checks (doors, windows, gates, fences)",
                  "Incident reporting and documentation",
                  "Marked security vehicles with company logo",
                  "Vehicle security with tracking systems",
                  "Door locks and immobilizers for safety",
                  "Random patrol patterns for unpredictability",
                  "Mobile patrol services with dogs available",
                  "Integration with other security services"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#ED1D2B] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dog-Assisted Patrols */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <FaDog className="text-[#ED1D2B] mr-2" />
                Dog-Assisted Patrols Available
              </h3>
              <p className="text-gray-600">
                Mobile patrol services with dogs are also available. Our K9 units enhance surveillance capabilities 
                and provide additional security benefits including superior detection abilities and powerful deterrent presence.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center">
                <FaShieldAlt className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">SIA Licensed Officers</span>
              </div>
              <div className="flex items-center">
                <FaCar className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Marked Vehicles</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">24/7 Protection</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Quality Service</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#ED1D2B] hover:bg-[#c01522] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request Mobile Patrol
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}