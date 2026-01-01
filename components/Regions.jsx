// components/Regions.tsx
'use client'
import Link from 'next/link'

export default function RegionsUs() {
  const regions = [
    {
      name: 'East England',
      description:
        'Comprehensive security services across Norfolk, Suffolk, Essex, Cambridgeshire, Hertfordshire, and Bedfordshire.',
      image: '/assets2/Location-01.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'East Midlands',
      description:
        'Professional security solutions for Nottinghamshire, Leicestershire, Lincolnshire, Northamptonshire, and Derbyshire.',
      image: '/assets2/Location-04.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'London',
      description:
        'Elite security services across all London boroughs with specialized urban security expertise and rapid response.',
      image: '/assets2/Location-07.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
        </svg>
      ),
    },
    {
      name: 'North East',
      description:
        'Reliable security coverage for Northumberland, Tyne and Wear, County Durham, and Teesside areas.',
      image: '/assets2/Location-04.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'Scotland',
      description:
        'Comprehensive security services across Scotland including Edinburgh, Glasgow, Aberdeen, and the Highlands.',
      image: '/assets2/Location-05.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'South East',
      description:
        'Premium security services for Kent, Surrey, Sussex, Hampshire, Berkshire, Buckinghamshire, and Oxfordshire.',
      image: '/assets2/Location-06.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'South West',
      description:
        'Trusted security solutions for Cornwall, Devon, Somerset, Dorset, Wiltshire, and Gloucestershire.',
      image: '/assets2/Location-07.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'Wales',
      description:
        'Complete security coverage across Wales including Cardiff, Swansea, Newport, and rural Welsh communities.',
      image: '/assets2/Location-08.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'West Midlands',
      description:
        'Expert security services for Birmingham, Coventry, Wolverhampton, Staffordshire, and Warwickshire.',
      image: '/assets2/Location-09.jpg',
      pinSvg: (
        <svg
          className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
   
  ]

  return (
    <>
  

      {/* ✅ Main Regions Section */}
      <section id="regions" className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-accent mb-8">Regions We Cover</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Comprehensive security coverage across the United Kingdom with 87% nationwide reach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div
                  className="h-48 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${region.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="text-center text-white">
                    {region.pinSvg}
                    <h3 className="text-2xl font-bold">{region.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-dark mb-4 text-gray-600">{region.description}</p>
                  <Link
                    href={`https://wisek9.co.uk/regions/${region.name
                      .toLowerCase()
                      .replace(/ & /g, '-')
                      .replace(/ /g, '-')}`}
                    target="_blank"
                    className="inline-block bg-accent hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
