import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>("brand-strategy");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-gold-50/30 px-6 md:px-12 border-y border-gold-100/20 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Editorial split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-16">
          <div className="lg:col-span-7">
            <span className="mono-text text-[10px] font-bold tracking-widest text-gold-600 block mb-3 uppercase">
              CAPABILITIES & OFFERS
            </span>
            <h3 className="serif-title text-4xl sm:text-5xl font-bold tracking-tight text-luxury-charcoal leading-tight">
              DESIGN <span className="text-gold-accent">EXPERTISE</span> TO TRANSFORM IDEAS INTO IMPACTFUL PRODUCTS
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="text-luxury-charcoal/70 text-sm md:text-base leading-relaxed font-light">
              From high-fidelity research and sensory branding to fluid web architectures and structural packaging, I follow a rigorous, human-centered blueprint to deliver solutions that establish cultural resonance and market success.
            </p>
          </div>
        </div>

        {/* Expandable Capabilities Accordion Grid */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  isExpanded 
                    ? 'bg-white border-gold-300 shadow-md shadow-gold-100/20' 
                    : 'bg-white/50 border-gold-100 hover:border-gold-300 hover:bg-white shadow-sm'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-6 md:space-x-12">
                    {/* Big mono number */}
                    <span className="mono-text text-xl md:text-2xl font-bold text-gold-500 select-none">
                      {service.number}
                    </span>
                    
                    {/* Title */}
                    <h4 className="serif-title text-lg md:text-xl font-bold tracking-wide text-luxury-charcoal">
                      {service.title}
                    </h4>
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isExpanded 
                      ? 'border-gold-accent bg-gold-50 text-gold-600' 
                      : 'border-gray-200 text-luxury-charcoal/60 hover:text-gold-600 hover:border-gold-300'
                  }`}>
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gold-50">
                        {/* Description */}
                        <div className="md:col-span-7 space-y-4">
                          <p className="text-luxury-charcoal/80 text-sm md:text-base leading-relaxed font-light">
                            {service.description}
                          </p>
                          <div className="flex items-center space-x-2 text-gold-600 hover:text-gold-700 transition-colors cursor-pointer group pt-2">
                            <span className="text-xs font-semibold tracking-widest uppercase">REQUEST ESTIMATE</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>

                        {/* Sub-specialties */}
                        <div className="md:col-span-5 bg-gold-50/40 p-5 rounded-xl border border-gold-100/40">
                          <p className="mono-text text-[9px] font-bold text-gold-700 tracking-wider mb-3 uppercase">
                            DELIVERABLES / SUB-SKILLS
                          </p>
                          <ul className="space-y-2">
                            {service.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-center space-x-2 text-xs text-luxury-charcoal/80">
                                <div className="w-1.5 h-1.5 bg-gold-accent rounded-full" />
                                <span className="font-light">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
