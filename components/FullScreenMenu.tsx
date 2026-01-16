
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Download } from 'lucide-react';
import { TranslationStrings } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationStrings;
}

const FullScreenMenu: React.FC<Props> = ({ isOpen, onClose, t }) => {
  const menuItems = [
    { id: 'about', label: 'Бидний тухай' },
    { id: 'products', label: 'Бидний бүтээгдэхүүн' },
    { id: 'capabilities', label: 'Technology Stack' },
    { id: 'team', label: 'Хамт олон' },
    { id: 'contact', label: 'Холбогдох' },
  ];

  const handleLinkClick = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 p-4 hover:rotate-90 transition-transform duration-500"
            aria-label="Close menu"
          >
            <X size={48} className="text-slate-900 dark:text-white stroke-[1.5]" />
          </button>

          <nav className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "circOut" }}
                className="group flex items-center outline-none"
              >
                <span className="font-serif text-3xl md:text-6xl lg:text-7xl tracking-tighter text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 flex flex-col items-center space-y-4"
          >
            <a href="#" className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all group">
              <Download size={14} className="group-hover:translate-y-1 transition-transform" />
              <span>company profile</span>
            </a>
            <a href="mailto:info@kchsolution.mn" className="flex items-center space-x-3 text-xs opacity-40 hover:opacity-100 transition-all">
              <Mail size={14} />
              <span>info@kchsolution.mn</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
