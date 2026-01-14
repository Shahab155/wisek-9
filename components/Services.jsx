// components/Services.jsx
'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Manned Guarding',
      tag: 'Premium Service',
      description:
        'Elite 24/7 protection with SIA-licensed professionals ensuring maximum security for your premises and assets.',
      image: '/assets2/Mannguarding.jpg',
      href: '/services/manned-guarding',
    },
    {
      title: 'Event Security',
      tag: 'Event Specialist',
      description:
        'Comprehensive event management with expert crowd control and seamless safety operations for all event types.',
      image: '/assets2/Event Security-01.jpg',
      href: '/services/event-security',
    },
    {
      title: 'Construction Security',
      tag: 'Site Protection',
      description:
        'Specialized site protection safeguarding equipment, materials, and ensuring 24/7 construction site security.',
      image: '/assets2/Construction secruty.jpg',
      href: '/services/construction-security',
    },
    {
      title: 'Canine Security',
      tag: 'K9 Elite',
      description:
        'Expert K9 units providing enhanced detection capabilities and powerful deterrent presence for maximum security.',
      image: '/assets2/Canine.jpg',
      href: '/services/canine-security',
    },
    {
      title: 'Mobile Patrol',
      tag: 'Mobile Response',
      description:
        'Strategic patrol services with rapid response capabilities across multiple locations and territories.',
      image: '/assets2/Mobile Patrol.jpg',
      href: '/services/mobile-patrol',
    },
    {
      title: 'Temporary Staff Support',
      tag: 'Flexible Staffing',
      description:
        'Flexible temporary staffing solutions with vetted, capable personnel for all sectors and industries.',
      image: '/assets2/Temporery staff sporting.jpg',
      href: '/services/temporary-staff',
    },
    {
      title: 'Cleaning & Staffing Services',
      tag: 'Professional Services',
      description:
        'Professional cleaning and comprehensive staffing solutions with thoroughly vetted personnel for all business needs.',
      image: '/assets2/Cleaning.jpg',
      href: '/services/cleaning-staffing',
    },
    {
      title: 'Custom Security Solutions',
      tag: 'Bespoke Solutions',
      description:
        'Tailored security packages designed specifically for your unique requirements and operational needs.',
      image: '/assets2/customSecurity.jpg',
      href: '/services/custom-security',
    },
  ]

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Retail Manager',
      content: 'Wise-K9 provided exceptional security for our retail chain. Their professional guards helped reduce theft by 75% and improved customer confidence.',
      avatar: '/assets2/02.png'
    },
    {
      name: 'Sarah Johnson',
      role: 'Construction Director',
      content: 'Their construction security team protected our site and equipment flawlessly. We had zero incidents during our 6-month project.',
      avatar: '/assets2/01.png'
    },
    {
      name: 'Michael Brown',
      role: 'Event Organizer',
      content: 'Outstanding event security services. Their team managed crowd control expertly and ensured our event ran smoothly without any issues.',
      avatar: '/assets2/02.png'
    }
  ]

  return (
    <>
      {/* ✅ Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(40%)" }}
          >
            <source src="/assets2/homebannervideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Small Heading */}
          <span className="animate-slide-left-delay text-red-500 text-sm sm:text-base font-semibold tracking-[0.15em] uppercase mb-4 inline-block">
            Professional Security Solutions
          </span>

          {/* Main Heading */}
          <h1 className="animate-slide-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-6">
            Comprehensive <span className="text-red-500">Security Services</span> for Your Business
          </h1>

          {/* Subtitle */}
          <p className="animate-slide-left-delay2 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            From manned guarding to specialized K9 units, our complete range of security solutions ensures your assets, people, and property are protected 24/7 across the UK.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-left-delay3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-10 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 -mt-4 sm:mt-0"
            >
              Get Free Quote
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-10 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex justify-center text-sm text-gray-300">
              <Link href="/" className="hover:text-red-500 transition-colors duration-300 font-medium">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-red-500 font-semibold">Services</span>
            </nav>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx global>{`
          @keyframes slideLeft {
            0% {
              opacity: 0;
              transform: translateX(-60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-left {
            animation: slideLeft 1s ease-out forwards;
          }
          .animate-slide-left-delay {
            animation: slideLeft 1s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
          }
          .animate-slide-left-delay2 {
            animation: slideLeft 1s ease-out forwards;
            animation-delay: 0.4s;
            opacity: 0;
          }
          .animate-slide-left-delay3 {
            animation: slideLeft 1s ease-out forwards;
            animation-delay: 0.6s;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* ✅ Enhanced Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-heading text-red-500 text-center mb-16">
            Elite Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                href={service.href}
                key={index}
                className="group block bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20 cursor-pointer border border-gray-200"
              >
                {/* Service Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors duration-300 group-hover:gap-2">
                    Read More
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-red-600">Clients</span> Across the UK
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses who have experienced our exceptional security services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Call-to-Action Banner */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and let our professional team protect your assets with our elite security services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-red-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
            >
              Get Started Today
            </Link>
            <a
              href="tel:03300434152"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Call: 0330 043 4152
            </a>
          </div>
          <p className="mt-6 text-gray-200 text-sm">
            SIA-Licensed • 24/7 Service • Nationwide Coverage
          </p>
        </div>
      </section>
    </>
  )
}
