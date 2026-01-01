"use client";

import Link from "next/link";
import FadeIn from "../ui/FadeIn";

export default function AboutCTA() {
  return (
    <section className="py-28 bg-black text-white text-center">
      <FadeIn>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Secure Your Site or Event?
        </h3>
      </FadeIn>

      <FadeIn>
        <p className="text-gray-300 mb-10">
          Speak with Wise-K9 today for trusted UK security solutions.
        </p>
      </FadeIn>

      <FadeIn>
        <Link
          href="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-semibold transition"
        >
          Contact Us
        </Link>
      </FadeIn>
    </section>
  );
}
