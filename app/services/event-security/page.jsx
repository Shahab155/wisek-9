"use client";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ConstructionSecurityPage() {
  return (
    <>
      <Header />
      <MobileMenu />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-red-600 transition">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-red-600 font-semibold">
              Construction Security
            </span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in">
Event Security          </h1>
          <p className="text-lg md:text-2xl text-red-100 max-w-3xl mx-auto animate-fade-in-delay">
Safe, controlled, and successful events          </p>

          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Uninterrupted Construction",
                text: "Keep your project running smoothly without security disruptions.",
              },
              {
                title: "Site Protection",
                text: "Protect materials, machinery, and assets from theft & damage.",
              },
              {
                title: "Advanced Security",
                text: "Smart, adaptive solutions built for construction environments.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-red-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Image */}
          <div className="relative animate-slide-left">
            <img
              src="/assets2/Construction secruty.jpg"
              alt="Construction Security"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10"></div>
          </div>

          {/* Text */}
          <div className="animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protecting Your Construction Investment
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
             From private events to large-scale gatherings, our trained security teams ensure crowd safety without disrupting the experience.
            </p>

            <ul className="space-y-4">
              {[
                "24/7 site monitoring and protection",
                "Equipment & material theft prevention",
                "Perimeter security and access control",
                "Health & safety compliance monitoring",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-center">
        <a
          href="https://wisek9.co.uk/construction-security"
          target="_blank"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-red-600/40 transition-all duration-300 hover:scale-110"
        >
          Get Construction Security Now
        </a>
      </section>

      <Footer />
    </>
  );
}
