import React from 'react';
import { TranslationStrings, Theme } from '../types';
import { Target, Eye, Leaf, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  t: TranslationStrings;
  theme: Theme;
}

const VisionMission: React.FC<Props> = ({ t }) => {
  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="px-6 lg:px-12 max-w-[1600px] mx-auto py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Header Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
        >
          <div className="flex items-center gap-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Corporate Philosophy</span>
            <div className="h-px w-12 bg-blue-600/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white leading-[0.95]">
            Engineering<br/><span className="text-blue-600">Tomorrow.</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md">
            Our existence is defined by the relentless pursuit of architectural perfection and human-centric digital ecosystems.
          </p>
          <div className="pt-8">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 inline-flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800" />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted by Global Leaders</span>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 lg:pt-0">
          {/* Vision Card - Tall & Sophisticated */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-12 rounded-[3.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-2xl shadow-blue-500/5 md:mt-24"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] dark:opacity-[0.1] group-hover:rotate-12 transition-transform duration-1000">
              <Eye size={120} />
            </div>
            <div className="space-y-8 relative z-10">
              <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center">
                <Eye size={28} />
              </div>
              <h3 className="text-3xl font-black tracking-tight dark:text-white">{t.visionTitle}</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                {t.visionText}
              </p>
              <div className="pt-8 border-t border-slate-100 dark:border-white/5 space-y-4">
                 <div className="flex items-center gap-3 text-[9px] font-black uppercase text-blue-600 tracking-[0.2em]">
                   <Globe size={14} /> Global Standards
                 </div>
                 <div className="flex items-center gap-3 text-[9px] font-black uppercase text-emerald-500 tracking-[0.2em]">
                   <Leaf size={14} /> Sustainability First
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card - Blue & Energetic */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-12 rounded-[3.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000">
              <Target size={120} />
            </div>
            <div className="space-y-8 relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Target size={28} />
              </div>
              <h3 className="text-3xl font-black tracking-tight">{t.missionTitle}</h3>
              <p className="text-lg text-blue-50 leading-relaxed font-light">
                {t.missionText}
              </p>
              <div className="pt-12">
                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group/btn">
                  Explore Journey <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;