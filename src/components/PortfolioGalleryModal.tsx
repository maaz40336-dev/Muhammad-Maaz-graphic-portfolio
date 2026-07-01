import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Grid, Eye, Check } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  dimensions?: string;
}

const CATEGORIES = [
  'All Works',
  'Brand & Identity',
  'UI & UX Design',
  'Packaging Design',
  'Editorial & Print',
  'Social Media'
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // THUMBNAILS & SOCIAL MEDIA
  {
    id: "thumb-1",
    title: "Philosophy of Negative Space",
    category: "Social Media",
    image: "https://i.ibb.co/nqrm5DhW/fd56b178-53c7-411e-8075-9eda94199d8a.jpg",
    description: "An eye-catching high-conversion YouTube thumbnail featuring bold yellow typography, a shocked portrait, and vibrant green growth graphs.",
    dimensions: "1920 x 1080 px"
  },
  {
    id: "thumb-2",
    title: "High-Impact YouTube Thumbnail Suite",
    category: "Social Media",
    image: "https://i.ibb.co/WvKttYW0/758ffbcb-38ab-4cd5-a979-a03038fc0c03.jpg",
    description: "High-converting YouTube thumbnail designs tailored for growth strategy and gaming niches with bold gradients and slanted typography.",
    dimensions: "1920 x 1080 px"
  },
  {
    id: "thumb-3",
    title: "High-CTR YouTube Thumbnail Banner",
    category: "Social Media",
    image: "https://i.ibb.co/yF0CC8nL/38cf74c6-6787-45fb-8d4a-600601a9aa4a.jpg",
    description: "A high-conversion promotional banner designed to showcase professional YouTube thumbnail creation services with vibrant teal gradients.",
    dimensions: "1920 x 1080 px"
  },
  {
    id: "thumb-4",
    title: "Thumbnail Designing Masterclass",
    category: "Social Media",
    image: "https://i.ibb.co/PzFhXT5r/d6c6d60e-9558-477c-b685-7aabdb5ebe78.jpg",
    description: "High-contrast dynamic educational thumbnail layout optimized for high click-through rates and clear value-proposition checklists.",
    dimensions: "1920 x 1080 px"
  },

  // PRODUCT POSTERS & EDITORIAL/PRINT
  {
    id: "poster-1",
    title: "The Last Signal Sci-Fi Key Art",
    category: "Editorial & Print",
    image: "https://i.ibb.co/S4Nktc2X/75fda1d7-6882-422b-8701-268fa02f4080.jpg",
    description: "A cinematic movie poster featuring an astronaut in deep space holding a communication device with cosmic blue and warm orange tones.",
    dimensions: "24 x 36 inches"
  },
  {
    id: "poster-2",
    title: "Special Coffee Splash Poster",
    category: "Editorial & Print",
    image: "https://i.ibb.co/wNPpQQsV/1b59282b-250b-453d-a545-d7f6eda91803.jpg",
    description: "A dynamic promotional poster showcasing premium coffee. Features a high-speed splash effect and realistic floating coffee beans.",
    dimensions: "24 x 36 inches"
  },
  {
    id: "poster-3",
    title: "Academic Collaboration Poster",
    category: "Editorial & Print",
    image: "https://i.ibb.co/9dHRKkn/4c5be8a7-4557-4c17-90f9-b1c48c260995.jpg",
    description: "An informative academic collaboration poster designed with structured grid systems and clean white background.",
    dimensions: "18 x 24 inches"
  },

  // FLYERS & PRINT / UI
  {
    id: "flyer-1",
    title: "Roast & Brew Coffee Flyer",
    category: "Editorial & Print",
    image: "https://i.ibb.co/wNGS3qqk/e137eab7-fe42-49d0-a672-7f8ae115111e.jpg",
    description: "A warm, inviting print flyer and menu designed to showcase gourmet coffee offerings with organic brown tones and clear price mapping.",
    dimensions: "8.5 x 11 inches"
  },
  {
    id: "flyer-2",
    title: "Avant-Garde Portfolio Showcase",
    category: "UI & UX Design",
    image: "https://i.ibb.co/3YPgwnsq/ae69f897-a0d6-4728-a980-f1abca0735b4.jpg",
    description: "A comprehensive creative portfolio showcase with minimalist dark themes, elegant typography, and gold accent layouts.",
    dimensions: "8.5 x 11 inches"
  },
  {
    id: "flyer-3",
    title: "Flyer Designing System",
    category: "Editorial & Print",
    image: "https://i.ibb.co/dJMNdPR4/83658567-99e4-4a69-94e7-0a476d624185.jpg",
    description: "A structured, geometric template designed for high-impact commercial promotion, print advertising, and layout systems.",
    dimensions: "8.5 x 11 inches"
  },

  // LOGOS & BRAND/IDENTITY
  {
    id: "logo-1",
    title: "Studio Identity Badges",
    category: "Brand & Identity",
    image: "https://i.ibb.co/QvvMfz6J/3cf4ae8b-4932-4333-a20f-402e489ca685.jpg",
    description: "A collection of monochrome, vector-based identity badges featuring clean geometry and iconic classic design metaphors.",
    dimensions: "Adaptive Vector"
  },
  {
    id: "logo-2",
    title: "Bespoke Geometric Logo",
    category: "Brand & Identity",
    image: "https://i.ibb.co/MDPgnMHV/f125bf4b-262f-4f7a-92d7-4b3df0ea25c0.jpg",
    description: "A sophisticated brand mark designed using precise geometric curves and luxurious minimalist aesthetic.",
    dimensions: "Adaptive Vector"
  },

  // BUSINESS CARDS & BRAND/IDENTITY
  {
    id: "card-1",
    title: "Sophisticated Identity Business Card",
    category: "Brand & Identity",
    image: "https://i.ibb.co/WpMcCrVZ/0635042c-aa1d-4123-be97-bce78af8799b.jpg",
    description: "A premium dual-sided business card featuring deep navy blue and gold accents, precise layouts, and clean typography.",
    dimensions: "3.5 x 2.0 inches"
  },

  // PACKAGING DESIGN
  {
    id: "packaging-1",
    title: "Brew Bliss Coffee Packaging Design",
    category: "Packaging Design",
    image: "https://i.ibb.co/vxqXj4xs/b02a39bb-531f-49d0-b4c9-e3aeef457b7c.jpg",
    description: "An elegant, bespoke structural packaging design for Brew Bliss, featuring minimalist organic textures, luxury gold stamping, and dynamic typography to establish premium coffee dominance.",
    dimensions: "10 x 14 x 4 inches"
  }
];

