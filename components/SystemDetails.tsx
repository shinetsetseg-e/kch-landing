'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  BarChart,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Database,
  FileText,
  Fingerprint,
  Layers,
  LayoutGrid,
  Settings,
  ShieldCheck,
  UserCheck,
  Wallet,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
}

const SystemDetails: React.FC<Props> = ({ t }) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { 
      id: 'crm',
      title: "Enterprise CRM Ecosystem", 
      intro: "Манай CRM систем нь харилцагчидтайгаа харилцах, тэдний мэдээллийг удирдах, борлуулалтаа нэмэгдүүлэх, үйлчилгээгээ сайжруулахад туслах зорилготой үндэсний онцлогийг шингээн хөгжүүлж буй динамик систем юм.",
      principles: [
        "Харилцагч төвтэй байх", 
        "Мэдээллийн нэгдмэл ба аюулгүй байдал", 
        "Хүний оролцоогүй автоматжуулалт", 
        "Ойлгомжтой UX интерфейс"
      ],
      modules: [
        { name: "Маркетингийн автоматжуулалт", icon: <Zap size={18} /> },
        { name: "Борлуулалтын удирдлага", icon: <BarChart size={18} /> },
        { name: "Харилцагчийн үйлчилгээ", icon: <UserCheck size={18} /> },
        { name: "Харилцагчийн сегмент", icon: <LayoutGrid size={18} /> },
        { name: "Авлага барагдуулалт", icon: <Briefcase size={18} /> },
        { name: "Өр цуглуулах систем", icon: <Database size={18} /> }
      ],
      solutions: [
        "Омничаннел удирдлага", 
        "API Интеграци", 
        "Эрхийн тохиргоо", 
        "Live Dashboard", 
        "Шинжилгээний модуль"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      accent: "blue"
    },
    { 
      id: 'los',
      title: "Loan Origination Ecosystem", 
      intro: "Зээлийн үйл явцыг хурдан, үр ашигтай болгож, технологийн дэвшлийг ашиглаж, өрсөлдөх давуу талаа бий болгоно.",
      advantages: [
        "Зээлийн үйл явцыг хурдан болгоно", 
        "Процессийн эрсдэлийг бууруулна", 
        "Зардал 90% хүртэл хэмнэнэ", 
        "Ил тод шийдвэр гаргалт", 
        "Сэтгэл ханамж 100%"
      ],
      modules: [
        { name: "e-KYC / Цахим гарын үсэг", icon: <Fingerprint size={18} /> },
        { name: "Зээлийн скор тооцоолол", icon: <Activity size={18} /> },
        { name: "Үнэлгээний систем", icon: <Wallet size={18} /> },
        { name: "Автомат зээл олголт", icon: <Zap size={18} /> },
        { name: "Документ менежмент", icon: <FileText size={18} /> },
        { name: "Шийдвэр гаргах модуль", icon: <ShieldCheck size={18} /> }
      ],
      solutions: [
        "Систем Интеграци", 
        "Аудит лог систем", 
        "Тайлан, дашбоард", 
        "Customizable Workflow"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bb1c003f07df?auto=format&fit=crop&q=80&w=1200",
      accent: "blue"
    }
  ];

  const current = services[activeService];

  return (
    <section  id="products"  className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Standardized Left Header */}
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

        <div className="bg-slate-50 dark:bg-[#080e1e] rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/5 flex flex-col lg:flex-row min-h-[750px]">
          
          {/* Left: Interactive Nav */}
          <div className="lg:w-1/5 bg-[#050b1a] p-8 flex flex-col justify-start space-y-3 pt-16">
            <span className="text-blue-500 font-black text-[9px] tracking-[0.5em] uppercase mb-8 ml-4">Engines</span>
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`flex items-center justify-between p-6 rounded-[1.5rem] text-left transition-all duration-500 group ${
                  activeService === i 
                  ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)]' 
                  : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="space-y-0.5">
                  <p className="text-[7px] font-black uppercase tracking-widest opacity-60">System Mode</p>
                  <span className="text-sm font-black uppercase tracking-widest">{service.id.toUpperCase()}</span>
                </div>
                {activeService === i && <ChevronRight size={20} className="animate-pulse" />}
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="lg:w-4/5 p-8 lg:p-16 bg-white dark:bg-[#0a0f1d]/50 flex flex-col overflow-y-auto no-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tighter uppercase leading-none">
                    {current.title}
                  </h3>
                  <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-4xl">
                    {current.intro}
                  </p>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4 space-y-8">
                    <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                      <Settings size={16} /> Technical Blueprint
                    </h4>
                    <div className="space-y-3">
                      {(current.principles || current.advantages).map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-slate-100/50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 group hover:border-blue-500/30 transition-all">
                          <CheckCircle2 className="text-blue-500 shrink-0" size={16} />
                          <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-8">
                    <div className="flex items-center justify-between">
                       <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                        <Layers size={16} /> Core Infrastructure Modules
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {current.modules.map((module, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="relative p-6 rounded-[2rem] bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-white/10 flex flex-col items-start gap-4 group shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            {module.icon}
                          </div>
                          <div className="space-y-1">
                            <p className="text-[9px] font-black dark:text-white/40 text-slate-400 uppercase tracking-widest">Mod-{i.toString().padStart(2, '0')}</p>
                            <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight leading-snug">{module.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-8 mt-8 border-t border-slate-100 dark:border-white/5">
                       <div className="flex flex-wrap gap-2">
                        {current.solutions.map((sol, i) => (
                          <span key={i} className="px-4 py-2 bg-blue-600/5 text-blue-600 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] border border-blue-600/10 hover:bg-blue-600 hover:text-white transition-all">
                            {sol}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDetails;