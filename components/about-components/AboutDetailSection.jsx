import { FaShieldAlt, FaMedal, FaUserCheck, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutDetailSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Company Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Our Company
          </h2>
          <div className="w-24 h-1 bg-[#ED1D2B] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Wise-K9, we pride ourselves on delivering exceptional security services tailored to meet the unique needs of each client. 
            Our team of highly trained professionals is committed to providing peace of mind through reliable, discreet, and effective security solutions.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded with a vision to revolutionize the security industry, Wise-K9 has grown from a small local operation to a trusted
              provider of security services across the United Kingdom. Our journey began with a simple mission: to provide unparalleled
              protection and peace of mind to our clients.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Over the years, we have expanded our services and expertise, always maintaining our commitment to excellence and customer satisfaction.
              Today, we serve a diverse clientele ranging from residential properties to large commercial enterprises.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our success is built on a foundation of integrity, professionalism, and a deep understanding of security challenges in today's world.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets2/coverage.jpg"
              alt="Wise-K9 Security Team"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-xl"
              priority={false}
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#ED1D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-600 text-sm">
                We operate with the highest ethical standards and transparency in all our dealings.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#ED1D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMedal className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">
                We strive for excellence in every service we provide, exceeding expectations consistently.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#ED1D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserCheck className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Professionalism</h4>
              <p className="text-gray-600 text-sm">
                Our team maintains the highest level of professionalism in appearance and conduct.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#ED1D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-white text-xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Reliability</h4>
              <p className="text-gray-600 text-sm">
                Clients can count on us to deliver consistent, dependable security solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-r from-[#ED1D2B] to-[#c01522] text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              Our mission is to provide superior security services that protect people, property, and assets. 
              We are dedicated to delivering innovative solutions that address the evolving security challenges 
              of our clients while maintaining the highest standards of professionalism and integrity.
            </p>
          </div>
          <div className="bg-gray-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To be the leading provider of security services in the UK, recognized for our unwavering commitment 
              to excellence, innovation, and customer satisfaction. We envision a safer society where our 
              services contribute to the wellbeing of communities and businesses alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}