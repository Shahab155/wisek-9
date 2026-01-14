"use client";

import Image from "next/image";
import FadeIn from "../ui/FadeIn";

const services = [
  "Manned Guarding",
  "Event Security",
  "Construction Security",
  "Mobile Patrol",
  "Canine Security",
  "Staff Support",
  "Cleaning & Staffing",
];

export default function ServicesIcons() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="text-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-red-600 rounded-full flex items-center justify-center">
                  <Image
                    src={`/assets2/icons/Services Icons-0${i + 1}.svg`}
                    alt={service}
                    width={28}
                    height={28}
                    className="invert"
                  />
                </div>
                <p className="text-sm text-gray-300">{service}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
