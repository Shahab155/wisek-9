"use client";
import Link from "next/link";
import Image from "next/image";

export default function AllServices() {
  const services = [
    {
      title: "Facilities Management",
      tag: "Premium Service",
      description:
        "Comprehensive cleaning services provided by fully insured and vetted staff, including pre & end of tenancy cleaning, commercial/residential housekeeping, removals, after builders clean, waste removal, window cleaning, upholstery & carpet cleaning, mattress cleaning, oven cleaning, and mobile car wash.",
      image: "/assets2/Cleaning.jpg",
      href: "/services/facilities-management",
    },
    {
      title: "Events Security",
      tag: "Event Specialist",
      description:
        "Specially trained security personnel for events with expertise in crowd management, conflict resolution, and ensuring safety at music festivals, sporting events, and corporate functions.",
      image: "/assets2/Event Security-01.jpg",
      href: "/services/events-security",
    },
    {
      title: "Manned Security",
      tag: "On-site Protection",
      description:
        "Trained professionals providing physical security guarding services for offices, shops, residential, and commercial premises with proactive approach to safety and access control.",
      image: "/assets2/Mannguarding.jpg",
      href: "/services/manned-security",
    },
    {
      title: "CCTV Monitoring",
      tag: "24/7 Surveillance",
      description:
        "Licensed CCTV operators providing real-time monitoring, detailed incident reporting, and comprehensive surveillance services with professional logging of activities.",
      image: "/assets2/service-01.jpg",
      href: "/services/cctv-monitoring",
    },
    {
      title: "Door Supervisor",
      tag: "Premises Security",
      description:
        "Highly trained, SIA licensed door supervisors for premises security with focus on customer experience, professional conduct, and additional qualifications in First Aid and Physical Intervention.",
      image: "/assets2/service-02.jpg",
      href: "/services/door-supervisor",
    },
    {
      title: "Keyholding & Mobile Security",
      tag: "Rapid Response",
      description:
        "24/7 keyholding and mobile security services with alarm response capabilities, branded vehicles, and professional handling of potential threats for residential and commercial properties.",
      image: "/assets2/Mobile Patrol.jpg",
      href: "/services/mobile-security",
    },
    {
      title: "Security Dog Services",
      tag: "K9 Elite",
      description:
        "Specially trained dogs for personal protection, property protection, and building searches, providing enhanced detection capabilities and powerful deterrent presence for maximum security.",
      image: "/assets2/Canine.jpg",
      href: "/services/security-dog-services",
    },
  ];

  return (
    <>
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#ED1D2B]">Premium</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional security solutions tailored to protect your business, property, and people with SIA-licensed professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                href={service.href}
                key={index}
                className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#ED1D2B]/20 cursor-pointer border border-gray-100 hover:border-[#ED1D2B]/30"
              >
                {/* Service Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={208}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3} // Prioritize loading for first 3 images
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ED1D2B] text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ED1D2B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-[#ED1D2B] font-semibold hover:text-[#c01522] transition-colors duration-300 group-hover:gap-2">
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ED1D2B]/0 via-[#ED1D2B]/5 to-[#ED1D2B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
