import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function ConstructionSecurityFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are our site security services?",
      answer: "Our construction site security services include trained guards, equipment protection, access control management, overnight security coverage, site fencing services, and security camera installation to protect your construction site."
    },
    {
      question: "Do you provide overnight security?",
      answer: "Yes, we provide comprehensive overnight security coverage to ensure your construction site remains secure 24/7, protecting valuable materials and equipment from theft and vandalism."
    },
    {
      question: "How do you monitor equipment and materials?",
      answer: "Our trained security personnel use a combination of physical patrols, surveillance systems, and access control measures to monitor and protect equipment and materials on your construction site."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide construction security services across the South East region, London, and UK-wide. Our primary focus is on the South East with strong coverage in areas like Camberley and surrounding regions."
    },
    {
      question: "Do your guards receive special training for construction sites?",
      answer: "Yes, our security guards receive specialized training for construction site environments, including knowledge of safety protocols, site-specific challenges, and proper procedures for construction site security."
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
            Find answers to common questions about our construction security services
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