import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaUserShield } from 'react-icons/fa';

export default function MannedSecurityDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets2/Mannguarding.jpg"
                alt="Manned Security Services"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <FaUserShield className="text-[#ED1D2B] text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Manned Security</span> Solutions
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our trained professionals provide physical security guarding services for offices, shops, residential, 
              and commercial premises with a proactive approach to safety and access control. 
              We offer human presence as a crime deterrent and cover CCTV blind spots.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Security Services:</h3>
              
              <ul className="space-y-3">
                {[
                  "Trained professionals for any premises type",
                  "Physical defense services",
                  "Proactive approach to safety",
                  "Access control system compatibility",
                  "Intruder alarm integration",
                  "Remote CCTV monitoring compatibility",
                  "Human presence as crime deterrent",
                  "Coverage of CCTV blind spots",
                  "Hands-on approach for controlled environments",
                  "Specialized security dog services available"
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
                <span className="text-gray-700">SIA Licensed Guards</span>
              </div>
              <div className="flex items-center">
                <FaUserShield className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Trained Professionals</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">24/7 Protection</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Trusted Since 2015</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-block bg-[#ED1D2B] hover:bg-[#c01522] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Protected
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}