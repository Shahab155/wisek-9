import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function EventSecurityFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do you handle crowd management at events?",
      answer: "Our security team uses proven crowd management techniques including strategic positioning, clear communication, and coordination to ensure orderly movement and prevent overcrowding in sensitive areas."
    },
    {
      question: "Do you provide bag checks and access control?",
      answer: "Yes, we provide comprehensive access control services including bag checks, ID verification, and screening of attendees at entrances to ensure only authorized individuals enter the event."
    },
    {
      question: "Can you handle VIP security?",
      answer: "Absolutely. We provide specialized security services for VIP guests and high-profile attendees, including discrete protection and dedicated security personnel."
    },
    {
      question: "Are your guards trained in first aid?",
      answer: "Yes, our event security guards receive first aid training to handle medical emergencies and provide care for sick attendees during events."
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
            Find answers to common questions about our event security services
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