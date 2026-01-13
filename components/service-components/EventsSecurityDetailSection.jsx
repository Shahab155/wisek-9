import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa';

export default function EventsSecurityDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets2/Event Security-01.jpg"
                alt="Events Security Services"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaUsers className="text-[#ED1D2B] text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Events Protected</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Events Security</span> Solutions
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our specially trained security personnel provide expertise in crowd management and conflict resolution for events. 
              We ensure safety at music festivals, sporting events, and corporate functions with professional stewarding and security services.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Event Security Services:</h3>
              
              <ul className="space-y-3">
                {[
                  "SIA licensed event officers and stewards",
                  "Experience with music festivals, sporting events, and corporate functions",
                  "Crowd control expertise",
                  "Vehicle access/exit management",
                  "Conflict management skills",
                  "Organizational and planning assistance",
                  "Security surveys and assignment instructions",
                  "Bespoke solutions tailored to your event",
                  "Full event support from planning to execution"
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
                <span className="text-gray-700">SIA Licensed Officers</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Crowd Control Experts</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">24/7 Event Support</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Event Specialists</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-block bg-[#ED1D2B] hover:bg-[#c01522] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Secure Your Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}