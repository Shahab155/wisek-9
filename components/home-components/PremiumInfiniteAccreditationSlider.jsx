'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PremiumInfiniteAccreditationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

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

  // Create duplicated array for seamless infinite scroll
  const duplicatedAccreditations = [...accreditations, ...accreditations, ...accreditations];
  const totalOriginalItems = accreditations.length;

  // Auto-advance the slider
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          // Advance by 1 to show continuous movement
          if (prevIndex >= totalOriginalItems - 1) {
            return 0; // Reset to beginning after showing all original items
          }
          return prevIndex + 1;
        });
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, totalOriginalItems]);

  // Function to handle manual navigation
  const goToSlide = (index) => {
    setIsPaused(true); // Pause auto-scroll when user interacts
    setCurrentIndex(index);
    
    // Restart auto-scroll after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 5000); // Resume auto-scroll after 5 seconds of inactivity
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalOriginalItems);
    
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const goToPrev = () => {
    setIsPaused(true);
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalOriginalItems) % totalOriginalItems);
    
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="infinite-accreditations"
      className="relative py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-[#ED1D2B]"></div>
            <span className="mx-3 text-[#ED1D2B] text-xs font-semibold tracking-widest uppercase">Certifications</span>
            <div className="w-12 h-0.5 bg-[#ED1D2B]"></div>
          </div>

          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#ED1D2B]">Accreditations</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Recognized by industry leaders for our commitment to excellence and professional standards
          </motion.p>
        </motion.div>

        {/* Infinite Scrolling Container - Shows 5 cards at a time */}
        <div className="relative overflow-hidden py-6">
          <div className="flex justify-center">
            <div className="relative w-full max-w-6xl">
              {/* Main Slider - Shows 5 items at a time */}
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-700 ease-in-out" 
                  style={{ 
                    transform: `translateX(-${(currentIndex * 100) / 5}%)`,
                    marginLeft: '-10%' // Adjust to center the active card
                  }}>
                  {duplicatedAccreditations.map((src, index) => {
                    // Only show the current set of 5 cards plus a few more for smooth transition
                    if (index >= (currentIndex + 5) && index < (currentIndex + totalOriginalItems)) {
                      return null;
                    }
                    
                    return (
                      <div 
                        key={index} 
                        className="w-1/5 flex-shrink-0 px-2" // Each card takes 1/5 of the container width
                      >
                        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center border border-gray-100 hover:shadow-lg hover:border-[#ED1D2B]/30 transition-all duration-300 group h-32">
                          <motion.div
                            whileHover={{ y: -3, scale: 1.05 }}
                            className="w-full h-full flex items-center justify-center"
                          >
                            <div className="relative w-16 h-16">
                              <Image
                                src={src}
                                alt={`Accreditation ${index % totalOriginalItems + 1}`}
                                fill
                                className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={goToPrev}
            className="bg-[#ED1D2B] hover:bg-[#c01522] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous accreditation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="bg-[#ED1D2B] hover:bg-[#c01522] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next accreditation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {accreditations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-[#ED1D2B] scale-125' : 'bg-gray-300 hover:bg-[#ED1D2B]'
              }`}
              aria-label={`Go to accreditation ${index + 1}`}
            />
          ))}
        </div>

        {/* Current Position Indicator */}
        <div className="text-center mt-4">
          <span className="text-gray-500 text-xs">
            Showing 5 of {accreditations.length} accreditations
          </span>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#ED1D2B]/5 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-28 h-28 bg-[#ED1D2B]/5 rounded-full blur-xl -z-10"></div>
    </section>
  );
}