import React from 'react';
import { TranslationStrings } from '../types';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Database, 
  LayoutDashboard, 
  Fingerprint, 
  Workflow, 
  Layers, 
  Users, 
  Zap, 
  Search, 
  PieChart,
  Terminal,
  ArrowUpRight
} from 'lucide-react';

interface Props {
  t: TranslationStrings;
}

const SystemDetails: React.FC<Props> = ({ t }) => {
  const losModules = [
    { icon: <Fingerprint size={16} />, title: "Digital ID" },
    { icon: <PieChart size={16} />, title: "Credit Scoring" },
    { icon: <ShieldCheck size={16} />, title: "Risk Control" },
    { icon: <Zap size={16} />, title: "Auto-Disburse" }
  ];

  const crmModules = [
    "Marketing Automation",
    "Sales Management",
    "Customer Support",
    "Smart Segmentation"
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Engineered Platforms</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter dark:text-white text-slate-900 leading-[0.9]">
              The Enterprise<br/><span className="text-blue-600">Ecosystem.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
             <p className="text-slate-500 dark:text-slate-400 font-light text-lg leading-relaxed max-w-sm">
               Next-generation business automation suites tailored for financial and corporate scalability.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CRM - Wide Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative p-12 md:p-16 rounded-[4rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 transition-all duration-700 hover:shadow-2xl"
          >
            <div className="flex flex-col h-full space-y-12">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-[2rem] bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-700">
                  <LayoutDashboard size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 dark:bg-blue-500/10 px-6 py-2 rounded-full">CRM V4.2</span>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-black tracking-tight dark:text-white">Customer Relationship Management</h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl">
                  {t.crmIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {crmModules.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5 group-hover:translate-x-2 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider">{m}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10 mt-auto border-t border-slate-200 dark:border-white/5 flex justify-between items-center">
                 <div className="flex gap-4">
                    {['SaaS', 'On-Premise'].map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-600 tracking-widest">{tag}</span>
                    ))}
                 </div>
                 <ArrowUpRight size={24} className="text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          </motion.div>

          {/* LOS - Taller Narrower Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 group relative p-12 md:p-16 rounded-[4rem] bg-slate-900 text-white shadow-2xl overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-dot-pattern pointer-events-none" />
            
            <div className="flex flex-col h-full space-y-12 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-[2rem] bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 group-hover:-rotate-12 transition-transform duration-700">
                  <Workflow size={32} />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-4xl font-black tracking-tight leading-tight uppercase">Loan<br/>Origination<br/>System</h3>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  {t.losIntro}
                </p>
              </div>

              <div className="space-y-4">
                {losModules.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <div className="text-emerald-500">{m.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{m.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10 mt-auto border-t border-white/10 flex items-center justify-between">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Decision Engine v2.0</span>
                 <ArrowUpRight size={24} className="text-emerald-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemDetails;