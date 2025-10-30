import React, { useState, useEffect, useRef } from 'react';

const FeatureIcon1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const FeatureIcon2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
const FeatureIcon3 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);
const FeatureIcon4 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface FeatureProps {
    icon: React.ReactNode;
    text: string;
    delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, text, delay }) => (
    <div className="scroll-reveal flex flex-col items-center text-center p-4 group" style={{ transitionDelay: `${delay}ms`}}>
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500 text-white mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-900">
            {icon}
        </div>
        <p className="font-semibold text-slate-700">{text}</p>
    </div>
);


const WhyUs: React.FC = () => {
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
    <section id="why-us" ref={sectionRef} className="bg-slate-50 py-20 sm:py-28">
      <div className={`container mx-auto px-6 ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-800">¿Por qué elegirnos?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Feature icon={<FeatureIcon1 />} text="Implementación en menos de 15 días" delay={100} />
            <Feature icon={<FeatureIcon2 />} text="Respuestas naturales, no robóticas" delay={200} />
            <Feature icon={<FeatureIcon3 />} text="Integraciones con Google Sheets, CRM y más" delay={300} />
            <Feature icon={<FeatureIcon4 />} text="Soporte local y trato humano 🇦🇷" delay={400} />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;