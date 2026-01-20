'use client';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCertificate, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const achievements = [
  {
    title: 'SIA Approved Contractor',
    description:
      'Officially recognized by the Security Industry Authority for maintaining the highest professional standards in security services.',
    icon: <FaShieldAlt className="w-8 h-8" />,
    color: 'from-[#ED1D2B] to-[#c01522]'
  },
  {
    title: 'COP 119:2024 Certified',
    description:
      'Accredited under the latest Code of Practice for security guarding, ensuring compliance with current industry regulations.',
    icon: <FaCertificate className="w-8 h-8" />,
    color: 'from-[#ED1D2B] to-[#c01522]'
  },
  {
    title: '87% UK Coverage',
    description:
      'Extensive nationwide presence covering 87% of the UK, providing reliable security solutions across England, Scotland, and Wales.',
    icon: <FaMapMarkerAlt className="w-8 h-8" />,
    color: 'from-[#ED1D2B] to-[#c01522]'
  },
  {
    title: '24/7 Operations',
    description:
      'Round-the-clock security services with continuous monitoring and rapid response capabilities for complete peace of mind.',
    icon: <FaClock className="w-8 h-8" />,
    color: 'from-[#ED1D2B] to-[#c01522]'
  },
];

export default function PremiumExcellence() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="excellence" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-[#ED1D2B] opacity-20"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-[#ED1D2B] rounded-full"></div>
            <span className="mx-4 text-[#ED1D2B] text-sm font-semibold tracking-widest uppercase">Our Credentials</span>
            <div className="w-16 h-1 bg-[#ED1D2B] rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional <span className="text-[#ED1D2B]">Excellence</span>
          </h2>
          
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is demonstrated through industry-leading certifications, nationwide coverage, and unwavering dedication to security standards.
          </p>
        </motion.div>

        {/* Achievements Grid with Premium Design */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#ED1D2B]/30"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ED1D2B] to-[#c01522] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              
              <div className="h-full p-8 text-center">
                {/* Icon Circle with Premium Gradient */}
                <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ED1D2B] transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Hover effect line */}
                <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#ED1D2B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle background elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
      </div>
    </section>
  );
}