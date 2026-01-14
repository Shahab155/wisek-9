"use client";

import Image from "next/image";
import SlideIn from "../ui/SlideIn";

export default function CoverageSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <SlideIn direction="left">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Nationwide Coverage
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Operating across 87% of the UK, Wise-K9 delivers trusted,
              SIA-licensed security services nationwide.
            </p>

            <div className="inline-block bg-red-600 text-white px-8 py-6 rounded-xl">
              <p className="text-2xl font-bold">87% UK Coverage</p>
              <p className="text-sm">Nationwide Security</p>
            </div>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <Image
            src="/assets2/coverage.jpg"
            alt="UK Coverage"
            width={900}
            height={600}
            className="rounded-2xl shadow-xl"
          />
        </SlideIn>
      </div>
    </section>
  );
}
