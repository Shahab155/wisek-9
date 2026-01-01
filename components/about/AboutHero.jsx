"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets2/customSecurity.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-4 text-center animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Wise-K9
        </h1>

        <nav className="flex justify-center gap-2 text-sm text-gray-300">
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-red-500 font-semibold">About</span>
        </nav>
      </div>
    </section>
  );
}
