
import React, { useState, useMemo, useEffect } from 'react';
import { Language, Theme } from './types';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import EngineeringShowcase from './components/EngineeringShowcase';
import TechStack from './components/TechStack';
import SystemDetails from './components/SystemDetails';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FullScreenMenu from './components/FullScreenMenu';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.MN);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen hero-gradient selection:bg-blue-600 selection:text-white">
      <Header 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        t={t} 
        onMenuToggle={toggleMenu}
      />
      
      <FullScreenMenu 
        isOpen={isMenuOpen} 
        onClose={toggleMenu} 
        t={t}
      />

      <main className="relative">
        <Hero t={t} />
        
        <div className="space-y-48 md:space-y-72 py-32 md:py-48 bg-white dark:bg-[#0a0a0a]">
          <section id="about" className="scroll-mt-32">
            <VisionMission t={t} theme={theme} />
          </section>

          <section id="values" className="scroll-mt-32">
            <EngineeringShowcase t={t} />
          </section>
          
          <section id="capabilities" className="scroll-mt-32">
            <TechStack />
          </section>

          {/* Detailed Product Sections placed under TechStack as requested */}
          <SystemDetails t={t} />
          
          <section id="team" className="scroll-mt-32">
            <Team t={t} />
          </section>
          
          <section id="contact" className="scroll-mt-32">
            <Contact t={t} theme={theme} />
          </section>
        </div>
      </main>

      <Footer t={t} theme={theme} />
    </div>
  );
};

export default App;
