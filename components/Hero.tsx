import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { TranslationStrings } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Globe, Shield, Activity, Zap, Server, ChevronRight, BarChart3, Lock, Cpu } from 'lucide-react';

interface Props {
  t: TranslationStrings;
}

const LogoIcon = ({ className }: { className?: string }) => (
  <svg width="175" height="40" viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M27.745 25.8317C27.745 16.4379 34.3229 11.7419 41.7832 11.7419C44.2578 11.7157 46.7026 12.2829 48.9121 13.396C49.7204 13.8731 49.9776 14.2771 49.2426 15.9277C48.5075 17.4687 48.1404 17.7255 47.258 17.4321C45.5501 16.692 43.7135 16.293 41.852 16.2577C36.5236 16.2577 32.885 20.4366 32.885 25.8343C32.885 31.1912 36.2289 35.485 41.852 35.485C43.7135 35.4497 45.5501 35.0507 47.258 34.3106C48.1404 33.944 48.5442 34.0494 49.2792 35.7784C50.0142 37.5396 49.7936 37.7599 48.9121 38.2736C46.7208 39.4431 44.2675 40.0366 41.7832 39.9982C32.8162 39.9982 27.745 33.944 27.745 25.8343" fill="#69B6FA"></path>
    <path d="M69.0523 27.6305H58.3946V38.7481C58.3946 39.6657 57.4354 39.8486 55.8223 39.8486C54.279 39.8486 53.2501 39.6649 53.2501 38.7847V11.7419H58.3579V23.0433H69.0156V11.7419H74.1235V38.7481C74.1235 39.6657 73.1643 39.8486 71.5512 39.8486C70.0079 39.8486 68.979 39.6649 68.979 38.7847V27.6305H69.0523Z" fill="#69B6FA"></path>
    <path d="M1.83717 4.29295C1.83717 4.29295 0 5.87049 0 7.74229V28.2172H6.61452V0L1.83717 4.29295Z" fill="#69B6FA"></path>
    <path d="M14.4776 25.8692C14.4135 25.8007 14.364 25.7198 14.3324 25.6314C14.3008 25.5431 14.2876 25.4492 14.2937 25.3556C14.2987 25.1692 14.3632 24.9892 14.4776 24.8419L26.2392 11.7419H21.2046C20.3231 11.716 19.4455 11.8684 18.6245 12.1899C17.8035 12.5115 17.0561 12.9955 16.4273 13.6128L16.1334 13.9794L7.93811 23.4472V28.1807L17.75 39.9957H26.6072L14.4776 25.8692Z" fill="#1972DA"></path>
    <path d="M144.94 39.9999H141.804V26.5093H144.94V39.9999Z" fill="currentColor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M153.586 26.2834C154.564 26.2834 155.46 26.4541 156.313 26.7998C157.167 27.1455 157.905 27.6361 158.541 28.2506C159.181 28.8651 159.676 29.5822 160.048 30.4015C160.415 31.2251 160.585 32.1128 160.585 33.0644C160.585 33.9948 160.402 34.8702 160.048 35.6938C159.689 36.5131 159.181 37.2302 158.541 37.8447C157.905 38.4592 157.158 38.937 156.313 39.2955C155.468 39.6497 154.564 39.8119 153.586 39.8119C152.626 39.8119 151.709 39.6412 150.851 39.2955C149.997 38.9498 149.263 38.4592 148.623 37.8447C147.987 37.2302 147.501 36.5131 147.13 35.6938C146.763 34.8702 146.592 33.9948 146.592 33.0644C146.592 32.1128 146.775 31.2251 147.13 30.4015C147.488 29.5822 147.987 28.8651 148.623 28.2506C149.263 27.6361 149.997 27.1583 150.851 26.7998C151.709 26.4456 152.613 26.2834 153.586 26.2834ZM153.586 29.2021C153.036 29.2021 152.52 29.3006 152.033 29.5055C151.542 29.7103 151.132 29.9832 150.787 30.3288C150.441 30.6617 150.172 31.0844 149.963 31.5495C149.759 32.0146 149.664 32.5225 149.664 33.0516C149.664 33.5723 149.759 34.072 149.963 34.5329C150.172 34.998 150.441 35.4123 150.787 35.7579C151.132 36.1036 151.542 36.3722 152.033 36.577C152.52 36.7861 153.036 36.8804 153.586 36.8804C154.141 36.8804 154.658 36.7861 155.136 36.577C155.609 36.3722 156.023 36.1036 156.378 35.7579C156.736 35.4123 157.005 34.998 157.214 34.5329C157.419 34.072 157.513 33.5723 157.513 33.0516C157.513 32.5225 157.419 32.0146 157.214 31.5495C157.005 31.0844 156.736 30.6745 156.378 30.3288C156.023 29.9832 155.609 29.7103 155.136 29.5055C154.658 29.3006 154.141 29.2021 153.586 29.2021Z" fill="currentColor"></path>
    <path d="M89.0582 22.9283C89.7281 22.9283 90.3468 22.9926 90.8887 23.112C91.4264 23.2315 91.9347 23.4065 92.3914 23.6199C92.8437 23.8375 93.2573 24.0981 93.6328 24.3883C94.0126 24.6827 94.3711 25.0156 94.704 25.374L92.1222 27.3839C91.3967 26.283 90.3768 25.7195 89.0796 25.7195C88.3115 25.7195 87.7309 25.9031 87.3297 26.2615C86.9286 26.6157 86.7322 27.0598 86.7322 27.5804C86.7322 27.9048 86.83 28.1868 87.0136 28.413C87.197 28.6391 87.4492 28.8349 87.7606 29.0056C88.0764 29.1806 88.4435 29.3305 88.8532 29.4628C89.2629 29.5908 89.7069 29.7443 90.1636 29.8851C90.7354 30.0686 91.3075 30.2736 91.8836 30.4997C92.4553 30.7259 92.9846 31.0288 93.4497 31.4C93.9149 31.767 94.3033 32.2112 94.5978 32.7403C94.8879 33.2695 95.0287 33.9309 95.0287 34.7203C95.0287 35.3562 94.9008 35.9838 94.6405 36.6026C94.3802 37.2172 94.0046 37.7592 93.5138 38.2244C93.0273 38.6895 92.4126 39.0779 91.6998 39.3682C90.9829 39.6626 90.1504 39.8033 89.2328 39.8033L88.9282 39.7997C87.5253 39.7652 86.3422 39.4728 85.3619 38.9366C84.3122 38.3648 83.4116 37.6392 82.6434 36.7858L85.4987 34.6306C85.9339 35.3347 86.4632 35.8767 87.0905 36.2438C87.7177 36.6107 88.422 36.8071 89.1901 36.8071C90.0222 36.8071 90.6499 36.577 91.0938 36.1376C91.5376 35.6937 91.7511 35.1854 91.7511 34.6092C91.7511 34.2636 91.6568 33.9736 91.4478 33.7346C91.2429 33.4957 90.9829 33.2907 90.6714 33.1157C90.3556 32.945 89.9799 32.7915 89.5575 32.6634C89.135 32.5354 88.7037 32.3947 88.2599 32.2624C87.6838 32.0917 87.1246 31.8954 86.5485 31.6777C85.9766 31.4643 85.4689 31.1909 85.0122 30.8367C84.5599 30.4782 84.1928 30.0554 83.9111 29.539C83.6296 29.0184 83.4802 28.3784 83.4802 27.6018C83.4802 26.9403 83.6166 26.3341 83.8898 25.7622C84.1586 25.1904 84.5599 24.7039 85.0592 24.2815C85.5543 23.859 86.1519 23.5219 86.8305 23.2872C87.5133 23.0483 88.2602 22.9283 89.0582 22.9283Z" fill="currentColor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M103.846 26.2706C104.819 26.2706 105.716 26.4456 106.561 26.7912C107.406 27.1369 108.148 27.6233 108.788 28.2378C109.429 28.8566 109.924 29.5693 110.291 30.3929C110.658 31.2123 110.832 32.1 110.833 33.0516C110.833 33.982 110.649 34.8616 110.291 35.681C109.936 36.5046 109.429 37.2174 108.788 37.8319C108.148 38.4507 107.406 38.9242 106.561 39.2827C105.716 39.6412 104.807 39.8033 103.846 39.8033C102.873 39.8033 101.964 39.6284 101.111 39.2827C100.253 38.937 99.5189 38.4507 98.8831 37.8319C98.243 37.2174 97.7565 36.5046 97.3895 35.681C97.0225 34.8616 96.8475 33.982 96.8475 33.0516C96.8476 32.1 97.0311 31.2123 97.3895 30.3929C97.7438 29.5694 98.243 28.8565 98.8831 28.2378C99.5189 27.6233 100.253 27.1454 101.111 26.7912C101.964 26.4328 102.873 26.2706 103.846 26.2706ZM103.846 29.1893C103.296 29.1893 102.775 29.2879 102.289 29.4927C101.802 29.7017 101.392 29.9704 101.042 30.316C100.697 30.6617 100.428 31.0716 100.223 31.5367C100.018 32.0019 99.9201 32.5145 99.9201 33.0437C99.9201 33.56 100.018 34.0593 100.223 34.5244C100.428 34.9896 100.697 35.3994 101.042 35.7451C101.392 36.0907 101.802 36.3636 102.289 36.5685C102.775 36.7733 103.296 36.8718 103.846 36.8718C104.397 36.8718 104.918 36.7733 105.391 36.5685C105.869 36.3636 106.279 36.0908 106.638 35.7451C106.992 35.3995 107.265 34.9895 107.469 34.5244C107.674 34.0593 107.773 33.56 107.773 33.0437C107.773 32.5145 107.674 32.0019 107.469 31.5367C107.265 31.0716 106.992 30.6617 106.638 30.316C106.279 29.9704 105.869 29.7018 105.391 29.4927C104.918 29.2878 104.397 29.1893 103.846 29.1893Z" fill="white"></path>
    <path d="M120.784 33.7987C120.784 34.8144 121.019 35.6255 121.484 36.223C121.949 36.8162 122.675 37.1104 123.66 37.1105C124.514 37.1105 125.24 36.8077 125.803 36.1888C126.362 35.5743 126.656 34.6865 126.657 33.5301V26.292H129.772L129.78 39.782H126.686V38.0919C126.255 38.6211 125.713 39.0438 125.078 39.3468C124.437 39.6498 123.682 39.8033 122.816 39.8033C121.215 39.8033 119.952 39.3042 119.022 38.3098C118.091 37.3155 117.626 35.9286 117.626 34.1448V26.292H120.784V33.7987Z" fill="white"></path>
    <path d="M137.049 26.292H139.797V29.0831H137.049V34.1356C137.049 34.7203 137.083 35.1944 137.147 35.5528C137.211 35.9069 137.331 36.1885 137.527 36.3848C137.723 36.5768 137.992 36.6967 138.359 36.765C138.726 36.829 139.204 36.859 139.797 36.859V39.7905H139.366C138.317 39.7905 137.45 39.6926 136.746 39.5091C136.046 39.3256 135.491 39.0137 135.073 38.5784C134.651 38.1474 134.356 37.5631 134.185 36.8505C134.01 36.1377 133.912 35.2367 133.912 34.1655V29.0831H131.612V26.292H133.912V24.2388L137.049 22.0964V26.292Z" fill="white"></path>
    <path d="M115.796 39.782H112.659V22.7239H115.796V39.782Z" fill="white"></path>
    <path d="M169.531 26.2706C171.208 26.2706 172.518 26.7698 173.47 27.7641C174.422 28.7585 174.886 30.1459 174.886 31.9298V39.782H171.729V32.2753C171.729 31.2595 171.477 30.4442 170.969 29.8509C170.461 29.2578 169.706 28.9635 168.686 28.9635C167.803 28.9635 167.043 29.2792 166.437 29.8851C165.831 30.4911 165.527 31.3874 165.527 32.5438V39.7692H162.416V26.292H165.498V28.131C165.942 27.5678 166.505 27.1155 167.196 26.7784C167.887 26.4456 168.656 26.2706 169.531 26.2706Z" fill="white"></path>
    <path d="M143.37 21.256C143.989 21.256 144.462 21.4395 144.812 21.7937C145.158 22.1522 145.328 22.6257 145.328 23.2103C145.328 23.795 145.158 24.2605 144.812 24.619C144.462 24.9731 143.988 25.1482 143.37 25.1482C142.743 25.1482 142.256 24.9731 141.923 24.619C141.586 24.2605 141.415 23.795 141.415 23.2103C141.415 22.6257 141.586 22.1522 141.945 21.7937C142.303 21.4395 142.777 21.256 143.37 21.256Z" fill="white"></path>
  </svg>
);

const Hero: React.FC<Props> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = useMemo(() => [
    { 
      id: 'crm-detail',
      title: "Customer Relationship\nManagement System", 
      desc: "An intelligent omnichannel ecosystem engineered to centralize customer intelligence and automate enterprise-scale relationships.", 
      color: 'from-blue-600/10 via-white dark:via-slate-900 to-transparent', 
      accent: '#3b82f6', 
      icon: <Globe size={24} />,
      tag: "CRM Orchestrator",
      systemId: "SYSTEM-CORE-V4",
      features: ["360° View", "Automated Workflows", "National Insights"]
    },
    { 
      id: 'los-detail',
      title: "Loan Origination\nSystem (LOS)", 
      desc: "High-velocity decisioning engine architected for automated risk assessment, credit scoring, and frictionless loan lifecycle management.", 
      color: 'from-emerald-600/10 via-white dark:via-slate-900 to-transparent', 
      accent: '#10b981', 
      icon: <Shield size={24} />,
      tag: "Loan Lifecycle",
      systemId: "DECISION-ENGINE-X",
      features: ["e-KYC Ready", "Scoring Algorithms", "Fast Disbursement"]
    },
  ], []);

  const currentSlide = slides[activeIndex] || slides[0];

  const handleWheel = useCallback((e: WheelEvent) => {
    const isAtTop = window.scrollY < 10;
    if (!isAtTop) return;

    if (isLocked) {
      e.preventDefault();
      return;
    }

    const delta = e.deltaY;

    if (Math.abs(delta) > 40) {
      if (delta > 0 && activeIndex < slides.length - 1) {
        e.preventDefault();
        setIsLocked(true);
        setActiveIndex(prev => prev + 1);
        setTimeout(() => setIsLocked(false), 800);
      } else if (delta < 0 && activeIndex > 0) {
        e.preventDefault();
        setIsLocked(true);
        setActiveIndex(prev => prev - 1);
        setTimeout(() => setIsLocked(false), 800);
      }
    }
  }, [activeIndex, isLocked, slides.length]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-1000"
    >
      {/* Precision Grid & Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${currentSlide.color}`}
          />
        </AnimatePresence>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-16 relative z-20">
        
        {/* Modern Typography Column */}
        <div className="lg:col-span-6 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-blue-500/10">
                  {currentSlide.tag}
                </span>
                <div className="h-px w-8 bg-slate-200 dark:bg-slate-800" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currentSlide.systemId}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] whitespace-pre-line">
                {currentSlide.title}
              </h1>

              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light max-w-lg leading-relaxed">
                {currentSlide.desc}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {currentSlide.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => document.getElementById(currentSlide.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-10 py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold text-[12px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 flex items-center gap-4 shadow-xl shadow-blue-500/5"
                >
                  <span>Architecture Spec</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Refined Visual Column */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] max-w-[550px] group"
            >
              {/* Premium Dashboard Shell */}
              <div className="absolute inset-0 bg-white dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-700">
                
                {/* Visual Header */}
                <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                  </div>
                  <LogoIcon className="h-4 w-auto dark:text-white text-slate-900 opacity-60" />
                </div>

                <div className="p-10 space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 duration-500">
                        {currentSlide.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold dark:text-white text-slate-900 uppercase tracking-tight">Active Instance</h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Cluster: GLOBAL-01</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Synchronized
                      </span>
                    </div>
                  </div>

                  {/* Mock Metrics Area */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-4">
                      <BarChart3 size={18} className="text-slate-400" />
                      <div className="space-y-2">
                         <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full">
                           <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2 }} className="h-full bg-blue-600" />
                         </div>
                         <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Efficiency 85%</p>
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-4">
                      <Activity size={18} className="text-slate-400" />
                      <div className="space-y-2">
                         <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full">
                           <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 2, delay: 0.2 }} className="h-full bg-blue-600" />
                         </div>
                         <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Uptime 99.9%</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] font-black uppercase">U{i}</div>
                       ))}
                    </div>
                    <Lock size={14} className="text-slate-300 dark:text-slate-700" />
                  </div>
                </div>

                {/* Ambient Soft Glow */}
                <div 
                  className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[120px] opacity-10 transition-colors duration-1000"
                  style={{ backgroundColor: currentSlide.accent }}
                />
              </div>

              {/* Decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -z-10 -top-12 -left-12 opacity-5 dark:opacity-10"
              >
                <Cpu size={120} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Horizontal Navigation */}
      <div className="absolute bottom-16 right-16 flex items-center gap-12 z-40">
        <div className="flex gap-4">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => !isLocked && setActiveIndex(i)}
              className="relative py-4 group"
            >
              <div className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-12 bg-blue-600' : 'w-4 bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-400'}`} />
            </button>
          ))}
        </div>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">0{activeIndex + 1} / 0{slides.length}</span>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer text-slate-300 hover:text-blue-600 transition-colors"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.6em]">Initialize Scroll</span>
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;