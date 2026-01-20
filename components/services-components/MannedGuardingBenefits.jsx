import { FaUserShield, FaShieldAlt, FaClock, FaBullseye, FaStar, FaCheck } from 'react-icons/fa';

export default function MannedGuardingBenefits() {
  const benefits = [
    {
      icon: FaUserShield,
      title: "SIA-Licensed Guards",
      description: "All our security personnel are properly licensed and trained to meet the highest security standards."
    },
    {
      icon: FaShieldAlt,
      title: "Dynamic Security System",
      description: "Advanced security approach with modern technologies and real-time reporting systems."
    },
    {
      icon: FaClock,
      title: "24/7 Rapid Response",
      description: "Quick reaction to emergencies with visible deterrence against crime and security threats."
    },
    {
      icon: FaBullseye,
      title: "Customizable Solutions",
      description: "Tailored security services adapted to your specific business needs and requirements."
    },
    {
      icon: FaStar,
      title: "Professional Image",
      description: "First-class nationwide reputation with outstanding recruitment procedures and quality assurance."
    },
    {
      icon: FaCheck,
      title: "Immediate Deployment",
      description: "Ready to deploy within an hour of confirming your quote with flexible contract options."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of <span className="text-[#ED1D2B]">Manned Guarding</span> Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our professional manned guarding services protect your business and ensure security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#ED1D2B]/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-[#ED1D2B] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}