import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaBroom, FaHome, FaBuilding } from 'react-icons/fa';

export default function CleaningStaffingDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/services/cleaning.jpg"
                alt="Cleaning & Staffing Services"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaBroom className="text-[#ED1D2B] text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Clean</div>
                  <div className="text-sm text-gray-600">Team</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Cleaning & Staffing</span> Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We focus on providing cleaning teams so businesses can focus on workflow without disruption, 
              featuring fast booking, on-time delivery, and coverage when regular cleaners are unavailable. 
              We are delivering the right people, at the affordable price, at the right time.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Cleaning Services Include:</h3>

              <ul className="space-y-3">
                {[
                  "Office cleaning services",
                  "Commercial property cleaning",
                  "Domestic property cleaning",
                  "Carpet cleaning",
                  "Oven cleaning",
                  "Window cleaning",
                  "Post-construction cleaning",
                  "Flexible scheduling options (weekly, bi-weekly)",
                  "Fast booking and on-time delivery",
                  "Coverage when regular cleaners are unavailable",
                  "Professional cleaning teams",
                  "Latest cleaning techniques"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#ED1D2B] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Clients */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <FaBuilding className="text-[#ED1D2B] mr-2" />
                Target Clients
              </h3>
              <p className="text-gray-600">
                We partner with schools, supermarkets, cinemas, corporate offices, and other businesses 
                looking for reliable cleaning and staffing solutions. We provide cleanlers for houses, 
                apartments, or offices to meet your specific needs.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Promise</h3>
              <p className="text-blue-700">
                "delivering the right people, at the affordable price, at the right time" - 
                We ensure quality cleaning services that fit your budget and schedule.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center">
                <FaShieldAlt className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">SIA Licensed Staff</span>
              </div>
              <div className="flex items-center">
                <FaBroom className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Professional Cleaners</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Flexible Scheduling</span>
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
                Request Cleaning Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}