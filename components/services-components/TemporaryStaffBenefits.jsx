import { FaUserTie, FaClock, FaShieldAlt, FaCheck, FaHardHat, FaBullseye } from 'react-icons/fa';

export default function TemporaryStaffBenefits() {
  const benefits = [
    {
      icon: FaUserTie,
      title: "Flexible Staffing Solutions",
      description: "Short to medium-term contracts that adapt to your changing business needs and seasonal demands."
    },
    {
      icon: FaClock,
      title: "Last-Minute Deployments",
      description: "Pre-screened candidates available for immediate deployment when you need temporary staff quickly."
    },
    {
      icon: FaShieldAlt,
      title: "SIA Licensed Professionals",
      description: "All temporary staff are fully licensed and trained to meet the highest security standards."
    },
    {
      icon: FaCheck,
      title: "Comprehensive Screening",
      description: "Rigorous vetting process ensures reliable and trustworthy temporary staff for your operations."
    },
    {
      icon: FaHardHat,
      title: "On-Site Training",
      description: "Proper orientation and training for temporary staff to integrate seamlessly with your team."
    },
    {
      icon: FaBullseye,
      title: "Targeted Solutions",
      description: "Customized staffing plans for door services, in-store support, events, and construction sites."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of <span className="text-[#ED1D2B]">Temporary Staff</span> Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our flexible staffing solutions can support your operations and maintain security
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