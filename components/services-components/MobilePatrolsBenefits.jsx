import { FaCar, FaEye, FaShieldAlt, FaClock, FaRoute, FaBullseye } from 'react-icons/fa';

export default function MobilePatrolsBenefits() {
  const benefits = [
    {
      icon: FaCar,
      title: "Vast Area Coverage",
      description: "Designed for large areas with mobile units that can cover extensive territories efficiently."
    },
    {
      icon: FaEye,
      title: "Enhanced Surveillance",
      description: "Mobile patrols provide dynamic monitoring with the ability to respond quickly to incidents."
    },
    {
      icon: FaShieldAlt,
      title: "Trespassing Prevention",
      description: "Prevents unauthorized access and maintains security boundaries around your property."
    },
    {
      icon: FaClock,
      title: "24/7 Protection",
      description: "Continuous security coverage with guards moving continuously to protect assigned areas."
    },
    {
      icon: FaRoute,
      title: "Random Patterns",
      description: "Unpredictable patrol routes that make it difficult for potential intruders to anticipate."
    },
    {
      icon: FaBullseye,
      title: "Incident Response",
      description: "Quick response to suspicious activities with detailed reporting and documentation."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of <span className="text-[#ED1D2B]">Mobile Patrols</span> Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our mobile patrol services provide comprehensive security coverage for your property
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