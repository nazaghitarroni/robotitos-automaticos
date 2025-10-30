import React, { useState, useEffect, useRef } from 'react';

const JoinUs: React.FC = () => {
    const initialFormState = {
        name: '',
        email: '',
        role: '',
        portfolio: ''
    };
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://n8n.robotitosautomaticos.com/webhook/applicationsrobotitos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData(initialFormState);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Application submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section id="join-us" ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${isVisible ? 'is-visible' : ''}`}>
        <div className="relative h-80 md:h-full rounded-lg overflow-hidden scroll-reveal" style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
            <img src="https://picsum.photos/seed/team/600/500" alt="Team working on bots" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-violet-800/50"></div>
        </div>
        <div className="scroll-reveal" style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">¿Querés sumarte al equipo?</h2>
          <p className="text-lg text-slate-600 mb-6">
            Buscamos mentes curiosas que amen la automatización, el diseño y la atención al cliente. Si sabés de n8n, diseño, ventas o IA, completá el formulario y charlamos.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
             <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="join-name" className="sr-only">Nombre</label>
                    <input type="text" name="name" id="join-name" required value={formData.name} onChange={handleChange} placeholder="Nombre" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white"/>
                </div>
                <div>
                    <label htmlFor="join-email" className="sr-only">Email</label>
                    <input type="email" name="email" id="join-email" required value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white"/>
                </div>
            </div>
            <div>
              <label htmlFor="role" className="sr-only">Rol/Interés</label>
              <select name="role" id="role" required value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white text-slate-500">
                <option value="">Tu rol o interés...</option>
                <option value="developer">Developer (n8n/Make)</option>
                <option value="designer">Diseño UX/UI</option>
                <option value="sales">Ventas y Marketing</option>
                <option value="ia">Especialista IA</option>
              </select>
            </div>
            <div>
              <label htmlFor="portfolio" className="sr-only">Link a portfolio o LinkedIn</label>
              <input type="url" name="portfolio" id="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Link a Portfolio o LinkedIn" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white"/>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-all transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
              >
                 {isSubmitting ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                    </>
                ) : (
                    'Enviar aplicación'
                )}
              </button>
            </div>
            {submitStatus === 'success' && (
                <p className="text-center text-green-600 bg-green-100 p-3 rounded-lg">¡Gracias por tu interés! Revisaremos tu postulación.</p>
            )}
            {submitStatus === 'error' && (
                <p className="text-center text-red-600 bg-red-100 p-3 rounded-lg">Hubo un error al enviar tu postulación. Por favor, intentá de nuevo.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;