'use client';
import { useState, useEffect, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // ← Correct import

export default function AccreditationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderTrackRef = useRef(null);

  const accreditations = [
    "/assets2/AcRdtion-20.png",
    "/assets2/AcRdtion-19.png",
    "/assets2/AcRdtion-20.png",
    "/assets2/AcRdtion-23.png",
    "/assets2/AcRdtion-19.png",
    "/assets2/AcRdtion-21.png",
    "/assets2/AcRdtion-19.png",
    "/assets2/AcRdtion-20.png",
  ];

  const totalItems = accreditations.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    if (sliderTrackRef.current) {
      const itemWidth = sliderTrackRef.current.children[0].offsetWidth + 24; // width + gap-6 (24px)
      sliderTrackRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  return (
    <section id="accreditations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Accreditations
        </h2>

        <div className="relative">
          {/* Prev Button - Red */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <MdChevronLeft className="text-3xl" />
          </button>

          {/* Next Button - Red */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <MdChevronRight className="text-3xl" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden mx-12 md:mx-16">
            <div
              ref={sliderTrackRef}
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{ width: 'fit-content' }}
            >
              {/* Duplicated for seamless loop */}
              {[...accreditations, ...accreditations].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[150px] h-[150px] p-4 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
                >
                  <img
                    src={src}
                    className="w-28 object-contain"
                    alt={`Accreditation ${index % totalItems + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}