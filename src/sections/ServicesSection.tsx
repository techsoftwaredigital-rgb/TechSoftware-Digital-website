import React, { useState } from 'react';
import {
  Globe,
  LayoutGrid,
  Smartphone,
  Building2,
  Cpu,
  Cloud,
  Code2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { ServiceDetailModal } from '../components/ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  LayoutGrid,
  Smartphone,
  Building2,
  Cpu,
  Cloud,
  Code2,
};

// Interactive 3D Perspective Tilt Card Component
const TiltCard: React.FC<{
  service: ServiceItem;
  index: number;
  onLearnMore: (s: ServiceItem) => void;
}> = ({ service, index, onLearnMore }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6.5;
    const rY = ((x - centerX) / centerX) * 6.5;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const IconComponent = iconMap[service.iconName] || Code2;

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
          transition: 'transform 0.15s ease-out, border-color 0.25s, box-shadow 0.25s',
        }}
        className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300"
      >
        {/* Dynamic internal luminous glare highlight */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(6, 182, 212, ${glarePos.opacity}), transparent 65%)`,
          }}
        />

        {/* Card Header & Icon */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-950/40 group-hover:border-cyan-400/50 group-hover:text-cyan-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 shadow-md">
              <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-3" />
            </div>
            <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
              0{index + 1} // MODULE
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
            {service.title}
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Card Footer / Interaction */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <span>{service.technologies.slice(0, 2).join(' · ')}</span>
          </div>

          <button
            onClick={() => onLearnMore(service)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
            aria-label={`Learn more about ${service.title}`}
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow node */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Engineering Disciplines</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display uppercase">
          Futuristic Digital Services
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Modular, high-performance technology capabilities engineered for ambitious businesses.
        </p>
      </div>

      {/* 8 Service Cards Grid in 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <TiltCard
            key={service.id}
            service={service}
            index={index}
            onLearnMore={(s) => setSelectedService(s)}
          />
        ))}
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForEnquiry={onSelectServiceForEnquiry}
      />
    </section>
  );
};
