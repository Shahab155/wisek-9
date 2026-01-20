import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function MannedGuardingFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are your guards SIA-licensed?",
      answer: "Yes, all our security personnel are properly SIA-licensed and trained to meet the highest security standards. We maintain strict licensing requirements for all our guards."
    },
    {
      question: "How quickly can you deploy guards?",
      answer: "We can deploy guards within an hour of confirming your quote. Our rapid response capability ensures immediate security coverage when you need it."
    },
    {
      question: "What types of uniforms do your guards wear?",
      answer: "Our guards wear professional, clearly identifiable uniforms that project a first-class image. Uniforms are tailored to match the specific requirements of your location."
    },
    {
      question: "Do you provide services nationwide?",
      answer: "Yes, we provide manned guarding services nationwide with a primary focus on Surrey. Our coverage extends to workplaces, construction sites, offices, retail shops, warehouses, and educational institutions."
    },
    {
      question: "What technology do you integrate into your services?",
      answer: "We integrate modern technologies including real-time reporting systems, effective communication protocols, and dynamic security systems to ensure comprehensive protection."
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
            Find answers to common questions about our manned guarding services
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