import Link from 'next/link';
import { FaCheckCircle, FaStar, FaShieldAlt, FaClock, FaUserShield, FaMapMarkerAlt, FaBullseye } from 'react-icons/fa';

export default function MannedGuardingDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/services/guards.jpg"
                alt="Manned Guarding Services"
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
                  <div className="text-2xl font-bold text-gray-900">Guard</div>
                  <div className="text-sm text-gray-600">Elite</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#ED1D2B]">Manned Guarding</span> Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We provide reliable manned guarding services across multiple sectors including workplaces, 
              construction sites, offices, retail shops, warehouses, and educational institutions. 
              Our SIA-licensed guards focus on visibility, prevention, and rapid response to ensure 
              your business remains secure and protected.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Manned Guarding Services Include:</h3>

              <ul className="space-y-3">
                {[
                  "SIA-licensed security guards",
                  "Dynamic security system implementation",
                  "Effective communication protocols",
                  "Modern technology integration",
                  "Outstanding recruitment procedure",
                  "First-class nationwide image",
                  "Real-time reporting systems",
                  "Customizable security solutions",
                  "Rapid response capability",
                  "Flexible contracts",
                  "Immediate deployment within an hour",
                  "Visible deterrence against crime"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#ED1D2B] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage Areas */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <FaMapMarkerAlt className="text-[#ED1D2B] mr-2" />
                Coverage Areas
              </h3>
              <p className="text-gray-600">
                We provide manned guarding services across workplaces, construction sites, offices, 
                retail shops, warehouses, educational institutions, and more. Our primary focus 
                is on Surrey with nationwide coverage available.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center">
                <FaShieldAlt className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">SIA Licensed Guards</span>
              </div>
              <div className="flex items-center">
                <FaUserShield className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">Professional Service</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-[#ED1D2B] mr-3 text-lg" />
                <span className="text-gray-700">24/7 Protection</span>
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
                Request Security Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}