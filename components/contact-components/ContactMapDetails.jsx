import { FaMapMarkerAlt, FaStar, FaShieldAlt,FaClock } from 'react-icons/fa';

export default function ContactMapDetails() {
  return (
    <section className="py-20 bg-white" aria-label="Contact Map and Details Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us Across the UK
          </h2>
          <div className="w-20 h-1 bg-[#ED1D2B] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With 87% UK coverage, our security experts are ready to serve you wherever you are. 
            Contact us today for a personalized security solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.361740901104!2d-0.1277582845848904!3d51.50735097963637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c380af008d%3A0x1f5ce055e4d5e4a0!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1736780000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wise-K9 Security Location Map"
            ></iframe>
          </div>

          {/* Contact Details and Info */}
          <div className="space-y-8">
            {/* Main Office Info */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaMapMarkerAlt className="text-[#ED1D2B] mr-3" />
                Main Office
              </h3>

              <div className="space-y-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span><br />
                  402 Silver Square, 33rd Street<br />
                  London, UK
                </p>

                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span><br />
                  <a href="tel:03300434152" className="text-[#ED1D2B] hover:underline">
                    0330 043 4152
                  </a>
                </p>

                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span><br />
                  <a href="mailto:info@wisek9.co.uk" className="text-[#ED1D2B] hover:underline">
                    info@wisek9.co.uk
                  </a>
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-[#ED1D2B] p-6 rounded-xl text-center">
                <FaShieldAlt className="text-[#ED1D2B] text-3xl mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">SIA Licensed</h4>
                <p className="text-sm text-gray-600 mt-1">Fully certified</p>
              </div>

              <div className="bg-white border-2 border-[#ED1D2B] p-6 rounded-xl text-center">
                <FaStar className="text-[#ED1D2B] text-3xl mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">87% Coverage</h4>
                <p className="text-sm text-gray-600 mt-1">UK Nationwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ED1D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Licensed Professionals</h4>
              <p className="text-gray-600 text-sm">
                All our security personnel are SIA licensed and fully trained to meet your security needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ED1D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600 text-sm">
                Round-the-clock security services to protect your assets and ensure peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ED1D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Trusted Service</h4>
              <p className="text-gray-600 text-sm">
                With years of experience, we provide reliable and professional security solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}