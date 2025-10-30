import React from 'react';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="bg-slate-900 text-white py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Así trabaja tu bot las 24 horas</h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">Mirá una demostración real de cómo tu asistente virtual interactúa con un cliente.</p>
        <div className="relative max-w-lg mx-auto">
            <div className="w-full aspect-[9/18] bg-slate-800 rounded-[40px] shadow-2xl p-4 border-4 border-slate-700">
                <div className="w-full h-full bg-white rounded-[28px] overflow-hidden">
                    <img src="https://picsum.photos/seed/demochat/350/700" alt="Chat demo" className="w-full h-full object-cover object-top" />
                </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <a href="#contact" className="bg-violet-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-violet-700 transition-all transform hover:scale-105 shadow-lg">
                    Ver demo completa
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;