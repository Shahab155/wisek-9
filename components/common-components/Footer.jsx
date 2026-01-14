'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  useEffect(() => {
    // Enhanced scroll effect for header (if exists)
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
          header.style.backdropFilter = 'blur(10px)';
        } else {
          header.style.background = 'transparent';
          header.style.backdropFilter = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animated counters
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count') || '0');
            const element = entry.target;
            let count = 0;
            const increment = target > 100 ? target / 80 : target / 50;
            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                element.textContent = target + (target === 87 ? '%' : target === 1000 ? '+' : '');
                clearInterval(timer);
              } else {
                element.textContent = Math.ceil(count) + (target === 87 ? '%' : target === 1000 ? '+' : '');
              }
            }, 30);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 text-white py-16 border-t border-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 text-center">
          <div className="group">
            <div
              className="text-5xl md:text-6xl font-extrabold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-500"
              data-count="87"
            >
              0%
            </div>
            <p className="text-gray-300 font-medium">UK Coverage</p>
          </div>
          <div className="group">
            <div
              className="text-5xl md:text-6xl font-extrabold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-500"
              data-count="24"
            >
              0
            </div>
            <p className="text-gray-300 font-medium">Hours Service</p>
          </div>
          <div className="group">
            <div
              className="text-5xl md:text-6xl font-extrabold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-500"
              data-count="1000"
            >
              0+
            </div>
            <p className="text-gray-300 font-medium">Clients Protected</p>
          </div>
          <div className="group">
            <div
              className="text-5xl md:text-6xl font-extrabold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-500"
              data-count="15"
            >
              0
            </div>
            <p className="text-gray-300 font-medium">Years Experience</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info - Left Column */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-bold text-red-600 mb-6">Wise-K9</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              SIA-licensed Security Guard Supplier Company dedicated to protecting your assets with professionalism and vigilance.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Serving retail, corporate, construction, healthcare, and public sectors with highly trained, SIA-approved security officers.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <span className="text-sm">United Kingdom</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaPhone className="text-red-500 text-xl" />
                <span className="text-sm">Contact via Website</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-red-500 text-xl" />
                <span className="text-sm">info@wisek9.co.uk</span>
              </div>
            </div>

            {/* Legal Info */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-xs text-gray-500">Company No. 13043701</p>
              <p className="text-xs text-gray-500">VAT No. 430 2828 22</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/careers', label: 'Careers' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/quote', label: 'Get a Quote' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-gray-300 hover:text-red-500 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Social */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Stay Connected</h3>

            {/* Main CTA */}
            <Link
              href="https://wisek9.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg py-5 px-10 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/30 mb-10"
            >
              Visit wisek9.co.uk
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Wise-K9 Security Services. All rights reserved. 
            <span className="mx-2">|</span>
            Your Safety, Our Mission
            <span className="mx-2">|</span>
            Developed with ❤️ by{' '}
            <a href="https://irisxoft.com" className="text-red-500 hover:underline">
              irisxoft.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}