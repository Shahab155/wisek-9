'use client';
import Link from 'next/link';
import { FaHome, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <>
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-28">
      <div className="max-w-4xl mx-auto text-center">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-extrabold text-red-600 drop-shadow-lg">
            404
          </h1>
          <div className="flex justify-center mt-6">
            <FaExclamationTriangle className="text-6xl text-red-500 animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, renamed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/"
            className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-red-600/30"
          >
            <FaHome className="mr-3 text-xl" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg py-4 px-10 rounded-full shadow-xl transition-all duration-500 hover:scale-105"
          >
            <FaEnvelope className="mr-3 text-xl" />
            Contact Us
          </Link>
        </div>

        {/* Optional Tip */}
        <p className="mt-12 text-gray-500 text-sm">
          Still lost? Try searching or use the navigation above.
        </p>
      </div>
    </section>
    </>
  );
}