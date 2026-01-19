
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import React from 'react';
import { Theme, TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
  theme: Theme;
}

const Contact: React.FC<Props> = ({ t }) => {
  return (
    <section className="section-padding px-6 lg:px-8 max-w-[1600px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* Colorful Banner Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative rounded-[3rem] overflow-hidden p-10 md:p-14 flex flex-col justify-between min-h-[600px] shadow-2xl shadow-blue-500/20"
        >
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0 z-0 bg-slate-950">
            <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600 rounded-full blur-[120px] opacity-40 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600 rounded-full blur-[120px] opacity-30" />
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-cyan-500 rounded-full blur-[100px] opacity-20 animate-bounce" style={{ animationDuration: '10s' }} />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Let's Connect</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
                Engineering<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">the Future.</span>
              </h2>
              <p className="text-lg text-blue-100/70 font-light leading-relaxed max-w-sm">
                Бид таны техникийн дэд бүтцийг шинэ түвшинд гаргахад бэлэн байна. Манай экспертүүд таны амжилтыг архитектурлах болно.
              </p>
            </div>
          </div>
          
          <div className="relative z-10 space-y-6 pt-12">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-blue-300/60">Email Us</p>
                  <p className="font-bold text-white text-base">info@kchsolution.mn</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-indigo-300/60">Direct Call</p>
                  <p className="font-bold text-white text-base">+976 7011-XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-purple-300/60">Headquarters</p>
                  <p className="font-bold text-white text-base truncate max-w-[200px]">{t.officeAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white dark:bg-[#0d121f] p-8 md:p-12 lg:p-16 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-xl flex flex-col justify-center"
        >
          <div className="mb-10">
            <h3 className="text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">Төслийн санал илгээх</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Бидэнд хэрэгцээ шаардлагаа үлдээгээрэй, бид тантай эргэн холбогдох болно.</p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Company Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none dark:text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+976" 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none dark:text-white" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Brief</label>
              <textarea 
                rows={5} 
                placeholder="Briefly describe your requirements..." 
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none dark:text-white" 
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
              <span>{t.ctaRequest}</span>
              <Send size={20} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
