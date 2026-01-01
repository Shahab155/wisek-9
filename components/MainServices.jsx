'use client';
import {
  FaUserShield,
  FaHardHat,
  FaVideo,
  FaBell,
  FaDog,
  FaCar,
  FaUsers,
} from 'react-icons/fa';

export default function ServicesBar() {
  const services = [
    { icon: FaUserShield, label: 'Manned Guarding' },
    { icon: FaHardHat, label: 'Construction Security' },
    { icon: FaVideo, label: 'CCTV Monitoring' },
    { icon: FaBell, label: 'Alarm Response' },
    { icon: FaDog, label: 'K9 Patrol' },
    { icon: FaCar, label: 'Mobile Patrols' },
    { icon: FaUsers, label: 'Event Security' },
  ];

  return (
    <section className="py-16 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12 text-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center space-y-4 cursor-pointer transition-all duration-300"
              >
                <Icon className="text-5xl md:text-6xl text-white group-hover:text-black transition-colors duration-300" />
                <span className="text-white font-semibold text-base md:text-lg group-hover:text-black transition-colors duration-300">
                  {service.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}