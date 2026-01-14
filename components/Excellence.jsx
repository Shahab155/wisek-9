'use client';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'SIA Approved Contractor',
    description:
      'Officially recognized by the Security Industry Authority for maintaining the highest professional standards in security services.',
    icon: (
      <svg className="w-12 h-12 text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    title: 'COP 119:2024 Certified',
    description:
      'Accredited under the latest Code of Practice for security guarding, ensuring compliance with current industry regulations.',
    icon: (
      <svg className="w-12 h-12 text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '87% UK Coverage',
    description:
      'Extensive nationwide presence covering 87% of the UK, providing reliable security solutions across England, Scotland, and Wales.',
    icon: (
      <svg className="w-12 h-12 text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    title: '24/7 Operations',
    description:
      'Round-the-clock security services with continuous monitoring and rapid response capabilities for complete peace of mind.',
    icon: (
      <svg className="w-12 h-12 text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
];

export default function Excellence() {
  return (
    <section id="excellence" className="relative overflow-hidden bg-white">
      {/* Curved Top Background */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-[200px] md:h-[250px] lg:h-[300px]">
          <path
            fill="#f8f8f8"
            d="M0,160L80,165.3C160,171,320,181,480,186.7C640,192,800,192,960,181.3C1120,171,1280,149,1360,128L1440,107L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading text-red-600 mb-6 drop-shadow-lg">
            Professional Excellence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is demonstrated through industry-leading certifications, nationwide coverage, and unwavering dedication to security standards.
          </p>
        </motion.div>

        {/* Achievements Grid - Consistent Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl text-center bg-white shadow-lg transition-all duration-500 border-4 border-transparent hover:border-red-600 hover:shadow-2xl hover:-translate-y-2">
                {/* Icon Circle with Hover Effect */}
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-500 group-hover:bg-red-700 group-hover:scale-110 group-hover:shadow-red-600/50">
                  {achievement.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}