import Image from 'next/image';

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, SecureTech Ltd",
    avatar: "/assets2/02.png",
    content: "Professional and reliable security services. Their team has been instrumental in keeping our premises safe."
  },
  {
    name: "Sarah Williams",
    role: "Manager, Retail Solutions",
    avatar: "/assets2/01.png",
    content: "Excellent response time and highly trained staff. We've seen a significant improvement in our security."
  },
  {
    name: "Michael Brown",
    role: "Director, Corporate Services",
    avatar: "/assets2/02.png",
    content: "Outstanding service quality. Their attention to detail and professionalism sets them apart from competitors."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-red-600">Clients</span> Across the UK
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses who have
            experienced our exceptional security services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}