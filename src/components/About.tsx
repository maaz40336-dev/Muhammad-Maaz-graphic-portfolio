import { motion } from 'motion/react';
import { DESIGNER_INFO } from '../data';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '6+' },
    { label: 'Successful Projects', value: '150+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Awards & Recognitions', value: '10+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  const polaroids = [
    {
      title: 'LOGO DESIGN',
      image: 'https://i.ibb.co/MDPgnMHV/f125bf4b-262f-4f7a-92d7-4b3df0ea25c0.jpg',
      rotate: '-rotate-3 hover:-rotate-1'
    },
    {
      title: 'BRANDING DESIGN',
      image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=400&auto=format&fit=crop',
      rotate: 'rotate-2 hover:rotate-4'
    },
    {
      title: 'UI/UX DESIGN',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=400&auto=format&fit=crop',
      rotate: '-rotate-2 hover:-rotate-4'
    },
    {
      title: 'THUMBNAIL DESIGN',
      image: 'https://i.ibb.co/PzFhXT5r/d6c6d60e-9558-477c-b685-7aabdb5ebe78.jpg',
      rotate: 'rotate-1 hover:rotate-3'
    },
    {
      title: 'FLYER DESIGN',
      image: 'https://i.ibb.co/dJMNdPR4/83658567-99e4-4a69-94e7-0a476d624185.jpg',
      rotate: 'rotate-3 hover:rotate-1'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Grid: Editorial Headline, Bio, and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20">
          
          {/* Left Block: Bold Headline and Detailed Bio */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="serif-title text-4xl sm:text-5xl font-bold tracking-tight text-luxury-charcoal leading-tight"
            >
              CRAFTING <span className="text-gold-accent">DESIGNS</span> <br />
              <span className="text-gold-accent">THAT</span> CONNECT PEOPLE
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 text-luxury-charcoal/80 text-base md:text-lg font-light leading-relaxed"
            >
              <p>
                {DESIGNER_INFO.bio}
              </p>
              
              <div className="pt-4 border-l-2 border-gold-accent pl-6 space-y-2">
                <p className="font-semibold text-gold-600 text-sm tracking-wider">Designing with Purpose.</p>
                <p className="font-semibold text-luxury-charcoal text-sm tracking-wider">Creating Experiences.</p>
                <p className="font-semibold text-luxury-charcoal/60 text-sm tracking-wider">Measuring Impact.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Stats Table and Tiny Frame Profile */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center bg-gold-50/50 p-8 rounded-2xl border border-gold-100/40">
            {/* Stats list */}
            <div className="sm:col-span-8 space-y-5">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gold-200/30 text-sm"
                >
                  <span className="text-luxury-charcoal/70 font-medium tracking-wide">{stat.label}</span>
                  <span className="mono-text font-bold text-gold-600 text-base">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Framed Miniature Profile Photo */}
            <div className="sm:col-span-4 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-32 aspect-[3/4] bg-white p-2 shadow-xl border border-gold-200 rounded-lg"
              >
                <img 
                  src={DESIGNER_INFO.profileImage} 
                  alt={DESIGNER_INFO.fullName} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded filter grayscale"
                />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold-accent rounded-full border-2 border-white shadow-sm" />
              </motion.div>
            </div>
          </div>

        </div>

        {/* Lower Block: Artistic Polaroid Fanned Staggered Row */}
        <div className="pt-10 border-t border-gold-100/30">
          <div className="text-center pb-12">
            <span className="mono-text text-[10px] font-bold tracking-widest text-gold-600 uppercase">
              ART DIRECTION DISCIPLINES
            </span>
          </div>

          {/* Polaroid Grid / Stack container */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 justify-items-center">
            {polaroids.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -4 : 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03, zIndex: 10 }}
                className={`w-full max-w-[200px] bg-white p-3 pb-6 shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 ${p.rotate} cursor-pointer group`}
              >
                <div className="w-full aspect-square overflow-hidden bg-gray-50 border border-gray-100 rounded mb-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  />
                </div>
                <p className="text-center mono-text text-[10px] font-bold text-luxury-charcoal/80 tracking-wider">
                  {p.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
