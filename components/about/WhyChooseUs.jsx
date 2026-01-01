"use client";

import Image from "next/image";
import FadeIn from "../ui/FadeIn";

const reasons = [
  "SIA Licensed Guards",
  "Dynamic Security Systems",
  "Clear Communication",
  "Elite Recruitment",
  "Nationwide Reputation",
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeIn>
          <h3 className="text-3xl md:text-4xl font-bold mb-14">
            Why Choose Wise-K9
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {reasons.map((item, i) => (
            <FadeIn key={i}>
              <div>
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={`/assets2/icons/Why choos... Icon-0${i + 1}.svg`}
                    alt={item}
                    width={32}
                    height={32}
                    className="invert"
                  />
                </div>
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
