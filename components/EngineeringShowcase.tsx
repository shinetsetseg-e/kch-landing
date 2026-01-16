import React from 'react';
import { TranslationStrings } from '../types';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Users, Layers, Activity, Database, ArrowUpRight } from 'lucide-react';

interface Props {
  t: TranslationStrings;
}

const EngineeringShowcase: React.FC<Props> = ({ t }) => {
  const items = [
    { title: t.value1, icon: <Users />, desc: "Intuitive user-centric ecosystems focused on high-efficiency interactions.", span: "col-span-1 lg:col-span-8" },
    { title: t.value2, icon: <Layers />, desc: "Reliable, high-performance distributed architecture.", span: "col-span-1 lg:col-span-4" },
    { title: t.value3, icon: <Zap />, desc: "End-to-end automation of complex business logic.", span: "col-span-1 lg:col-span-4" },
    { title: t.value5, icon: <Shield />, desc: "Military-grade security integrated at every architecture layer.", span: "col-span-1 lg:col-span-8" },
  ];

  return (
    <section className="px-6 lg:px-12 max-w-[1600px] mx-auto py-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <div className="max-w-2xl">
          <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Core Principles</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white text-slate-900 leading-[0.9]">
            The Engineering<br/><span className="text-blue-600">Framework.</span>
          </h2>
        </div>
        <div className="h-px w-32 bg-slate-200 dark:bg-white/10 mb-4 hidden md:block" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-fr">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${item.span} group relative p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-700 hover:border-blue-600/30 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5`}
          >
            {/* Structural grid lines decoration */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
              <div className="grid-lines w-full h-full" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 shadow-xl border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <ArrowUpRight size={20} className="text-slate-300 dark:text-slate-700 group-hover:text-blue-600 transition-colors" />
              </div>

              <div className="mt-auto space-y-4">
                <h3 className="text-2xl font-black tracking-tight dark:text-white text-slate-900 uppercase">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringShowcase;