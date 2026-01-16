import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Code, ShieldCheck, Cpu, Terminal } from 'lucide-react';

const TechStack: React.FC = () => {
  const stack = [
    { category: "Cloud & Infra", icon: <Cloud size={24} className="text-blue-500" />, items: ["AWS Ecosystem", "Kubernetes", "Docker"], proficiency: 95 },
    { category: "Backend Engine", icon: <Database size={24} className="text-emerald-500" />, items: ["Node.js", "PostgreSQL", "Redis"], proficiency: 98 },
    { category: "Frontend Core", icon: <Code size={24} className="text-purple-500" />, items: ["React / Next.js", "TypeScript", "Tailwind"], proficiency: 96 },
    { category: "Security Layers", icon: <ShieldCheck size={24} className="text-red-500" />, items: ["OAuth 2.0", "AES Encryption", "WAF"], proficiency: 94 },
    { category: "Decision Logic", icon: <Cpu size={24} className="text-amber-500" />, items: ["ML Models", "Risk Algos", "Engines"], proficiency: 90 },
    { category: "Automation", icon: <Terminal size={24} className="text-slate-500" />, items: ["Actions", "ArgoCD", "ELK"], proficiency: 92 }
  ];

  return (
    <section id="capabilities" className="px-6 lg:px-12 max-w-[1600px] mx-auto py-24 relative overflow-hidden">
      {/* Decorative Blueprint Line */}
      <div className="absolute top-0 right-0 h-full w-px bg-slate-200 dark:bg-white/10 hidden lg:block -translate-x-[400px]" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Header */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
          <div className="flex items-center gap-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Technical Stack</span>
            <div className="h-px w-8 bg-blue-600/30" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter dark:text-white text-slate-900 leading-[0.95]">
            The Modern<br/>Arsenal.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-sm">
            We leverage a Tier-1 technical foundation to ensure your platform is built for global-scale performance.
          </p>
          <div className="flex gap-4 pt-6">
            <div className="flex flex-col">
              <span className="text-3xl font-black dark:text-white">99.9%</span>
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Uptime Standard</span>
            </div>
            <div className="w-px h-12 bg-slate-100 dark:bg-white/10 mx-4" />
            <div className="flex flex-col">
              <span className="text-3xl font-black dark:text-white">12ms</span>
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Avg Latency</span>
            </div>
          </div>
        </div>

        {/* Right Side: Asymmetric Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 lg:pt-0">
          {stack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/5 ${i % 3 === 0 ? 'md:translate-y-12' : ''}`}
            >
              <div className="flex justify-between items-center mb-10">
                <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="h-1.5 w-16 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} whileInView={{ width: `${tech.proficiency}%` }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-blue-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-black mb-6 tracking-tight dark:text-white uppercase">{tech.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, j) => (
                  <span key={j} className="text-[9px] font-bold px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 uppercase tracking-widest border border-slate-100 dark:border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;