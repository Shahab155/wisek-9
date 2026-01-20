import { FaHardHat, FaTools, FaLock, FaEye, FaShieldAlt, FaBullseye } from 'react-icons/fa';

export default function ConstructionSecurityBenefits() {
  const benefits = [
    {
      icon: FaHardHat,
      title: "Trained Security Personnel",
      description: "Our guards are specifically trained for construction site environments with knowledge of safety protocols and site-specific challenges."
    },
    {
      icon: FaTools,
      title: "Equipment Protection",
      description: "Protect valuable tools, machinery, and materials from theft and vandalism with our comprehensive security solutions."
    },
    {
      icon: FaLock,
      title: "Access Control",
      description: "Manage who enters and exits your construction site with professional access control systems and protocols."
    },
    {
      icon: FaEye,
      title: "Constant Vigilance",
      description: "24/7 monitoring and patrol services to prevent unauthorized access and maintain site security."
    },
    {
      icon: FaShieldAlt,
      title: "Financial Protection",
      description: "Reduce financial losses from theft, vandalism, and damage with our proactive security measures."
    },
    {
      icon: FaBullseye,
      title: "Project Continuity",
      description: "Ensure your construction project stays on schedule without interruptions from security breaches."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of <span className="text-[#ED1D2B]">Construction Security</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our construction security services protect your investment and ensure project success
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