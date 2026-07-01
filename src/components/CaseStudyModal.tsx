import { motion } from 'motion/react';
import { X, Calendar, User, Briefcase, Award, Eye } from 'lucide-react';
import { Project, ViewerImage } from '../types';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
  onViewImage: (image: ViewerImage) => void;
}

export default function CaseStudyModal({ project, onClose, onViewImage }: CaseStudyModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-luxury-charcoal/95 backdrop-blur-lg flex justify-center py-6 md:py-12 px-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.98 }}
        transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        className="w-full max-w-5xl bg-luxury-bg rounded-3xl overflow-hidden shadow-2xl relative border border-gold-200/20"
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/90 text-luxury-charcoal hover:bg-gold-accent hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer focus:outline-none border border-gold-100"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Banner */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-gray-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            onClick={() => {
              onViewImage({
                image: project.image,
                title: project.title,
                category: project.category,
                description: project.description,
                client: project.client,
                role: project.role,
                year: project.year,
                tags: project.tags,
                tools: project.tools,
                challenge: project.challenge,
                solution: project.solution,
                creativeDirection: project.creativeDirection
              });
            }}
            className="w-full h-full object-cover opacity-90 scale-100 hover:scale-105 hover:brightness-110 transition-all duration-700 cursor-pointer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent" />
          
          {/* Hero text overlay */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 right-12">
            <span className="mono-text text-[10px] md:text-xs font-bold text-gold-accent tracking-widest uppercase mb-2 block">
              {project.category}
            </span>
            <h3 className="serif-title text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-3">
              {project.title}
            </h3>
            <p className="text-white/80 font-light text-sm md:text-base max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Case Study Content Grid */}
        <div className="p-8 md:p-12 space-y-12">
          
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gold-100/30 text-sm">
            <div className="flex items-start space-x-3">
              <User className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="mono-text text-[9px] font-bold text-luxury-charcoal/50 uppercase tracking-widest">CLIENT</p>
                <p className="font-semibold text-luxury-charcoal text-xs md:text-sm">{project.client}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Briefcase className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="mono-text text-[9px] font-bold text-luxury-charcoal/50 uppercase tracking-widest">ROLE</p>
                <p className="font-semibold text-luxury-charcoal text-xs md:text-sm">{project.role}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="mono-text text-[9px] font-bold text-luxury-charcoal/50 uppercase tracking-widest">YEAR</p>
                <p className="font-semibold text-luxury-charcoal text-xs md:text-sm">{project.year}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="mono-text text-[9px] font-bold text-luxury-charcoal/50 uppercase tracking-widest">TAGS</p>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="bg-gold-50 border border-gold-100 text-gold-800 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dive Narrative Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Main Narrative (Challenge & Solution) */}
            <div className="md:col-span-8 space-y-10">
              <div className="space-y-4">
                <h4 className="serif-title text-xl md:text-2xl font-bold text-luxury-charcoal flex items-center space-x-2">
                  <span className="w-1.5 h-6 bg-gold-accent block rounded-full" />
                  <span>The Challenge</span>
                </h4>
                <p className="text-luxury-charcoal/80 text-sm md:text-base leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="serif-title text-xl md:text-2xl font-bold text-luxury-charcoal flex items-center space-x-2">
                  <span className="w-1.5 h-6 bg-gold-accent block rounded-full" />
                  <span>The Solution</span>
                </h4>
                <p className="text-luxury-charcoal/80 text-sm md:text-base leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Sidebar Context (Creative Direction & Tools) */}
            <div className="md:col-span-4 space-y-8 bg-gold-50/40 p-6 md:p-8 rounded-2xl border border-gold-100/40">
              <div className="space-y-4">
                <h5 className="mono-text text-[10px] font-bold text-gold-700 tracking-wider uppercase">
                  CREATIVE DIRECTION
                </h5>
                <p className="text-luxury-charcoal text-xs md:text-sm font-light leading-relaxed">
                  {project.creativeDirection}
                </p>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-gold-100/30">
                <h5 className="mono-text text-[10px] font-bold text-gold-700 tracking-wider uppercase">
                  CRAFTING TOOLS
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-gray-200 text-luxury-charcoal text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-inner-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Project Gallery Showcase (If gallery exists) */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-gold-100/30">
              <h4 className="serif-title text-xl md:text-2xl font-bold text-luxury-charcoal flex items-center space-x-2 mb-6">
                <Eye className="w-5 h-5 text-gold-600" />
                <span>Visual Artifacts</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold-100 shadow-md">
                    <img
                      src={imgUrl}
                      alt={`${project.title} gallery frame ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      onClick={() => {
                        onViewImage({
                          image: imgUrl,
                          title: `${project.title} - Visual Artifact #${idx + 1}`,
                          category: project.category,
                          description: `Visual artifact showcase #${idx + 1} for ${project.title}. Designed with bespoke attention to detail.`,
                          client: project.client,
                          role: project.role,
                          year: project.year,
                          tags: project.tags,
                          tools: project.tools
                        });
                      }}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action Bar */}
          <div className="pt-10 border-t border-gold-100/30 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="mono-text text-[10px] font-medium text-luxury-charcoal/60">
                CASE STUDY COMPLETED
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="text-xs font-semibold tracking-widest bg-luxury-charcoal text-white hover:bg-gold-600 px-6 py-3.5 rounded-full transition-all duration-300 focus:outline-none"
            >
              CLOSE DEEP-DIVE
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
