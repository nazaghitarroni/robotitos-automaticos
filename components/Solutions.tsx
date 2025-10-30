import React, { useState, useEffect, useRef } from 'react';

const StoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);
const FoodIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0c-.454-.303-.977-.454-1.5-.454V4.5A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5v11.046zM21 15.546v2.032c0 .828-.672 1.5-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-2.032" />
    </svg>
);
const BuildIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25a.75.75 0 01-.75-.75v-7.5c0-.414.336-.75.75-.75h3.522c.266 0 .52.105.707.293l2.414 2.414a.75.75 0 00.53 0l2.414-2.414c.187-.188.441-.293.707-.293h3.522a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-4.5m-4.5 0v-7.5m0 7.5c0 .414.336.75.75.75h3c.414 0 .75-.336.75-.75V13.5m0-3V4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V10.5" />
  </svg>
);
const ServiceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);


interface SolutionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    imageUrl: string;
    delay: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, imageUrl, delay }) => (
    <div className="scroll-reveal bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col border border-slate-200/80 hover:shadow-xl hover:border-violet-300" style={{ transitionDelay: `${delay}ms`}}>
        <div className="relative h-48 overflow-hidden">
            <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-white font-poppins">{title}</h3>
            </div>
        </div>
        <div className="p-6 flex-grow">
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    </div>
);


const Solutions: React.FC = () => {
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
    <section id="solutions" ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className={`container mx-auto px-6 ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-poppins">Una solución para cada negocio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Adaptamos nuestros Robotitos a las necesidades específicas de tu rubro.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SolutionCard
                icon={<StoreIcon />}
                title="Tiendas locales"
                description="Tomá pedidos, gestioná stock y coordiná entregas automáticamente."
                imageUrl="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop"
                delay={100}
            />
            <SolutionCard
                icon={<FoodIcon />}
                title="Gastronomía"
                description="Recibí pedidos y mostrá tu menú directo por WhatsApp, sin comisiones."
                imageUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop"
                delay={200}
            />
            <SolutionCard
                icon={<BuildIcon />}
                title="Comercios y Corralones"
                description="Generá presupuestos instantáneos con tus precios y productos reales."
                imageUrl="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop"
                delay={300}
            />
            <SolutionCard
                icon={<ServiceIcon />}
                title="Servicios y Profesionales"
                description="Confirmá citas, enviá recordatorios y respondé consultas frecuentes sin esfuerzo."
                imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop"
                delay={400}
            />
        </div>
      </div>
    </section>
  );
};

export default Solutions;