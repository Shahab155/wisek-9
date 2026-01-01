"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function AboutHeroVideo() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets2/homebannervideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Trusted UK Security & K9 Specialists
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Delivering professional, compliant, and reliable security
              solutions across the United Kingdom.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
