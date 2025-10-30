import React, { useState, useEffect, useRef } from 'react';

const ContactForm: React.FC = () => {
    const initialFormState = {
        name: '',
        whatsapp: '',
        businessType: '',
        message: ''
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://n8n.robotitosautomaticos.com/webhook/leadsrobotitos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData(initialFormState); // Reset form on success
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section id="contact" ref={sectionRef} className="bg-slate-50 py-20 sm:py-28">
      <div className={`container mx-auto px-6 ${isVisible ? 'is-visible' : ''}`}>
        <div className="max-w-2xl mx-auto text-center scroll-reveal" style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins">¿Querés tu propio Robotito?</h2>
          <p className="text-lg text-slate-600 mt-4 mb-8">Completá tus datos y te contactamos para una demo gratuita y sin compromiso.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200/80 scroll-reveal" style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white"/>
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
              <input type="tel" name="whatsapp" id="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="+54 9 11 1234-5678" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white"/>
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1">Rubro o tipo de negocio</label>
              <select name="businessType" id="businessType" required value={formData.businessType} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white">
                <option value="">Seleccioná una opción</option>
                <option value="tienda">Tienda local</option>
                <option value="gastronomia">Gastronomía</option>
                <option value="comercio">Comercio / Corralón</option>
                <option value="servicios">Servicios / Profesional</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje (opcional)</label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Contanos un poco sobre tu negocio..." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 focus:shadow-lg transition bg-white"></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-violet-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all transform hover:scale-105 shadow-lg disabled:bg-violet-400 disabled:cursor-not-allowed flex items-center justify-center"
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
                    'Quiero mi demo 🚀'
                )}
              </button>
            </div>
             {submitStatus === 'success' && (
                <p className="text-center text-green-600 bg-green-100 p-3 rounded-lg">¡Gracias por tu interés! Nos pondremos en contacto pronto.</p>
            )}
            {submitStatus === 'error' && (
                <p className="text-center text-red-600 bg-red-100 p-3 rounded-lg">Hubo un error al enviar el formulario. Por favor, intentá de nuevo.</p>
            )}
          </form>
          <p className="text-xs text-slate-500 text-center mt-6">🔒 No compartimos tus datos. Te escribimos solo para coordinar la demo.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;