import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function MobilePatrolsFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do mobile patrols work?",
      answer: "Mobile patrol security involves security officers driving around designated areas to ensure everything runs smoothly. Guards operate 24/7 to protect assigned areas, preventing trespassing, violence, or vandalism, and checking doors/windows that may have been left open."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "We provide detailed incident reports documenting any suspicious activities, security breaches, or maintenance issues discovered during patrols. Reports include timestamps, locations, and recommended actions."
    },
    {
      question: "Do you offer dog-assisted mobile patrols?",
      answer: "Yes, mobile patrol services with dogs are available. Our K9 units enhance surveillance capabilities and provide additional security benefits including superior detection abilities and powerful deterrent presence."
    },
    {
      question: "How do mobile patrols integrate with other security services?",
      answer: "Mobile patrols complement other security services by providing dynamic coverage that moves throughout your property. They can respond to alarms, conduct random checks, and provide additional security during peak times."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#ED1D2B]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our mobile patrol services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FaQuestionCircle className="text-[#ED1D2B] mr-3" />
                  {faq.question}
                </h3>
                <FaChevronDown 
                  className={`text-[#ED1D2B] transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}