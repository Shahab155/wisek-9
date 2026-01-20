import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function TemporaryStaffFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of temporary staff do you provide?",
      answer: "We provide support service officers, help desk officers, security guards, and other specialized staff for door services, in-store support, event security, and construction site security."
    },
    {
      question: "How quickly can you deploy temporary staff?",
      answer: "We maintain a pool of pre-screened candidates ready for last-minute deployments, allowing us to respond quickly to urgent staffing needs."
    },
    {
      question: "What is your staff vetting process?",
      answer: "All our temporary staff undergo rigorous screening including background checks, SIA licensing verification, and reference validation to ensure reliability and trustworthiness."
    },
    {
      question: "Do you provide on-site training for temporary staff?",
      answer: "Yes, we provide comprehensive on-site training to ensure temporary staff integrate seamlessly with your existing team and understand specific operational requirements."
    },
    {
      question: "What contract terms do you offer?",
      answer: "We specialize in short to medium-term contracts that provide flexibility for your changing business needs, with options for extension based on your requirements."
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
            Find answers to common questions about our temporary staff support services
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