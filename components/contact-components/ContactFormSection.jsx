import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane,FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-gray-50" aria-label="Contact Form Section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <div className="w-20 h-1 bg-[#ED1D2B] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our security services? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED1D2B] focus:border-[#ED1D2B] transition-colors"
                      placeholder="Enter your name"
                    />
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED1D2B] focus:border-[#ED1D2B] transition-colors"
                      placeholder="Enter your email"
                    />
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED1D2B] focus:border-[#ED1D2B] transition-colors"
                      placeholder="Enter your phone"
                    />
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED1D2B] focus:border-[#ED1D2B] transition-colors"
                      placeholder="What is this regarding?"
                    />
                    <FaComment className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED1D2B] focus:border-[#ED1D2B] transition-colors resize-vertical"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                  <FaComment className="absolute left-4 top-4 text-gray-400" />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#ED1D2B] hover:bg-[#c01522] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ED1D2B]/10 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-[#ED1D2B] text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:03300434152" className="hover:text-[#ED1D2B] transition-colors">
                        0330 043 4152
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ED1D2B]/10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-[#ED1D2B] text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@wisek9.co.uk" className="hover:text-[#ED1D2B] transition-colors">
                        info@wisek9.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ED1D2B]/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[#ED1D2B] text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600 mt-1">
                      402 Silver Square, 33rd Street<br />
                      London, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#ED1D2B] to-[#c01522] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </li>
              </ul>
              <p className="mt-4 text-sm">
                For emergency services, please call our 24/7 hotline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}