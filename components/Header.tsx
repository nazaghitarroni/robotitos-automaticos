import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <span className="font-bold text-xl text-slate-800 font-poppins">Robotitos Automáticos</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-slate-600 hover:text-violet-600 transition-all transform hover:-translate-y-0.5">Soluciones</a>
          <a href="#testimonials" className="text-slate-600 hover:text-violet-600 transition-all transform hover:-translate-y-0.5">Casos Reales</a>
          <a href="#contact" className="text-slate-600 hover:text-violet-600 transition-all transform hover:-translate-y-0.5">Contacto</a>
          <a href="#join-us" className="text-slate-600 hover:text-violet-600 transition-all transform hover:-translate-y-0.5">Trabajá con Nosotros</a>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-violet-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-violet-700 transition-all transform hover:scale-105">
          Quiero mi Robotito
        </a>
      </div>
    </header>
  );
};

export default Header;