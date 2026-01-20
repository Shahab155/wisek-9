'use client';
import Link from 'next/link';
import {
  FaDog,
  FaBroom,
  FaUserShield,
  FaCar,
  FaHardHat,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    { icon: FaDog, label: 'Canine Security', description: 'Specially trained dogs for personal and property protection', href: '/services/canine-security' },
    { icon: FaBroom, label: 'Cleaning & Staffing', description: 'Professional cleaning services for offices and properties', href: '/services/cleaning-staffing' },
    { icon: FaUserShield, label: 'Manned Guarding', description: 'SIA-licensed security guards for on-site protection', href: '/services/manned-guards' },
    { icon: FaCar, label: 'Mobile Patrols', description: 'Mobile security patrols with 24/7 surveillance', href: '/services/mobile-patrols' },
    { icon: FaHardHat, label: 'Construction Security', description: 'Comprehensive security for construction sites', href: '/services/construction-security' },
    { icon: FaUsers, label: 'Event Security', description: 'Professional security for events and crowd management', href: '/services/event-security' },
    { icon: FaUserTie, label: 'Temporary Staff', description: 'Flexible staffing solutions for short to medium-term needs', href: '/services/temporary-staff' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#ED1C2A]">Security Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional security solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-[#ED1C2A] flex items-center justify-center text-white mb-4 group-hover:bg-[#c01522] transition-colors duration-300 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base group-hover:text-[#ED1C2A] transition-colors duration-300 mb-2">
                  {service.label}
                </h3>
                <p className="text-xs text-gray-600 text-center">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <button className="bg-[#ED1C2A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c01522] transition-colors duration-300 shadow-md hover:shadow-lg">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}