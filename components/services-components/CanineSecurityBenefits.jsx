import { FaEye, FaSearch, FaShieldAlt, FaBullseye, FaDna, FaMicrophoneAlt } from 'react-icons/fa';

export default function CanineSecurityBenefits() {
  const benefits = [
    {
      icon: FaEye,
      title: "Enhanced Detection",
      description: "Dogs possess an extraordinary sense of smell and hearing that far exceeds human capabilities, making them invaluable assets in security operations."
    },
    {
      icon: FaSearch,
      title: "Superior Tracking",
      description: "Our trained K9 units excel at tracking and locating individuals or objects that may pose security risks, even in challenging environments."
    },
    {
      icon: FaShieldAlt,
      title: "Deterrent Presence",
      description: "The presence of professionally trained security dogs creates a powerful deterrent effect against potential intruders or criminal activity."
    },
    {
      icon: FaBullseye,
      title: "Targeted Detection",
      description: "Our dogs are specifically trained to detect drugs, explosives, contraband, and other prohibited substances with remarkable accuracy."
    },
    {
      icon: FaDna,
      title: "Advanced Scent Work",
      description: "Utilizing dogs' natural olfactory abilities, our K9 units can detect scents that are days or even weeks old in certain conditions."
    },
    {
      icon: FaMicrophoneAlt,
      title: "Auditory Alert Systems",
      description: "Dogs can hear sounds at frequencies and distances that humans cannot, providing early warning of potential threats."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#ED1D2B]">Canine Security</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the unique advantages that make canine security more effective than traditional security methods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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