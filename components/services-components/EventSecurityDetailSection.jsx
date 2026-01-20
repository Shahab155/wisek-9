import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaUsers, FaSearch, FaMedkit, FaMapMarkerAlt } from 'react-icons/fa';

export default function EventSecurityDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/services/event-security.jpg"
                alt="Event Security Services"
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
                  <div className="text-2xl font-bold text-gray-900">Event</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Event Security</span> Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              DEPENDABLE EVENT SECURITY FOR YOUR GUESTS. Our services are effective in Cambridge and other locations, 
              focusing on safety, handling of children's issues, and use of walkie-talkies for constant communication. 
              We ensure effective and consistent event security with continuous improvement.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">REASONS WHY SHOULD YOU HIRE US FOR EVENT SECURITY?</h3>

              <ul className="space-y-3">
                {[
                  "Screen attendees at the entrance",
                  "Search empty spaces for security checks",
                  "Allow only authorized individuals to enter the event",
                  "Provide care for sick attendees",
                  "Ensure guards are familiar with emergency exits and fire extinguishers",
                  "Maintain constant communication among guards",
                  "Understand the venue layout and the nature of the event taking place",
                  "Crowd management expertise",
                  "VIP security handling",
                  "First aid trained personnel",
                  "Bag checks and access control provision",
                  "Emergency response protocols"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#ED1D2B] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Coverage */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <FaMapMarkerAlt className="text-[#ED1D2B] mr-2" />
                Event Coverage Areas
              </h3>
              <p className="text-gray-600">
                We provide event security services across multiple locations including Cambridge, 
                Middlesbrough, and nationwide. Our coverage extends to various event types from 
                corporate gatherings to private parties and public celebrations.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center">
                <FaShieldAlt className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">SIA Licensed Guards</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Event Specialists</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">24/7 Availability</span>
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
                Request Event Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}