import { ViewerImage } from '../types';

interface PortfolioGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewImage: (image: ViewerImage) => void;
}

export default function PortfolioGalleryModal({ isOpen, onClose, onViewImage }: PortfolioGalleryModalProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Works');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) {
        if (e.key === 'Escape') onClose();
        return;
      }

      if (e.key === 'ArrowRight') {
        handleNextItem();
      } else if (e.key === 'ArrowLeft') {
        handlePrevItem();
      } else if (e.key === 'Escape') {
        setActiveItemIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling while gallery is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeItemIndex, selectedCategory]);

  if (!isOpen) return null;

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All Works'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  const handleNextItem = () => {
    if (activeItemIndex === null) return;
    const nextIndex = (activeItemIndex + 1) % filteredItems.length;
    setActiveItemIndex(nextIndex);
  };

  const handlePrevItem = () => {
    if (activeItemIndex === null) return;
    const prevIndex = (activeItemIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItemIndex(prevIndex);
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const currentActiveItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] bg-white flex flex-col overflow-hidden p-4 sm:p-8 select-none border-[12px] border-[#f8f8f8]">
        {/* Gallery Header */}
        <header className="flex justify-between items-end mb-6 sm:mb-10 shrink-0">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 mb-1 font-bold">EXHIBITION PLATFORM 2026</span>
            <h1 className="text-2xl sm:text-3xl font-serif tracking-tight leading-none italic text-luxury-charcoal">
              Maaz Vans Design Archives
            </h1>
          </div>
          
          <button 
            onClick={onClose}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-gold-500 border-b border-luxury-charcoal hover:border-gold-500 pb-2 transition-colors duration-300 group cursor-pointer focus:outline-none"
            aria-label="Close Gallery"
          >
            <span>Close</span>
            <X className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90 text-gold-500" />
          </button>
        </header>

        {/* Category Filter Nav */}
        <nav className="flex gap-x-6 gap-y-2 overflow-x-auto pb-4 mb-6 border-b border-luxury-charcoal/10 scrollbar-none shrink-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors duration-300 focus:outline-none cursor-pointer relative pb-1`}
            >
              <span className={selectedCategory === cat ? 'text-luxury-charcoal font-semibold' : 'text-luxury-charcoal/40 hover:text-luxury-charcoal'}>
                {cat}
              </span>
              {selectedCategory === cat && (
                <motion.div 
                  layoutId="activeCategoryBorder" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-accent"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Gallery Grid Container */}
        <div className="flex-1 overflow-y-auto pr-1">
          {filteredItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 mb-2">Notice</span>
              <p className="font-serif italic text-lg text-luxury-charcoal/60">No archives matched this selection.</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => {
                  const isLoaded = loadedImages[item.id];
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => {
                        onViewImage({
                          image: item.image,
                          title: item.title,
                          category: item.category,
                          description: item.description,
                          dimensions: item.dimensions,
                          year: "2026",
                          role: "Lead Designer",
                          client: "Maaz Vance Archives"
                        });
                      }}
                      className="group cursor-pointer border border-luxury-charcoal/10 p-4 bg-[#fafafa] flex flex-col justify-between hover:bg-luxury-charcoal hover:text-white transition-colors duration-500 h-[360px]"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-mono tracking-tighter opacity-50 font-semibold text-gold-500">
                          0{idx + 1}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest font-mono border border-gold-accent/20 px-2 py-0.5 rounded text-gold-500 bg-gold-50/50 group-hover:bg-luxury-charcoal group-hover:border-gold-accent/40">
                          {item.category}
                        </span>
                      </div>

                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] w-full bg-[#f3f3f3] overflow-hidden border border-black/5 group-hover:border-white/10 mb-4 flex items-center justify-center">
                        {/* Shimmer loading skeleton */}
                        {!isLoaded && (
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                        )}
                        <img
                          src={item.image}
                          alt={item.title}
                          onLoad={() => handleImageLoad(item.id)}
                          loading="lazy"
                          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
                            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                          }`}
                        />
                        
                        {/* Hover Overlay with Signature Bracket */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          {/* Corner brackets */}
                          <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-gold-accent pointer-events-none" />
                          <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-gold-accent pointer-events-none" />
                          <div className="w-10 h-10 rounded-full bg-white text-luxury-charcoal flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300">
                            <Eye className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="h-px bg-current w-full opacity-10 mb-3" />
                        <h3 className="text-base font-serif italic mb-1 group-hover:text-gold-200 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] opacity-60 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Full-Screen Lightbox Backdrop */}
        <AnimatePresence>
          {currentActiveItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-[#0c0c0c] text-white flex flex-col justify-between p-4 sm:p-8"
            >
              {/* Lightbox Header */}
              <div className="flex justify-between items-center z-10">
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-mono tracking-widest text-gold-500 font-bold">
                    ARCHIVE {activeItemIndex !== null ? String(activeItemIndex + 1).padStart(2, '0') : '00'} / {String(filteredItems.length).padStart(2, '0')}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                  <span className="text-[10px] uppercase tracking-widest opacity-60 text-white">
                    {currentActiveItem.category}
                  </span>
                </div>
                <button
                  onClick={() => setActiveItemIndex(null)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-accent hover:text-gold-accent transition-colors duration-300 cursor-pointer focus:outline-none bg-black/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Image Stage */}
              <div className="flex-1 flex items-center justify-center relative my-4 sm:my-8 max-h-[60vh] sm:max-h-[70vh]">
                {/* Navigation - Prev */}
                <button
                  onClick={handlePrevItem}
                  className="absolute left-0 sm:left-4 z-10 w-12 h-12 rounded-full border border-white/10 bg-black/40 hover:bg-white hover:text-black hover:border-white flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main image container with geometric framing */}
                <div className="relative max-w-[90vw] max-h-[55vh] sm:max-h-[65vh] p-3 border border-white/5 bg-white/5 flex items-center justify-center">
                  {/* Signature Theme Gold Corner Brackets */}
                  <div className="absolute -top-1 -left-1 w-12 h-12 border-l-2 border-t-2 border-gold-accent pointer-events-none" />
                  <div className="absolute -bottom-1 -right-1 w-12 h-12 border-r-2 border-b-2 border-gold-accent pointer-events-none" />
                  
                  <motion.img
                    key={currentActiveItem.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    src={currentActiveItem.image}
                    alt={currentActiveItem.title}
                    onClick={() => {
                      onViewImage({
                        image: currentActiveItem.image,
                        title: currentActiveItem.title,
                        category: currentActiveItem.category,
                        description: currentActiveItem.description,
                        dimensions: currentActiveItem.dimensions,
                        year: "2026",
                        role: "Lead Designer",
                        client: "Maaz Vance Archives"
                      });
                    }}
                    className="max-w-full max-h-[50vh] sm:max-h-[60vh] object-contain select-none cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </div>

                {/* Navigation - Next */}
                <button
                  onClick={handleNextItem}
                  className="absolute right-0 sm:right-4 z-10 w-12 h-12 rounded-full border border-white/10 bg-black/40 hover:bg-white hover:text-black hover:border-white flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Description Panel */}
              <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 z-10">
                <div className="max-w-xl">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold block mb-2">
                    CREATIVE DETAILS
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif italic text-white mb-2 leading-tight">
                    {currentActiveItem.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {currentActiveItem.description}
                  </p>
                </div>
                {currentActiveItem.dimensions && (
                  <div className="text-left md:text-right shrink-0">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">
                      Specifications
                    </span>
                    <span className="text-xs font-mono text-gold-accent">
                      {currentActiveItem.dimensions}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium Bottom Status Bar */}
        <footer className="mt-6 pt-4 border-t border-luxury-charcoal/10 flex justify-between items-center shrink-0">
          <div className="text-[9px] uppercase tracking-widest flex gap-8 text-luxury-charcoal/50">
            <span>&copy;2026 Maaz Vance Studio</span>
            <span className="hidden sm:inline">Portfolio Exhibition Vault</span>
          </div>
          <div className="w-24 sm:w-32 h-[1px] bg-luxury-charcoal/10 relative">
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gold-accent"></div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-gold-500">
            INDEX: 01-{PORTFOLIO_ITEMS.length}
          </span>
        </footer>
      </div>
    </AnimatePresence>
  );
}
