import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function CanineSecurityFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is K9 in security?",
      answer: "K9 refers to canine security units with dogs and handlers specifically trained for detection purposes. These units excel at identifying suspicious things, persons, or activities that might go unnoticed by traditional security methods."
    },
    {
      question: "What are security guard services?",
      answer: "Security guard services involve the protection of premises, people, and assets. This includes risk assessment, monitoring, patrolling, and responding to security threats. Our services encompass both traditional guarding and specialized canine security."
    },
    {
      question: "How effective is canine security compared to traditional methods?",
      answer: "Canine security is often more effective than traditional manned guarding due to dogs' superior senses. Their natural abilities to detect suspicious activity, combined with professional training, make them invaluable assets in security operations."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide canine security services across 87% of the UK, including London and other major cities. Our coverage extends to various sectors including commercial, residential, industrial, and event venues."
    },
    {
      question: "Are your dog handlers professionally trained?",
      answer: "Yes, all our dog handlers are police-trained professionals who meet the highest standards. We provide mandatory training programs and apprenticeships to ensure our handlers maintain excellence in their field."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#ED1D2B]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our canine security services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
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
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
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