import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ZoomIn, ZoomOut, Calendar, User, Briefcase, Award, Sparkles, Tag, Layers } from 'lucide-react';
import { ViewerImage } from '../types';

interface ImageDetailsViewProps {
  imageDetails: ViewerImage;
  onClose: () => void;
}

export default function ImageDetailsView({ imageDetails, onClose }: ImageDetailsViewProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Lock scroll on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] bg-[#0c0c0c] text-white flex flex-col h-screen overflow-hidden border-[12px] border-[#161616]"
    >
      {/* Top Header Navigation */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 shrink-0 z-10">
        <button
          onClick={onClose}
          className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-bold text-white hover:text-gold-accent transition-colors duration-300 group cursor-pointer focus:outline-none"
          aria-label="Back to Portfolio"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-gold-accent group-hover:bg-gold-50/10 transition-all duration-300">
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </div>
          <span>BACK TO PORTFOLIO</span>
        </button>

        <div className="hidden sm:flex items-center space-x-3 text-[10px] uppercase tracking-[0.4em] text-gold-500 font-semibold">
          <span>EXHIBITION PLATFORM // HIGH QUALITY VIEW</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Side: High Quality Image View Stage */}
        <div className="flex-1 bg-[#090909] relative flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5">
          
          {/* Accent Gold Halo behind image */}
          <div className="absolute w-[40vw] h-[40vw] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none -z-10" />

          {/* Interactive Zoom Overlay Controls */}
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="px-4 py-2 bg-black/60 border border-white/10 hover:border-gold-accent text-white hover:text-gold-accent rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 backdrop-blur-md cursor-pointer focus:outline-none"
            >
              {isZoomed ? (
                <>
                  <ZoomOut className="w-3.5 h-3.5" />
                  <span>FIT SCREEN</span>
                </>
              ) : (
                <>
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>ZOOM DETAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Image Stage Frame */}
          <div className="w-full h-full flex items-center justify-center overflow-auto no-scrollbar">
            <div 
              className={`relative p-3 border border-white/5 bg-white/5 flex items-center justify-center transition-all duration-500 ${
                isZoomed ? 'w-[150%] max-w-none h-auto md:h-[130%] cursor-zoom-out' : 'max-w-full max-h-[75vh] cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              {/* Luxury Geometric Theme Gold Corner Brackets */}
              <div className="absolute -top-1 -left-1 w-12 h-12 border-l-2 border-t-2 border-gold-accent pointer-events-none" />
              <div className="absolute -top-1 -right-1 w-12 h-12 border-r-2 border-t-2 border-gold-accent pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-12 h-12 border-l-2 border-b-2 border-gold-accent pointer-events-none" />
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-r-2 border-b-2 border-gold-accent pointer-events-none" />
              
              <motion.img
                key={imageDetails.image}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                src={imageDetails.image}
                alt={imageDetails.title}
                referrerPolicy="no-referrer"
                className={`max-w-full object-contain pointer-events-none select-none transition-all duration-500 ${
                  isZoomed ? 'max-h-none h-full' : 'max-h-[68vh]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Informational Details Sidebar */}
        <div className="w-full lg:w-[420px] xl:w-[480px] bg-[#0d0d0d] flex flex-col overflow-y-auto shrink-0 border-t lg:border-t-0 border-white/5">
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Tag & Category */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                <span className="mono-text text-[10px] font-bold text-gold-500 tracking-widest uppercase">
                  {imageDetails.category}
                </span>
              </div>
              <h2 className="serif-title text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                {imageDetails.title}
              </h2>
            </div>

            <div className="h-px bg-white/5" />

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {imageDetails.client && (
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 opacity-40 text-white">
                    <User className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="text-[9px] uppercase tracking-wider font-mono">CLIENT</span>
                  </div>
                  <p className="text-xs font-semibold text-white/90 pl-5">{imageDetails.client}</p>
                </div>
              )}
              
              {imageDetails.role && (
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 opacity-40 text-white">
                    <Briefcase className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="text-[9px] uppercase tracking-wider font-mono">ROLE</span>
                  </div>
                  <p className="text-xs font-semibold text-white/90 pl-5">{imageDetails.role}</p>
                </div>
              )}

              {imageDetails.year && (
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 opacity-40 text-white">
                    <Calendar className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="text-[9px] uppercase tracking-wider font-mono">YEAR</span>
                  </div>
                  <p className="text-xs font-semibold text-white/90 pl-5">{imageDetails.year}</p>
                </div>
              )}

              {imageDetails.dimensions && (
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 opacity-40 text-white">
                    <Layers className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="text-[9px] uppercase tracking-wider font-mono">DIMENSIONS</span>
                  </div>
                  <p className="text-xs font-semibold text-gold-accent pl-5 font-mono">{imageDetails.dimensions}</p>
                </div>
              )}
            </div>

            <div className="h-px bg-white/5" />

            {/* Narrative / Description */}
            <div className="space-y-3">
              <span className="text-[9px] uppercase tracking-widest text-gold-500 font-mono block">PROJECT STATEMENT</span>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                {imageDetails.description}
              </p>
            </div>

            {/* Challenge & Solution (Conditional Rendering) */}
            {(imageDetails.challenge || imageDetails.solution) && (
              <div className="space-y-6 pt-4 border-t border-white/5">
                {imageDetails.challenge && (
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-mono block">THE CHALLENGE</span>
                    <p className="text-xs text-white/75 font-light leading-relaxed">
                      {imageDetails.challenge}
                    </p>
                  </div>
                )}
                
                {imageDetails.solution && (
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-mono block">THE SOLUTION</span>
                    <p className="text-xs text-white/75 font-light leading-relaxed">
                      {imageDetails.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Creative Direction & Tools (Conditional Rendering) */}
            {(imageDetails.creativeDirection || (imageDetails.tools && imageDetails.tools.length > 0)) && (
              <div className="space-y-6 pt-4 border-t border-white/5">
                {imageDetails.creativeDirection && (
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-mono block">CREATIVE DIRECTION</span>
                    <p className="text-xs text-white/75 italic font-light leading-relaxed">
                      "{imageDetails.creativeDirection}"
                    </p>
                  </div>
                )}

                {imageDetails.tools && imageDetails.tools.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-mono block">TOOLS UTILIZED</span>
                    <div className="flex flex-wrap gap-1.5">
                      {imageDetails.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 border border-white/10 text-white/80 text-[10px] font-medium px-2.5 py-1 rounded-full shadow-inner"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tags (Conditional Rendering) */}
            {imageDetails.tags && imageDetails.tags.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/5">
                <span className="text-[9px] uppercase tracking-widest text-gold-500 font-mono block">CLASSIFICATION TAGS</span>
                <div className="flex flex-wrap gap-1.5">
                  {imageDetails.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[9px] font-bold px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Footer Status Bar */}
      <footer className="px-6 py-3 bg-[#0c0c0c] border-t border-white/5 shrink-0 flex justify-between items-center text-[9px] text-white/40 tracking-wider">
        <span>&copy;2026 MAAZ VANCE DESIGN ARCHIVES</span>
        <div className="flex items-center space-x-2">
          <Sparkles className="w-3 h-3 text-gold-accent animate-spin-slow" />
          <span>VERIFIED HIGHER DEFINITION BLUEPRINT</span>
        </div>
      </footer>
    </motion.div>
  );
}
