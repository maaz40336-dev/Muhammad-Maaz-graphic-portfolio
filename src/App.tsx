import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AwardsAndExperience from './components/AwardsAndExperience';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ImageDetailsView from './components/ImageDetailsView';
import { ViewerImage } from './types';

export default function App() {
  const [activeImageView, setActiveImageView] = useState<ViewerImage | null>(null);

  // Page load scroll alignment
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Elite reading indicator scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-luxury-bg text-luxury-charcoal selection:bg-gold-accent selection:text-white">
      
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Persistent Elegant Header Navbar */}
      <Header />

      {/* Main Page Layout Stack */}
      <main className="relative z-10">
        {/* 1. Hero Spotlight Poster Section */}
        <Hero onViewImage={setActiveImageView} />

        {/* 2. Biography, stats & polaroid fanned cards */}
        <About />

        {/* 3. Numbered capabilities & dropdown expanders */}
        <Services />

        {/* 4. Filterable deep-dive visual grid gallery */}
        <Portfolio onViewImage={setActiveImageView} />

        {/* 5. Honors table and professional timeline */}
        <AwardsAndExperience />

        {/* 6. Scattered client avatars and dynamic quotation card */}
        <Testimonials />

        {/* 7. Multi-select custom project planner and email form */}
        <ContactForm />
      </main>

      {/* 8. Large overlapping footer signature section */}
      <Footer />

      {/* 9. High-Quality Full-Screen Image Details Page / Viewer */}
      <AnimatePresence>
        {activeImageView && (
          <ImageDetailsView
            imageDetails={activeImageView}
            onClose={() => setActiveImageView(null)}
          />
        )}
      </AnimatePresence>
      
    </div>
  );
}
