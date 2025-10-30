import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
            <a href="#hero" className="flex items-center space-x-2 mb-6">
                <span className="font-bold text-2xl text-white font-poppins">Robotitos Automáticos</span>
            </a>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
              <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
              <a href="#solutions" className="hover:text-white transition-colors">Soluciones</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Casos</a>
              <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
              <a href="#join-us" className="hover:text-white transition-colors">Trabajá con nosotros</a>
            </nav>
            <div className="flex space-x-6 mb-8">
                <SocialIcon href="https://www.instagram.com/robotitos.ai/">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.324a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM16.406 6.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://wa.me/5491144115519">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.77.46 3.45 1.32 4.95L2 22l5.25-1.42c1.45.77 3.07 1.2 4.79 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12 20.15c-1.49 0-2.93-.4-4.19-1.15l-.3-.18-3.12.84.86-3.04-.2-.32a8.04 8.04 0 01-1.23-4.38c0-4.42 3.6-8.02 8.02-8.02s8.02 3.6 8.02 8.02c0 4.42-3.6 8.02-8.02 8.02zm4.33-5.23c-.24-.12-1.42-.7-1.65-.78s-.39-.12-.56.12c-.17.24-.62.78-.76.94s-.28.18-.52.06c-1.12-.54-2.14-1.23-2.96-2.14-.64-.73-1.08-1.64-1.2-1.92s-.02-.45.08-.59c.1-.12.24-.31.36-.45s.16-.24.24-.39.12-.28.06-.52c-.06-.24-.56-1.34-.76-1.84s-.4-.42-.55-.42h-.48c-.17 0-.45.06-.68.3s-.88.86-.88 2.1c0 1.23.9 2.43 1.03 2.61.12.18 1.77 2.7 4.29 3.78 1.48.64 2.14.86 2.87.82.78-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14s-.24-.18-.52-.3z"/></svg>
                </SocialIcon>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Robotitos Automáticos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;