import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-violet-50/50 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight font-poppins mb-4">
            Automatizá tu negocio. Respondé 24/7. Vendé sin límites.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
            Robotitos personalizados para emprendedores, pymes y negocios que quieren escalar sin perder el trato humano.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#contact" className="bg-violet-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all transform hover:scale-105 shadow-lg">
              Quiero mi Robotito
            </a>
            <a href="#how-it-works" className="bg-white text-violet-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-100 transition-all transform hover:scale-105 border-2 border-violet-200">
              Ver cómo funciona
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="w-80 h-[580px] bg-slate-800 rounded-[40px] shadow-2xl p-4 border-4 border-slate-600 transform md:rotate-6">
            <div className="w-full h-full bg-white rounded-[28px] overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-14 bg-teal-500 flex items-center px-4">
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div className="ml-3">
                  <p className="font-bold text-white">Asistente de Negocio</p>
                  <p className="text-xs text-white/80">en línea</p>
                </div>
              </div>
              <div className="pt-16 px-3 space-y-3">
                <div className="flex justify-end animate-fade-in-up animation-delay-300">
                  <div className="max-w-xs bg-violet-500 text-white p-3 rounded-lg rounded-br-none">
                    <p className="text-sm">Hola, ¿tienen stock de la remera negra en talle M?</p>
                  </div>
                </div>
                <div className="animate-fade-in-up animation-delay-600">
                  <div className="max-w-xs bg-slate-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-sm">Hola 👋 ¡Gracias por escribir! Sí, tenemos stock.</p>
                  </div>
                </div>
                 <div className="flex justify-end animate-fade-in-up animation-delay-900">
                  <div className="max-w-xs bg-violet-500 text-white p-3 rounded-lg rounded-br-none">
                    <p className="text-sm">¡Buenísimo! ¿Cómo hago para comprar?</p>
                  </div>
                </div>
                <div className="animate-fade-in-up animation-delay-1200">
                   <div className="max-w-xs bg-slate-100 p-3 rounded-lg rounded-tl-none">
                     <p className="text-sm">Perfecto. Ya te preparé el pedido. Podés pagar y coordinar el envío acá mismo ✅</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Notch of the phone mockup. Adjusted position to avoid overlapping the screen content. */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-lg"></div>
          </div>
        </div>
      </div>
      {/* Fix: The `jsx` prop is not a standard attribute for the `<style>` tag in React.
          This was causing a TypeScript error. Removed the prop to use a standard style element. */}
      <style>{`
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
            opacity: 0;
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </section>
  );
};

export default Hero;