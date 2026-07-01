import { motion } from 'motion/react';
import { ArrowUp, Disc, Linkedin, Instagram, Dribbble } from 'lucide-react';
import { DESIGNER_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-bg px-6 md:px-12 pt-20 pb-12 relative overflow-hidden border-t border-gold-100/20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Upper Footer: Branding and Quicklinks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Info and Copyright */}
          <div className="md:col-span-5 space-y-6">
            <span className="serif-title font-bold text-2xl tracking-widest text-luxury-charcoal">
              {DESIGNER_INFO.name}
              <span className="text-gold-accent">.</span>
            </span>
            <p className="text-luxury-charcoal/60 text-xs md:text-sm font-light leading-relaxed max-w-sm">
              An elite, award-winning creative studio crafting luxury corporate branding, high-fidelity UI/UX, and physical product experiences.
            </p>
          </div>

          {/* Column 2: Social anchors */}
          <div className="md:col-span-4 space-y-4">
            <p className="mono-text text-[10px] font-bold text-gold-600 tracking-widest uppercase">
              FOLLOW ME
            </p>
            <div className="flex items-center space-x-6">
              {[
                { label: 'Behance', url: 'https://behance.net', icon: <Disc className="w-4 h-4" /> },
                { label: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin className="w-4 h-4" /> },
                { label: 'Instagram', url: 'https://instagram.com', icon: <Instagram className="w-4 h-4" /> },
                { label: 'Dribbble', url: 'https://dribbble.com', icon: <Dribbble className="w-4 h-4" /> }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-xs text-luxury-charcoal/70 hover:text-gold-600 transition-colors group"
                >
                  <span className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    {social.icon}
                  </span>
                  <span className="font-semibold tracking-wider">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Scroll to Top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-3 bg-white hover:bg-gold-accent border border-gold-200/50 p-4 rounded-full transition-all duration-500 shadow-sm hover:shadow-lg focus:outline-none cursor-pointer"
            >
              <span className="mono-text text-[9px] font-bold tracking-widest text-luxury-charcoal/80 group-hover:text-white pl-2">
                SCROLL TO APEX
              </span>
              <div className="w-8 h-8 rounded-full bg-luxury-charcoal group-hover:bg-white text-white group-hover:text-gold-accent flex items-center justify-center transition-all duration-500">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Lower Footer: Beautiful overlapping Giant Backdrop Brand Typography */}
        <div className="relative pt-10 border-t border-gold-100/30 flex flex-col justify-center items-center">
          
          {/* Giant backdrop letters */}
          <h2 className="serif-title text-[15vw] font-black tracking-widest text-gold-accent leading-none select-none pointer-events-none opacity-90 w-full text-center">
            M A A Z
          </h2>

          {/* Cursive text overlaying the center of backdrop letters */}
          <span className="cursive-text text-3xl sm:text-4xl md:text-5xl text-luxury-charcoal absolute z-10 bottom-12 select-none pointer-events-none tracking-wide text-center">
            Designing solutions. Creating impact.
          </span>
        </div>

        {/* Metadata Copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gold-100/10 text-[10px] text-luxury-charcoal/40 mono-text font-medium tracking-widest">
          <span>ALL MATERIAL COPYRIGHTED © {currentYear} • MAAZ VANCE STUDIO</span>
          <span className="mt-2 sm:mt-0">DESIGNED BY MAAZ • MANUFACTURED IN NY</span>
        </div>

      </div>
    </footer>
  );
}
