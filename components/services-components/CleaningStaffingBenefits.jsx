import { FaBroom, FaClock, FaMoneyBillWave, FaUsers, FaHome, FaBuilding } from 'react-icons/fa';

export default function CleaningStaffingBenefits() {
  const benefits = [
    {
      icon: FaBroom,
      title: "Professional Cleaning Teams",
      description: "Experienced cleaning professionals who deliver high-quality results with the latest cleaning techniques."
    },
    {
      icon: FaClock,
      title: "Flexible Scheduling",
      description: "Fast booking and on-time delivery with flexible scheduling options to fit your business needs."
    },
    {
      icon: FaMoneyBillWave,
      title: "Affordable Pricing",
      description: "Competitive rates that deliver value while maintaining the highest quality standards."
    },
    {
      icon: FaUsers,
      title: "Reliable Coverage",
      description: "Coverage when regular cleaners are unavailable, ensuring continuity of service."
    },
    {
      icon: FaHome,
      title: "Versatile Services",
      description: "Services for homes, apartments, offices, and commercial properties with specialized options."
    },
    {
      icon: FaBuilding,
      title: "Nationwide Operation",
      description: "Comprehensive cleaning services available across the UK with local expertise."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of <span className="text-[#ED1D2B]">Cleaning & Staffing</span> Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our professional cleaning and staffing services enhance your property and business operations
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