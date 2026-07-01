import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white px-6 md:px-12 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-[30%] right-[15%] w-80 h-80 rounded-full bg-gold-100/10 blur-[80px] pointer-events-none -z-10 animate-pulse duration-7000" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 relative">
        
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2 text-gold-600">
            <MessageSquare className="w-4 h-4" />
            <span className="mono-text text-[10px] font-bold tracking-widest uppercase">CLIENT ENDORSEMENTS</span>
          </div>
          <h3 className="serif-title text-3xl md:text-4xl font-bold text-luxury-charcoal">
            STORIES FROM OUR CLIENTS
          </h3>
        </div>

        {/* Central Card with Active Testimonial */}
        <div className="w-full max-w-3xl min-h-[220px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-gold-100/40 border border-gold-200/50 p-8 md:p-12 rounded-3xl relative text-left shadow-inner-sm"
            >
              {/* Giant Gold Quote Icon */}
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-gold-accent opacity-20 transform -rotate-12" />
              
              <div className="space-y-6">
                <p className="serif-title text-base md:text-xl font-medium text-luxury-charcoal leading-relaxed italic">
                  "{TESTIMONIALS_DATA[activeIndex].quote}"
                </p>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-gold-200/30">
                  <img
                    src={TESTIMONIALS_DATA[activeIndex].avatar}
                    alt={TESTIMONIALS_DATA[activeIndex].author}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-accent"
                  />
                  <div>
                    <h5 className="font-bold text-sm md:text-base text-luxury-charcoal leading-none">
                      {TESTIMONIALS_DATA[activeIndex].author}
                    </h5>
                    <p className="mono-text text-[9px] font-bold text-gold-700 tracking-wider mt-1 uppercase">
                      {TESTIMONIALS_DATA[activeIndex].role}, {TESTIMONIALS_DATA[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatar Selection Cluster */}
        <div className="flex justify-center items-center gap-4 pt-4">
          {TESTIMONIALS_DATA.map((client, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={client.id}
                onClick={() => setActiveIndex(idx)}
                className="focus:outline-none relative group cursor-pointer"
                aria-label={`View testimonial from ${client.author}`}
              >
                <div
                  className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-500 scale-100 group-hover:scale-105 ${
                    isActive 
                      ? 'border-gold-accent ring-4 ring-gold-100 scale-110' 
                      : 'border-transparent filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                  }`}
                >
                  <img
                    src={client.avatar}
                    alt={client.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Micro-dot Indicator */}
                {isActive && (
                  <span className="absolute -bottom-2 left-[44%] w-1.5 h-1.5 bg-gold-accent rounded-full" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
