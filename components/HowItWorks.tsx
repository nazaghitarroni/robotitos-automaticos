import React, { useState, useEffect, useRef } from 'react';

const StepIcon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const StepIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25H21M19.5 15.75H21M15.75 21v-1.5M10.5 4.5h3M4.5 10.5v3M10.5 19.5h3M19.5 10.5v3M9 9a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 009 15h6a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0015 9H9z" />
  </svg>
);
const StepIcon3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const HowItWorks: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className={`container mx-auto px-6 text-center ${isVisible ? 'is-visible' : ''}`}>
        <div className="scroll-reveal" style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-poppins">El proceso es simple y profesional</h2>
            <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">En tres simples pasos, tu negocio estará listo para automatizar y crecer.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          <div className="absolute top-10 left-0 w-full h-0.5 hidden md:block">
              <svg width="100%" height="100%" className="overflow-visible">
                  <line x1="16.66%" y1="0" x2="83.33%" y2="0" stroke="#e2e8f0" strokeWidth="2" />
              </svg>
          </div>

          <div className="scroll-reveal bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 z-10 group" style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
            <div className="flex justify-center items-center h-20 w-20 rounded-full bg-violet-100 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <StepIcon1 />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2 font-poppins">Te conocemos</h3>
            <p className="text-slate-600">Nos contás cómo trabaja tu negocio, tus productos, precios y el tono de tu marca.</p>
          </div>

          <div className="scroll-reveal bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 z-10 group" style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <div className="flex justify-center items-center h-20 w-20 rounded-full bg-violet-100 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <StepIcon2 />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2 font-poppins">Diseñamos tu Robotito</h3>
            <p className="text-slate-600">Creamos un Robotito con tu estilo, precios y respuestas reales para tus clientes.</p>
          </div>

          <div className="scroll-reveal bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 z-10 group" style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            <div className="flex justify-center items-center h-20 w-20 rounded-full bg-violet-100 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <StepIcon3 />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2 font-poppins">Listo para vender</h3>
            <p className="text-slate-600">Recibís consultas, presupuestos y pedidos sin mover un dedo.</p>
          </div>
        </div>
        <div className="mt-16 scroll-reveal" style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          <a href="#contact" className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-500 transition-all transform hover:scale-105 shadow-lg">
            Quiero empezar ahora 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;