
import React from 'react';
import { TranslationStrings } from '../types';
import { motion } from 'framer-motion';
import { Database, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  t: TranslationStrings;
}

const Products: React.FC<Props> = ({ t }) => {
  const products = [
    {
      title: t.product1Title,
      desc: t.product1Desc,
      icon: <Database />,
      features: ["Enterprise Architecture", "Customer Insights", "Scalable Cloud Node"]
    },
    {
      title: t.product2Title,
      desc: t.product2Desc,
      icon: <Workflow />,
      features: ["Algorithmic Decisioning", "Risk Management Engine", "Automated Workflows"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Product Ecosystem</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none">{t.productTitle}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-light max-w-sm">
            High-integrity digital platforms architected for mission-critical business automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 lg:p-16 rounded-[2.5rem] glass hover:border-blue-500 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                {/* Fix: cast to React.ReactElement<any> to allow setting 'size' via cloneElement */}
                {React.cloneElement(product.icon as React.ReactElement<any>, { size: 180 })}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg shadow-blue-500/20">
                  {/* Fix: cast to React.ReactElement<any> to allow setting 'size' via cloneElement */}
                  {React.cloneElement(product.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">{product.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-10 font-light leading-relaxed">
                  {product.desc}
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-12">
                  {product.features.map((feat, j) => (
                    <div key={j} className="flex items-center space-x-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <button className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-all group/btn">
                    <span>{t.viewDetails}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
