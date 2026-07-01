import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'work', 'awards', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-luxury-bg/95 backdrop-blur-md py-4 border-b border-gold-100/30 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center space-x-2 text-left focus:outline-none"
        >
          <span className="serif-title font-bold text-2xl tracking-widest text-luxury-charcoal transition-colors group-hover:text-gold-600">
            {DESIGNER_INFO.name}
            <span className="text-gold-accent">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { id: 'about', label: 'ABOUT' },
            { id: 'services', label: 'SERVICES' },
            { id: 'work', label: 'WORK' },
            { id: 'awards', label: 'AWARDS' },
            { id: 'contact', label: 'CONTACT' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-semibold tracking-widest transition-all duration-300 relative py-1 focus:outline-none ${
                activeSection === item.id
                  ? 'text-gold-600'
                  : 'text-luxury-charcoal/70 hover:text-luxury-charcoal'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-accent origin-left transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </nav>

        {/* CTA Button & Hire Badge */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-gold-50 border border-gold-200/50 px-3 py-1.5 rounded-full shadow-inner-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="mono-text text-[10px] font-medium text-luxury-charcoal/80 tracking-wider">
              HIRE ME FOR 2026
            </span>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center space-x-2 text-xs font-semibold tracking-widest bg-luxury-charcoal text-white hover:bg-gold-600 px-5 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
          >
            <span>CONTACT US</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <div className="flex items-center space-x-1.5 bg-gold-50 border border-gold-200/50 px-2.5 py-1 rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="mono-text text-[8px] font-semibold text-luxury-charcoal/80 tracking-widest">
              AVAILABLE
            </span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-luxury-charcoal hover:text-gold-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-luxury-bg/98 backdrop-blur-lg z-40 transition-transform duration-500 flex flex-col md:hidden border-t border-gold-100/20 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-6">
          {[
            { id: 'about', label: 'ABOUT' },
            { id: 'services', label: 'SERVICES' },
            { id: 'work', label: 'WORK' },
            { id: 'awards', label: 'AWARDS' },
            { id: 'contact', label: 'CONTACT' }
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="serif-title text-3xl font-bold tracking-widest text-luxury-charcoal hover:text-gold-600 transition-colors py-2 focus:outline-none"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="p-8 border-t border-gold-100/30 flex flex-col items-center space-y-4">
          <p className="mono-text text-xs text-luxury-charcoal/50 tracking-wider">
            {DESIGNER_INFO.email}
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-center text-xs font-semibold tracking-widest bg-luxury-charcoal text-white hover:bg-gold-600 py-4 rounded-full transition-all duration-300"
          >
            LET'S WORK TOGETHER
          </button>
        </div>
      </div>
    </header>
  );
}
