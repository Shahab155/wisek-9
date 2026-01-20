'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PremiumServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Canine Security',
      image: '/services/canine.jpg',
      description:
        'Specially trained dogs for personal protection, property protection, and building searches, providing enhanced detection capabilities and a powerful deterrent presence for maximum security.',
      ctaText: 'Learn More',
    },
    {
      id: 2,
      title: 'Manned Guarding',
      image: '/services/guards.jpg',
      description:
        'SIA-licensed security guards providing professional manned guarding services with focus on visibility, prevention, and rapid response to ensure your business remains secure.',
      ctaText: 'Secure Your Premises',
    },
    {
      id: 3,
      title: 'Mobile Patrols',
      image: '/services/mobile-patrol.jpg',
      description:
        'Mobile patrol security involving security officers driving around areas to ensure everything runs smoothly, with 24/7 protection and dog-assisted patrol options available.',
      ctaText: 'Get Protected',
    },
    {
      id: 4,
      title: 'Event Security',
      image: '/services/event-security.jpg',
      description:
        'Professional event security services with crowd management expertise, access control, VIP protection, and first aid trained personnel for all types of events.',
      ctaText: 'Secure Your Event',
    },
  ]

  const containerRef = useRef(null);

  // Enhanced scroll-based animation using framer-motion
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = containerRef.current?.querySelectorAll('.service-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-white to-[#ED1D2B] opacity-20"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-[#ED1D2B] rounded-full"></div>
            <span className="mx-4 text-[#ED1D2B] text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <div className="w-16 h-1 bg-[#ED1D2B] rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Premium <span className="text-[#ED1D2B]">Security Solutions</span>
          </h2>

          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Wise-K9 delivers top-tier security solutions tailored to your needs across 87% of the UK.
          </p>
        </motion.div>

        {/* Services Grid with Framer Motion */}
        <motion.div
          ref={containerRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={item}
              className="service-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#ED1D2B]/30"
            >
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} service`}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 2}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#ED1D2B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                    className="bg-white text-[#ED1D2B] px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {service.ctaText}
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ED1D2B] transition-colors duration-300">
                  <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
                    {service.title}
                  </Link>
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                    className="text-[#ED1D2B] font-semibold text-sm hover:text-[#c01522] transition-colors duration-300 flex items-center"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>

                  <div className="w-8 h-0.5 bg-[#ED1D2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Center CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <button className="relative inline-flex items-center justify-center bg-[#ED1D2B] hover:bg-[#c01522] text-white px-8 py-4 rounded-full font-bold text-md shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group overflow-hidden">
              <span className="relative z-10">View All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ED1D2B] to-[#c01522] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
    </section>
  )
}