import React, { useState, useEffect, useRef } from 'react';

const QuoteIcon = () => (
    <svg className="w-8 h-8 text-violet-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 8h-4c-1.833 0-3.333 1.5-3.333 3.333v8c0 1.833 1.5 3.333 3.333 3.333h4c1.833 0 3.333-1.5 3.333-3.333v-8C12.667 9.5 11.167 8 9.333 8zm14.667 0h-4c-1.833 0-3.333 1.5-3.333 3.333v8c0 1.833 1.5 3.333 3.333 3.333h4c1.833 0 3.333-1.5 3.333-3.333v-8c0-1.833-1.5-3.333-3.333-3.333z" />
    </svg>
);


const TestimonialCard: React.FC<{ name: string; quote: string; metric: string; delay: number; isVisible: boolean; }> = ({ name, quote, metric, delay, isVisible }) => (
  <div className="scroll-reveal bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 flex flex-col justify-between" style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
    <div>
        <QuoteIcon />
        <p className="text-lg text-slate-600 italic mt-4">“{quote}”</p>
    </div>
    <div className="mt-6">
      <div className="font-semibold text-slate-800 text-right mb-4">{name}</div>
      <div className="bg-violet-100 text-violet-700 font-bold p-3 rounded-md text-center">
          {metric}
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
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
    <section id="testimonials" ref={sectionRef} className="bg-slate-50 py-20 sm:py-28">
      <div className={`container mx-auto px-6 ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-poppins">Resultados que hablan por sí solos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Nuestros clientes ya están viendo los beneficios de la automatización.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard 
            name="Empanadazas"
            quote="Antes tardábamos horas en responder. Ahora todo llega directo al WhatsApp del cliente."
            metric="+400 mensajes respondidos el primer mes"
            delay={100}
            isVisible={isVisible}
          />
          <TestimonialCard 
            name="Oneway Wallstreet"
            quote="La gente pide info sobre nuestros cursos y Onewaycito les responde todo al instante."
            metric="95% de consultas respondidas al instante"
            delay={200}
            isVisible={isVisible}
          />
          <TestimonialCard 
            name="Laboratorio Dental Meza"
            quote="Simplificamos toda la coordinación de envíos y logística. Nos ahorró muchísimo tiempo."
            metric="Reducción del 80% en tiempo de gestión"
            delay={100}
            isVisible={isVisible}
          />
            <TestimonialCard 
            name="Beauty Nails"
            quote="Agendar turnos era un caos. Ahora las clientas lo hacen solas y reciben recordatorios automáticos."
            metric="+250 turnos agendados sin intervención"
            delay={200}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;