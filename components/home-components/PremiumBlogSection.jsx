'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PremiumBlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding SIA Licensing Requirements for Security Businesses',
      excerpt: 'Navigate the complexities of Security Industry Authority licensing and ensure your security business meets all regulatory standards.',
      date: 'Jan 10, 2026',
      category: 'Regulations',
      image: '/assets2/Canine.jpg',
      author: 'Wise-K9 Security Team',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Best Practices for Construction Site Security',
      excerpt: 'Protect your construction projects with proven security strategies that prevent theft, vandalism, and unauthorized access.',
      date: 'Jan 8, 2026',
      category: 'Construction',
      image: '/assets2/Construction secruty.jpg',
      author: 'Wise-K9 Security Team',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'How Event Security Differs from Traditional Security',
      excerpt: 'Explore the unique challenges of event security and learn how to create safe environments for attendees and staff.',
      date: 'Jan 5, 2026',
      category: 'Events',
      image: '/assets2/Event Security-01.jpg',
      author: 'Wise-K9 Security Team',
      readTime: '6 min read'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1D2B] to-white opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-[#ED1D2B] rounded-full"></div>
            <span className="mx-4 text-[#ED1D2B] text-sm font-semibold tracking-widest uppercase">Industry Insights</span>
            <div className="w-16 h-0.5 bg-[#ED1D2B] rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wide">
            Security <span className="text-[#ED1D2B]">Insights</span>
          </h2>

          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest security industry trends, expert advice, and best practices from Wise-K9.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ED1D2B] to-[#c01522] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-sm"></div>

              <div className="h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ED1D2B] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ED1D2B] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Link
                      href={`/blog/${post.id.toString().padStart(3, '0')}`}
                      className="text-[#ED1D2B] hover:text-[#c01522] font-semibold text-sm transition-colors duration-300 flex items-center"
                    >
                      Read more
                      <svg
                        className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Premium Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ED1D2B] to-[#c01522]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Security Insights
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest security industry updates, expert tips, and professional guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ED1D2B] w-full"
              />
              <button className="bg-white text-[#ED1D2B] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/80 mt-4">
              Join 1,000+ security professionals who trust our insights.
            </p>
          </div>
        </motion.div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/blog">
            <button className="relative inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#ED1D2B] border-2 border-[#ED1D2B] hover:border-[#c01522] px-8 py-4 rounded-full font-bold text-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group overflow-hidden">
              <span className="relative z-10">View All Blog Posts</span>
              <div className="absolute inset-0 bg-[#ED1D2B] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#ED1D2B]/5 rounded-full blur-2xl -z-10"></div>
    </section>
  );
}