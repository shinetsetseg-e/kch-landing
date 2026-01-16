
import React from 'react';
import { TranslationStrings, Theme } from '../types';
import { Heart, Activity, Zap, Users, Shield } from 'lucide-react';

interface Props {
  t: TranslationStrings;
  theme: Theme;
}

const Values: React.FC<Props> = ({ t, theme }) => {
  const values = [
    { title: t.value1, icon: <Heart className="w-6 h-6" />, color: 'text-red-500 bg-red-50 dark:bg-red-900/20' },
    { title: t.value2, icon: <Activity className="w-6 h-6" />, color: 'text-green-500 bg-green-50 dark:bg-green-900/20' },
    { title: t.value3, icon: <Zap className="w-6 h-6" />, color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' },
    { title: t.value4, icon: <Users className="w-6 h-6" />, color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' },
    { title: t.value5, icon: <Shield className="w-6 h-6" />, color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-extrabold mb-4">{t.valuesTitle}</h3>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {values.map((v, i) => (
          <div 
            key={i} 
            className="group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-6"
          >
            <div className={`p-4 rounded-2xl ${v.color} transition-transform group-hover:scale-110`}>
              {v.icon}
            </div>
            <h4 className="font-bold text-sm md:text-base leading-tight">
              {v.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
