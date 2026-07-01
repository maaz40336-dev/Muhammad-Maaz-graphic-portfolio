import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data';
import { ViewerImage } from '../types';
import PortfolioGalleryModal from './PortfolioGalleryModal';

interface HeroProps {
  onViewImage: (image: ViewerImage) => void;
}

export default function Hero({ onViewImage }: HeroProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-32 flex flex-col justify-between overflow-hidden px-6 md:px-12 bg-luxury-bg pb-12"
    >
      {/* Decorative Gold Light Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-gold-200/10 blur-[120px] pointer-events-none -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-[10%] right-[5%] w-[25rem] h-[25rem] rounded-full bg-gold-400/5 blur-[100px] pointer-events-none -z-10" />

      {/* Hero Central Layered Composition (M | A | [Image] | A | Z) */}
      <div className="flex-1 flex flex-row items-center justify-between w-full max-w-7xl px-4 mx-auto relative py-12 md:py-16 gap-1 sm:gap-2">
        {/* Letter M */}
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="serif-title text-[13vw] font-black text-gold-accent leading-none select-none"
        >
          M
        </motion.span>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="w-[1px] h-[8vw] bg-gold-accent/30 shrink-0 origin-center"
        />

        {/* Letter A */}
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="serif-title text-[13vw] font-black text-gold-accent leading-none select-none"
        >
          A
        </motion.span>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-[1px] h-[8vw] bg-gold-accent/30 shrink-0 origin-center"
        />

        {/* Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[22vw] sm:w-[18vw] md:w-[16vw] max-w-[240px] aspect-square z-10 select-none pointer-events-none filter drop-shadow-[0_15px_40px_rgba(197,160,89,0.25)] shrink-0"
        >
          <img
            src={DESIGNER_INFO.profileImage}
            alt={DESIGNER_INFO.fullName}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_15%] rounded-full border-2 sm:border-4 border-white shadow-lg"
          />
          {/* Subtle gold halo outline */}
          <div className="absolute inset-0 rounded-full border border-gold-300/40 animate-spin-slow pointer-events-none -z-10" />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-[1px] h-[8vw] bg-gold-accent/30 shrink-0 origin-center"
        />

        {/* Letter A */}
        <motion.span
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="serif-title text-[13vw] font-black text-gold-accent leading-none select-none"
        >
          A
        </motion.span>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="w-[1px] h-[8vw] bg-gold-accent/30 shrink-0 origin-center"
        />

        {/* Letter Z */}
        <motion.span
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="serif-title text-[13vw] font-black text-gold-accent leading-none select-none"
        >
          Z
        </motion.span>
      </div>

      {/* Asymmetric Bottom Hero Text & Actions */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-20 pt-4 border-t border-gold-100/30">
        {/* Left column: Short statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="md:col-span-4 lg:col-span-5 text-left relative pl-2 pt-2"
        >
          {/* Signature Geometric Balance Corner Bracket */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gold-accent pointer-events-none" />
          <h2 className="serif-title text-3xl sm:text-4xl font-bold leading-[1.1] text-luxury-charcoal tracking-tight">
            Designing Products <br />
            <span className="italic font-normal text-gold-500">That Make</span> <br />
            Experiences
          </h2>
        </motion.div>

        {/* Middle/Right column: Mission statement & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="md:col-span-8 lg:col-span-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:pl-12"
        >
          <p className="text-sm md:text-base text-luxury-charcoal/70 leading-relaxed font-light max-w-sm">
            I create purposeful digital experiences and impactful visual solutions that help premium brands connect and grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="group flex items-center justify-between sm:justify-start space-x-4 bg-luxury-charcoal text-white hover:bg-gold-500 px-6 py-4 rounded-full transition-all duration-300 shadow-xl focus:outline-none cursor-pointer"
            >
              <span className="text-xs font-semibold tracking-widest pl-2">CONTACT US</span>
              <div className="w-8 h-8 rounded-full bg-gold-accent flex items-center justify-center text-luxury-charcoal transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsGalleryOpen(true)}
              className="group flex items-center justify-between sm:justify-start space-x-4 bg-white text-luxury-charcoal border border-luxury-charcoal/30 hover:border-gold-accent hover:bg-gold-50/10 px-6 py-4 rounded-full transition-all duration-300 shadow-lg focus:outline-none cursor-pointer"
            >
              <span className="text-xs font-semibold tracking-widest pl-2">VIEW PORTFOLIO</span>
              <div className="w-8 h-8 rounded-full bg-gold-accent flex items-center justify-center text-luxury-charcoal transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <PortfolioGalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
        onViewImage={onViewImage}
      />
    </section>
  );
}
