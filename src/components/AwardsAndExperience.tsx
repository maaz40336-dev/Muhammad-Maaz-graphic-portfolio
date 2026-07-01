import { motion } from 'motion/react';
import { Award, Briefcase, Calendar, Star } from 'lucide-react';
import { AWARDS_DATA, EXPERIENCE_DATA } from '../data';

export default function AwardsAndExperience() {
  return (
    <section id="awards" className="py-24 md:py-32 bg-gold-50/20 px-6 md:px-12 border-y border-gold-100/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        
        {/* Left Column: Awards & Recognitions */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gold-600">
              <Award className="w-5 h-5" />
              <span className="mono-text text-[10px] font-bold tracking-widest uppercase">HONORS & RECOGNITIONS</span>
            </div>
            <h3 className="serif-title text-3xl md:text-4xl font-bold text-luxury-charcoal">
              AWARDS RECEIVED
            </h3>
            <p className="text-luxury-charcoal/60 text-xs md:text-sm font-light leading-relaxed max-w-md">
              Industry recognitions from international design bodies celebrating excellence in creative direction, typography, and visual storytelling.
            </p>
          </div>

          <div className="space-y-6">
            {AWARDS_DATA.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex gap-6 items-start pb-6 border-b border-gold-200/20 last:border-0 hover:bg-white/40 p-4 rounded-2xl transition-all duration-300"
              >
                {/* Gold star bullet */}
                <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 shrink-0">
                  <Star className="w-4 h-4 fill-gold-200" />
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="mono-text text-[11px] font-bold text-gold-700 tracking-wider">
                      {award.organization.toUpperCase()}
                    </span>
                    <span className="mono-text text-xs text-luxury-charcoal/50 font-medium">
                      {award.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-luxury-charcoal text-sm md:text-base">
                    {award.title}
                  </h4>
                  <p className="text-xs md:text-sm text-luxury-charcoal/60 font-light italic">
                    {award.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional Experience */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gold-600">
              <Briefcase className="w-5 h-5" />
              <span className="mono-text text-[10px] font-bold tracking-widest uppercase">CAREER TIMELINE</span>
            </div>
            <h3 className="serif-title text-3xl md:text-4xl font-bold text-luxury-charcoal">
              PROFESSIONAL HISTORY
            </h3>
            <p className="text-luxury-charcoal/60 text-xs md:text-sm font-light leading-relaxed max-w-md">
              Over half a decade of leading brand transformations, collaborative engineering sprints, and designing sensory physical and digital materials.
            </p>
          </div>

          <div className="space-y-8 relative pl-6 border-l border-gold-200">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative space-y-2 hover:bg-white/40 p-5 rounded-2xl border border-transparent hover:border-gold-100 transition-all duration-300"
              >
                {/* Custom timeline bullet node */}
                <div className="absolute -left-[31px] top-7 w-4 h-4 rounded-full bg-luxury-bg border-4 border-gold-accent group-hover:bg-gold-accent transition-colors duration-300" />

                {/* Duration */}
                <div className="flex items-center space-x-2 text-gold-700">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="mono-text text-[11px] font-bold tracking-wide">
                    {exp.duration}
                  </span>
                </div>

                {/* Role and Company */}
                <div>
                  <h4 className="serif-title text-base md:text-lg font-bold text-luxury-charcoal leading-snug">
                    {exp.role}
                  </h4>
                  <p className="text-xs md:text-sm text-gold-800 font-semibold italic">
                    {exp.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-luxury-charcoal/70 text-xs md:text-sm leading-relaxed font-light">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
