import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Grid, Filter } from 'lucide-react';
import { Project, ViewerImage } from '../types';
import { PROJECTS_DATA } from '../data';
import CaseStudyModal from './CaseStudyModal';

interface PortfolioProps {
  onViewImage: (image: ViewerImage) => void;
}

export default function Portfolio({ onViewImage }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Brand & Identity',
    'UI & UX Design',
    'Packaging Design',
    'Editorial & Print',
    'Social Media'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === selectedCategory);

  return (
    <section id="work" className="py-24 md:py-32 bg-white px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-16">
          <div className="lg:col-span-7">
            <span className="mono-text text-[10px] font-bold tracking-widest text-gold-600 block mb-3 uppercase">
              FEATURED ARTIFACTS
            </span>
            <h3 className="serif-title text-4xl sm:text-5xl font-bold tracking-tight text-luxury-charcoal leading-tight">
              SHOWCASING PROJECTS THAT DEFINE MY <span className="text-gold-accent">DESIGN APPROACH</span>
            </h3>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between h-full">
            <p className="text-luxury-charcoal/70 text-sm md:text-base leading-relaxed font-light mb-6 lg:text-right">
              A precise selection of editorial, UI/UX, and physical product design systems reflecting deep research, geometric order, and absolute typographic beauty.
            </p>
          </div>
        </div>

        {/* Categories Horizontal Scroll Bar */}
        <div className="flex items-center space-x-3 mb-12 pb-4 overflow-x-auto no-scrollbar border-b border-gold-50">
          <div className="flex items-center space-x-2 text-gold-600 shrink-0 pr-4 border-r border-gold-200/50">
            <Filter className="w-3.5 h-3.5" />
            <span className="mono-text text-[10px] font-bold tracking-wider">FILTER DISCIPLINE</span>
          </div>

          <div className="flex space-x-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-[11px] font-semibold tracking-wider rounded-full border transition-all duration-300 focus:outline-none shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-luxury-charcoal border-luxury-charcoal text-white'
                      : 'bg-gold-50/40 border-gold-100 text-luxury-charcoal/70 hover:border-gold-300 hover:text-luxury-charcoal'
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Framed Bento Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 py-20 px-8 text-center border border-dashed border-gold-200 rounded-3xl bg-gold-50/10 flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                  <Grid className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="serif-title text-xl font-bold tracking-wide text-luxury-charcoal">
                    CURATING NEW CONCEPTS
                  </h4>
                  <p className="text-xs md:text-sm text-luxury-charcoal/60 max-w-md mx-auto font-light leading-relaxed">
                    My latest visual identity blueprints, structural packaging systems, and premium UI designs are currently under client confidentiality agreements or in curation. Select custom estimate below to initiate a bespoke project layout.
                  </p>
                </div>
              </motion.div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-3xl overflow-hidden border border-gold-100/40 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Project Image Frame */}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
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
                    className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 border-b border-gold-100/30 group/img cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-95 group-hover/img:brightness-100 group-hover/img:scale-105 transition-all duration-700"
                    />
                    {/* Absolute Year Tag */}
                    <span className="absolute top-4 left-4 mono-text text-[9px] font-bold tracking-widest bg-luxury-charcoal/90 text-white px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
                      {project.year}
                    </span>

                    {/* Absolute Overlay Arrow Icon */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/95 text-luxury-charcoal flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Project Details Frame */}
                  <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-gold-accent" />
                        <span className="mono-text text-[9px] font-bold text-gold-600 tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="serif-title text-xl font-bold tracking-wide text-luxury-charcoal group-hover:text-gold-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-luxury-charcoal/60 text-xs md:text-sm font-light leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags and CTA */}
                    <div className="pt-4 border-t border-gold-50 flex flex-wrap gap-1.5 justify-between items-center">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="bg-gold-50 text-[9px] font-bold text-gold-800 px-2 py-0.5 rounded border border-gold-100/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] font-semibold text-luxury-charcoal/80 group-hover:text-gold-600 transition-colors flex items-center space-x-1">
                        <span>DEEP DIVE</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Award Showcase Banner Inside Portfolio */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-luxury-charcoal text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-gold-300/30 shadow-2xl relative overflow-hidden">
          {/* Subtle graphic lines */}
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-gold-500/10 to-transparent pointer-events-none" />
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-gold-accent rounded-full animate-ping" />
              <span className="mono-text text-[9px] font-bold text-gold-300 tracking-widest uppercase">
                COOPERATIVE PARTNERSHIP
              </span>
            </div>
            <h4 className="serif-title text-2xl md:text-3xl font-bold tracking-tight">
              Looking for a custom production package? Let's design bespoke corporate assets.
            </h4>
            <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-2xl">
              From localized identity transformations to global mobile application systems. I build tailor-made teams of elite independent artists to serve unique enterprise mandates.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gold-accent hover:bg-gold-600 text-luxury-charcoal hover:text-white font-bold text-xs tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg cursor-pointer focus:outline-none"
            >
              ACQUIRE ESTIMATE
            </button>
          </div>
        </div>

      </div>

      {/* Full-Screen Case Study Modal Portal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onViewImage={onViewImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
