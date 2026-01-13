'use client'
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHeadset, FaMedal, FaUserGraduate } from 'react-icons/fa';

export default function PremiumWhyChooseUs() {
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

  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'SIA Approved',
      desc: 'Fully licensed and compliant with industry standards.',
      color: 'text-[#ED1D2B]'
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: '24/7 Support',
      desc: 'Always available when you need security coverage.',
      color: 'text-[#ED1D2B]'
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: '10+ Years Experience',
      desc: 'Trusted by hundreds of businesses across the UK.',
      color: 'text-[#ED1D2B]'
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      title: 'Trained Staff',
      desc: 'All officers undergo rigorous training before deployment.',
      color: 'text-[#ED1D2B]'
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-[#ED1D2B] opacity-20"></div> */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-[#ED1D2B]"></div>
            <span className="mx-4 text-[#ED1D2B] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <div className="w-16 h-0.5 bg-[#ED1D2B]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-wide">
            Why Choose <span className="text-[#ED1D2B]">WiseK9?</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the key advantages that set us apart in the security industry
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -15 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 border border-gray-100 hover:shadow-2xl"
            >

              <div className="p-8 text-center relative z-10">
                {/* Icon Container */}
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#ED1D2B] to-[#c01522] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ED1D2B] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Hover effect line */}
                <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#ED1D2B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
    </section>
  )
}