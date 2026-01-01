'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaSuitcaseRolling,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaEnvelope,
  FaConciergeBell,
  FaEllipsisH,
  FaChevronRight,
} from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap = {
    Home: FaHome,
    About: FaInfoCircle,
    Contact: FaEnvelope,
    Services: FaConciergeBell,
    More: FaEllipsisH,
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const servicesDropdown = [
    { href: '/services/canine-security', label: 'Canine Security' },
    { href: '/services/cleaning-staffing', label: 'Cleaning Staffing' },
    { href: '/services/construction-security', label: 'Construction Security' },
    { href: '/services/custom-security', label: 'Custom Security' },
    { href: '/services/event-security', label: 'Event Security' },
    { href: '/services/manned-guarding', label: 'Manned Guarding' },
    { href: '/services/mobile-patrol', label: 'Mobile Patrol' },
    { href: '/services/temporary-staff', label: 'Temporary Staff' },

  ];

  const moreDropdown = [
    { href: '/blogs', label: 'Blogs' },
    { href: '/careers', label: 'Careers' },
    { href: '/quote', label: 'Get Quote' },
    { href: '/training', label: 'Training' },
    { href: '/support', label: 'Support' },
  ];

  // Bottom nav items (visible only on mobile)
  const bottomNavItems = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/about', label: 'About', icon: FaInfoCircle },
    { href: '/services', label: 'Services', icon: FaSuitcaseRolling },
    { href: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header
        id="header"
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'top-0 bg-white shadow-lg text-black'
            : 'top-6 bg-black/80 backdrop-blur-md text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile: Logo centered */}
            <div className="flex-1 flex md:hidden justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-10 relative flex items-center">
                <Image
                  src="/assets2/logowhite.png"
                  width={140}
                  height={40}
                  alt="Royal Challengers Logo"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Desktop Logo (left) */}
            <div className="hidden md:block">
            
              <div className="w-20 h-10 relative flex items-center">
                <Image
                  src="/assets2/logowhite.png"
                  width={100}
                  height={48}
                  alt="Royal Challengers Logo"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
             

            {/* Desktop Navigation - UNCHANGED */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = iconMap[item.label];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative px-3 py-2 text-sm font-bold transition-all"
                  >
                    <div className="flex flex-col items-center">
                      <Icon className="mb-1 text-lg group-hover:text-red-500 transition-colors" />
                      <span className="group-hover:text-red-500 transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                );
              })}

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex flex-col items-center px-3 py-2 text-sm font-bold text-white">
                  <FaConciergeBell className="mb-1 text-lg group-hover:text-red-500 transition-colors" />
                  <span className="flex items-center group-hover:text-red-500 transition-colors">
                    Services
                    <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
                  </span>
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-52 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${
                    scrolled ? 'bg-white' : 'bg-black/95 backdrop-blur-md'
                  } border ${scrolled ? 'border-gray-200' : 'border-white/20'}`}
                >
                  <div className="py-3">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-6 py-3 text-sm font-medium transition-all ${
                          scrolled
                            ? 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                            : 'text-gray-200 hover:text-red-500 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex flex-col items-center px-3 py-2 text-sm font-bold text-white">
                  <FaEllipsisH className="mb-1 text-lg group-hover:text-red-500 transition-colors" />
                  <span className="flex items-center group-hover:text-red-500 transition-colors">
                    More
                    <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
                  </span>
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-56 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${
                    scrolled ? 'bg-white' : 'bg-black/95 backdrop-blur-md'
                  } border ${scrolled ? 'border-gray-200' : 'border-white/20'}`}
                >
                  <div className="py-3">
                    {moreDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-6 py-3 text-sm font-medium transition-all ${
                          scrolled
                            ? 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                            : 'text-gray-200 hover:text-red-500 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Hamburger - Right Side */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden z-50 relative"
            >
              <FaBars className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-full bg-gradient-to-b from-black to-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="w-28 h-16 relative">
              <Image
                src="/assets2/logowhite.png"
                width={80}
                height={40}
                alt="Logo"
                className="object-contain h-full w-full"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl hover:text-red-500 transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
            {/* Main Links */}
            {[
              { href: '/', label: 'Home', icon: FaHome },
              { href: '/services', label: 'Serices', icon: FaSuitcaseRolling },
              { href: '/about', label: 'About', icon: FaInfoCircle },
              { href: '/contact', label: 'Contact', icon: FaEnvelope },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-4 text-lg font-semibold hover:text-red-500 transition-colors group"
                >
                  <Icon className="text-2xl group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Services - Expandable */}
            <div className="pt-4">
              <button
                onClick={() => setOpenServices(!openServices)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold hover:text-red-500 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <FaConciergeBell className="text-2xl" />
                  <span>Services</span>
                </div>
                <FaChevronRight
                  className={`text-xl transition-transform ${openServices ? 'rotate-90' : ''}`}
                />
              </button>

              <div
                className={`mt-3 space-y-2 overflow-hidden transition-all duration-300 ${
                  openServices ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 pl-12 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* More - Expandable */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => setOpenMore(!openMore)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold hover:text-red-500 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <FaEllipsisH className="text-2xl" />
                  <span>More</span>
                </div>
                <FaChevronRight
                  className={`text-xl transition-transform ${openMore ? 'rotate-90' : ''}`}
                />
              </button>

              <div
                className={`mt-3 space-y-2 overflow-hidden transition-all duration-300 ${
                  openMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {moreDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 pl-12 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-500"
        />
      )}

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-30 md:hidden">
        <div className="grid grid-cols-5 py-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-red-600 transition-colors group"
              >
                <Icon className="text-xl mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacer for bottom nav */}
      <div className=" md:hidden" />
    </>
  );
}