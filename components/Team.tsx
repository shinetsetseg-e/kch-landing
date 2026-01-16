import React from 'react';
import { TranslationStrings } from '../types';
import { motion } from 'framer-motion';
import { Globe2, ArrowRight } from 'lucide-react';

interface Props {
  t: TranslationStrings;
}

const Team: React.FC<Props> = ({ t }) => {
  const members = [
    { name: 'А.Амарсанаа', role: 'KCH Solution Founder', country: 'MN' },
    { name: 'Ким Мижүү', role: 'CEO', country: 'KR' },
    { name: 'Б.Батбаяр', role: 'CTO', country: 'MN' },
    { name: 'Б.Нарангарвуу', role: 'Project Manager', country: 'MN' },
    { name: 'Т.Ану-Үжин', role: 'Accountant', country: 'MN' },
    { name: 'Н.Наранчимэг', role: 'UI&UX Designer', country: 'MN' },
    { name: 'Л.Бадрал', role: 'Software Engineer', country: 'MN' },
    { name: 'С.Саруул', role: 'Software Engineer', country: 'MN' },
    { name: 'Ц.Хэрлэнбаяр', role: 'Software Engineer', country: 'MN' },
    { name: 'Б.Мөнхсүлд', role: 'Software Engineer', country: 'MN' },
    { name: 'О.Тулгаа', role: 'Software Engineer', country: 'MN' },
    { name: 'О.Бат-Ирээдүй', role: 'Software Engineer', country: 'MN' },
  ];

  return (
    <section id="team" className="px-6 lg:px-12 max-w-[1600px] mx-auto py-24 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
        <div className="lg:col-span-5">
           <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Roster</span>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white text-slate-900 leading-[0.95]">
            The Engineering<br/><span className="text-blue-600">Collective.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-center lg:justify-end">
           <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
              <Globe2 size={24} className="text-blue-600" />
              <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Distributed Network</p>
                 <p className="text-sm font-bold dark:text-white">Experts operating from Mongolia & Korea</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`group relative flex flex-col ${i % 2 !== 0 ? 'md:translate-y-12' : ''}`}
          >
            <div className="h-px w-8 bg-blue-600 mb-8 group-hover:w-full transition-all duration-700" />
            
            <div className="flex justify-between items-start mb-4">
               <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                 {member.name}
               </h4>
               <span className="text-[8px] font-black px-2 py-1 bg-slate-100 dark:bg-white/10 rounded uppercase tracking-widest text-slate-400">{member.country}</span>
            </div>
            
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
              {member.role}
            </p>

            <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-blue-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      <div className="mt-32 pt-12 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-12 opacity-40">
         {['Full-stack Excellence', 'Distributed Systems', 'Agile Delivery', 'HQ: Ulaanbaatar'].map(tag => (
           <div key={tag} className="flex items-center gap-3">
             <div className="w-1 h-1 rounded-full bg-blue-600" />
             <span className="text-[9px] font-black uppercase tracking-[0.4em]">{tag}</span>
           </div>
         ))}
      </div>
    </section>
  );
};

export default Team;