"use client";
import Link from "next/link";
import Image from "next/image";

export default function AllServices() {
  const services = [
    {
      title: "Canine Security",
      tag: "K9 Elite",
      description:
        "Specially trained dogs for personal protection, property protection, and building searches, providing enhanced detection capabilities and a powerful deterrent presence for maximum security.",
      image: "/services/canine.jpg",
      href: "/services/canine-security",
    },
    {
      title: "Cleaning & Staffing",
      tag: "Premium Service",
      description:
        "Professional cleaning services for offices, commercial and domestic properties with fully managed, efficient and flexible solutions operated nationwide.",
      image: "/services/cleaning.jpg",
      href: "/services/cleaning-staffing",
    },
    {
      title: "Manned Guarding",
      tag: "On-site Protection",
      description:
        "SIA-licensed security guards providing professional manned guarding services with focus on visibility, prevention, and rapid response to ensure your business remains secure.",
      image: "/services/guards.jpg",
      href: "/services/manned-guards",
    },
    {
      title: "Mobile Patrols",
      tag: "24/7 Surveillance",
      description:
        "Mobile patrol security involving security officers driving around areas to ensure everything runs smoothly, with 24/7 protection and dog-assisted patrol options available.",
      image: "/services/mobile-patrol.jpg",
      href: "/services/mobile-patrols",
    },
    {
      title: "Construction Security",
      tag: "Site Protection",
      description:
        "Comprehensive construction site security solutions with trained guards, equipment protection, access control management, and overnight security coverage.",
      image: "/services/construction-security.jpg",
      href: "/services/construction-security",
    },
    {
      title: "Event Security",
      tag: "Event Specialist",
      description:
        "Professional event security services with crowd management expertise, access control, VIP protection, and first aid trained personnel for all types of events.",
      image: "/services/event-security.jpg",
      href: "/services/event-security",
    },
    {
      title: "Temporary Staff",
      tag: "Flexible Solutions",
      description:
        "Short to medium-term contract staffing for door and in-store services, support service officers, help desk officers, and event security with pre-screened candidates.",
      image: "/services/temporary-staff.jpg",
      href: "/services/temporary-staff",
    },
  ];

  return (
    <>
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
