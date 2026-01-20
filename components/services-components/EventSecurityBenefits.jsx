import { FaUsers, FaShieldAlt, FaEye, FaMedkit, FaBullhorn, FaBullseye } from 'react-icons/fa';

export default function EventSecurityBenefits() {
  const benefits = [
    {
      icon: FaUsers,
      title: "Crowd Management",
      description: "Expert crowd control and management to ensure orderly and safe event experiences for all attendees."
    },
    {
      icon: FaShieldAlt,
      title: "Access Control",
      description: "Professional screening of attendees at entrances and controlled access to event areas."
    },
    {
      icon: FaEye,
      title: "Constant Surveillance",
      description: "Continuous monitoring of the event space to detect and respond to any security concerns."
    },
    {
      icon: FaMedkit,
      title: "First Aid Ready",
      description: "Personnel trained in first aid to handle medical emergencies and care for sick attendees."
    },
    {
      icon: FaBullhorn,
      title: "Communication Network",
      description: "Constant communication among security team members using walkie-talkies and other devices."
    },
    {
      icon: FaBullseye,
      title: "VIP Protection",
      description: "Specialized security services for VIP guests and high-profile attendees."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of <span className="text-[#ED1D2B]">Event Security</span> Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our professional event security services ensure safety and enjoyment for all attendees
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