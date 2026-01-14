"use client";

import FadeIn from "../ui/FadeIn";


export default function AboutIntro() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Who We Are
          </h2>
        </FadeIn>

        <FadeIn>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Wise-K9 is a trusted UK security provider offering bespoke
            guarding, canine security, and event protection services.
            Our mission is to deliver safety with professionalism,
            transparency, and confidence.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
