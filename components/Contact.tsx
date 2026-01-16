
import React from 'react';
import { TranslationStrings, Theme } from '../types';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  t: TranslationStrings;
  theme: Theme;
}

const Contact: React.FC<Props> = ({ t }) => {
  return (
    <section className="section-padding px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <div className="lg:col-span-5 space-y-10">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Let's Connect</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Engineering<br/>the Future.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Ready to transform your technical infrastructure? Our team of experts is here to architect your success.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email Us</p>
                <p className="font-bold text-lg">info@kchsolution.mn</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Direct Call</p>
                <p className="font-bold text-lg">+976 7011-XXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Headquarters</p>
                <p className="font-bold text-lg">{t.officeAddress}</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl relative"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Company Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+976" 
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Project Brief</label>
              <textarea 
                rows={5} 
                placeholder="Briefly describe your requirements..." 
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none" 
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
