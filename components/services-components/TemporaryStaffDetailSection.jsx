import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaUserTie, FaHardHat, FaLock } from 'react-icons/fa';

export default function TemporaryStaffDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/services/temporary-staff.jpg"
                alt="Temporary Staff Support Services"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaUserTie className="text-[#ED1D2B] text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Flex</div>
                  <div className="text-sm text-gray-600">Staff</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Temporary Staff</span> Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              PROVIDING TEMPORARY SECURITY FENCING IN GLASGOW WITH NEXT-LEVEL CAPABILITIES. 
              We help fill gaps by providing short to medium-term contracts, supplying temporary staff 
              in Glasgow for service at the door or in-store, and integrating support service and 
              help desk officers to manage event security.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Temporary Staff Services Include:</h3>

              <ul className="space-y-3">
                {[
                  "Short to medium-term contract staffing",
                  "Temporary staff for door and in-store services",
                  "Support service officers for events",
                  "Help desk officers for customer service",
                  "Event security management",
                  "Site security systems implementation",
                  "Security alarms for building sites",
                  "Temporary security fencing solutions",
                  "Pre-screened candidates for last-minute deployments",
                  "On-site training for temporary staff",
                  "Flexible staffing contracts",
                  "Full guard information provided (name, SIA credentials, photo)"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#ED1D2B] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <FaStar className="text-[#ED1D2B] mr-2" />
                Key Benefits
              </h3>
              <p className="text-gray-600">
                Maintaining order while ensuring positivity and professionalism. 
                Retaining security manpower by expanding support. Providing the right guards 
                and preventing disruptions to operations. Offering authentic security solutions 
                with temporary security fencing as an effective way to protect premises.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center">
                <FaShieldAlt className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">SIA Licensed Staff</span>
              </div>
              <div className="flex items-center">
                <FaUserTie className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Professional Service</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Flexible Contracts</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Quality Assurance</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#ED1D2B] hover:bg-[#c01522] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request Staff Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}