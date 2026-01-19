'use client';
import { motion } from 'framer-motion';
import { Activity, Code, Layers, Search, Settings } from 'lucide-react';
import React from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
}

const EngineeringShowcase: React.FC<Props> = ({ t }) => {
  const steps = [
    { 
      title: "Discovery & Consultation", 
      icon: <Search size={32} />, 
      desc: "Бид таны бизнесийн хэрэгцээг судалж, хамгийн оновчтой IT шийдлийг тодорхойлно.",
      accent: "from-blue-500 to-cyan-400"
    },
    { 
      title: "Strategy & Planning", 
      icon: <Settings size={32} />, 
      desc: "Өргөтгөх боломжтой, аюулгүй байдал хангасан замын зураглалыг боловсруулна.",
      accent: "from-emerald-500 to-teal-400"
    },
    { 
      title: "Design & Architecture", 
      icon: <Layers size={32} />, 
      desc: "Системийн архитектурыг олон улсын стандартын дагуу төлөвлөж инженерчилнэ.",
      accent: "from-purple-500 to-indigo-400"
    },
    { 
      title: "Development & QA", 
      icon: <Code size={32} />, 
      desc: "Өндөр чанартай кодчилол болон автоматжуулсан тестийн системээр баталгаажуулна.",
      accent: "from-blue-600 to-blue-400"
    },
    { 
      title: "Support & Optimization", 
      icon: <Activity size={32} />, 
      desc: "Системийн тасралтгүй ажиллагааг хангаж, тогтмол сайжруулалт хийж ажиллана.",
      accent: "from-slate-500 to-slate-300"
    }
  ];

  return (
    <section className="relative min-h-[700px] flex items-center py-24 overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-slate-950">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
          alt="Collaborative Teamwork" 
          className="w-full h-full object-cover grayscale-[0.1] scale-110 blur-[1px] opacity-100 dark:opacity-40"
        />
        {/* Deep Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 w-full">
        {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <div className="max-w-2xl">
          <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Core Principles</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white text-slate-900 leading-[0.9]">
            The Engineering<br/><span className="text-blue-600">Framework.</span>
          </h2>
        </div>
        <div className="h-px w-32 bg-slate-200 dark:bg-white/10 mb-4 hidden md:block" />
      </div>


        {/* 5-Step Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col p-8 rounded-[1.5rem] border border-slate-200/50 dark:border-white/10 overflow-hidden min-h-[320px] transition-all duration-500 bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl hover:bg-white/70 dark:hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Icon Section */}
              <div className="mb-10 text-slate-700 dark:text-white/80 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>

              {/* Title Section */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                {step.title}
              </h3>

              {/* Hover Effect: Description text reveals */}
              <div className="mt-auto">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium dark:font-light opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Decorative Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${step.accent} w-0 group-hover:w-full transition-all duration-700 ease-in-out`} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
      `}</style>
    </section>
  );
};

export default EngineeringShowcase;
