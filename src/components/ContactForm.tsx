import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, RefreshCw } from 'lucide-react';
import { DESIGNER_INFO } from '../data';

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    'Branding & Identity',
    'UI/UX Design',
    'Website Design',
    'Packaging Design',
    'Editorial & Print',
    'Social Media'
  ];

  const budgets = [
    'Under $5',
    '$5 – $10',
    '$10 – $15',
    '$15 – $25',
    '$25 – $50'
  ];

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-end server API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSelectedServices([]);
    setSelectedBudget('');
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white px-6 md:px-12 relative overflow-hidden border-t border-gold-100/20">
      
      {/* Decorative Blur Ambient Sphere */}
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-gold-200/10 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="mono-text text-[10px] font-bold tracking-widest text-gold-600 block uppercase">
              SECURE ENGAGEMENT
            </span>
            <h3 className="serif-title text-4xl sm:text-5xl font-bold tracking-tight text-luxury-charcoal leading-tight">
              LET'S BUILD SOMETHING <br />
              <span className="text-gold-accent italic font-normal">Extraordinary</span> TOGETHER
            </h3>
            <p className="text-luxury-charcoal/70 text-sm md:text-base leading-relaxed font-light">
              Are you looking to capture premium market share or design artifacts that set cultural benchmarks? Complete the brief project builder, and let's craft something memorable.
            </p>
          </div>

          {/* Location / Meta details */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-150 flex items-center justify-center text-gold-600">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="mono-text text-[9px] font-bold text-luxury-charcoal/40 uppercase tracking-widest">EMAIL ADDRESS</p>
                <a href={`mailto:${DESIGNER_INFO.email}`} className="text-sm font-semibold text-luxury-charcoal hover:text-gold-600 transition-colors">
                  {DESIGNER_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-150 flex items-center justify-center text-gold-600">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="mono-text text-[9px] font-bold text-luxury-charcoal/40 uppercase tracking-widest">DIRECT LINE</p>
                <a href={`tel:${DESIGNER_INFO.phone}`} className="text-sm font-semibold text-luxury-charcoal hover:text-gold-600 transition-colors">
                  {DESIGNER_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-150 flex items-center justify-center text-gold-600">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="mono-text text-[9px] font-bold text-luxury-charcoal/40 uppercase tracking-widest">STUDIO HEADQUARTERS</p>
                <p className="text-sm font-semibold text-luxury-charcoal">
                  {DESIGNER_INFO.location}
                </p>
              </div>
            </div>
          </div>
          
          {/* Certifications or Trust badges */}
          <div className="pt-8 border-t border-gold-100/30 flex items-center space-x-4">
            <span className="text-[10px] font-bold text-luxury-charcoal/40 tracking-widest uppercase mono-text">ESTABLISHED 2026 STUDIO • SECURE DATALINK</span>
          </div>
        </div>

        {/* Right Side: Interactive Project Builder Form */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleSubmit}
                className="space-y-8 bg-gold-50/10 p-8 md:p-10 rounded-3xl border border-gold-100 shadow-sm"
              >
                {/* Section 1: Choose Services */}
                <div className="space-y-3">
                  <label className="mono-text text-[10px] font-bold text-gold-700 tracking-wider block uppercase">
                    1. WHAT DISCIPLINARY WORK IS NEEDED?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {servicesList.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2.5 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer focus:outline-none ${
                            isSelected
                              ? 'bg-gold-600 border-gold-600 text-white shadow-md'
                              : 'bg-white border-gray-200 text-luxury-charcoal/70 hover:border-gold-300 hover:text-luxury-charcoal'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 2: Choose Budget */}
                <div className="space-y-3">
                  <label className="mono-text text-[10px] font-bold text-gold-700 tracking-wider block uppercase">
                    2. ESTIMATED PROJECT ALLOCATION (BUDGET)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {budgets.map((budget) => {
                      const isSelected = selectedBudget === budget;
                      return (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => setSelectedBudget(budget)}
                          className={`px-3 py-2.5 text-xs text-center font-semibold rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none ${
                            isSelected
                              ? 'bg-luxury-charcoal border-luxury-charcoal text-white shadow-md'
                              : 'bg-white border-gray-200 text-luxury-charcoal/70 hover:border-gold-300 hover:text-luxury-charcoal'
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Client Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="client-name" className="mono-text text-[10px] font-bold text-gold-700 tracking-wider block uppercase">
                      YOUR FULL NAME *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Charlotte Dubois"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-luxury-charcoal placeholder:text-gray-300 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="client-email" className="mono-text text-[10px] font-bold text-gold-700 tracking-wider block uppercase">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. charlotte@maison.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-luxury-charcoal placeholder:text-gray-300 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
                    />
                  </div>
                </div>

                {/* Section 4: Project Narrative */}
                <div className="space-y-2">
                  <label htmlFor="project-desc" className="mono-text text-[10px] font-bold text-gold-700 tracking-wider block uppercase">
                    TELL ME ABOUT THE VISION & TIMELINE *
                    </label>
                  <textarea
                    id="project-desc"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide a summary of the project goals, target milestones, and sensory design feelings..."
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-luxury-charcoal placeholder:text-gray-300 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 bg-luxury-charcoal text-white hover:bg-gold-600 disabled:bg-gray-300 py-4 rounded-xl font-bold text-xs tracking-widest transition-all duration-300 focus:outline-none cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>SECURED DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>DISPATCH PROJECT BRIEF</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success confirmation panel */
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-gold-50 border border-gold-300 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 border border-gold-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h4 className="serif-title text-2xl md:text-3xl font-bold text-luxury-charcoal">
                    Project Brief Received
                  </h4>
                  <p className="text-luxury-charcoal/80 text-sm md:text-base leading-relaxed font-light max-w-md">
                    Thank you, <span className="font-semibold text-gold-700">{name}</span>! Your creative dossier was safely dispatched to our director.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gold-200/50 text-left max-w-md space-y-2 text-xs">
                  <p className="font-bold text-luxury-charcoal uppercase mono-text text-[9px] text-gold-600">STUDIO ASSURANCE PLAN</p>
                  <p className="text-luxury-charcoal/70 leading-relaxed font-light">
                    Maaz Vance personally reviews all briefings. We will communicate back with a custom feasibility dossier and structural schedule within <span className="font-semibold text-luxury-charcoal">12 hours</span>.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-luxury-charcoal hover:bg-gold-600 text-white text-[10px] font-bold tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 uppercase focus:outline-none cursor-pointer"
                >
                  SUBMIT ANOTHER DOSSIER
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
