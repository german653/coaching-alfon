// src/components/MobileMenu.jsx

import { XMarkIcon } from '@heroicons/react/24/solid';

function MobileMenu({ isOpen, onClose, navItems }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)' }}
    >
      {/* Header del menú */}
      <div className="flex justify-between items-center px-6 py-5"
        style={{ borderBottom: '1px solid rgba(249,115,22,0.2)' }}>
        <a href="#inicio" onClick={onClose} className="flex items-center gap-3">
          <img
            src="/logo-coach.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover"
            style={{ border: '2px solid #f97316' }}
          />
          <span className="text-white font-bold text-lg">Alfonso Coach</span>
        </a>
        <button
          onClick={onClose}
          className="p-2 text-stone-400 hover:text-orange-400 transition-colors"
          aria-label="Cerrar menú"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Links de navegación */}
      <nav className="flex flex-col flex-grow justify-center items-center gap-4 px-8">
        {navItems.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="w-full text-center text-3xl font-black text-white hover:text-orange-400 py-4 transition-colors duration-300 border-b border-stone-800 hover:border-orange-500/30"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* CTA WhatsApp */}
      <div className="px-6 pb-10">
        <a
          href="https://wa.me/549TUNUMERO?text=Hola,%20me%20interesa%20una%20sesi%C3%B3n%20de%20coaching."
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex items-center justify-center gap-3 w-full font-bold py-4 px-8 rounded-xl text-white text-lg transition-all duration-300 hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.525 0 .285 5.253.285 11.75c0 2.227.604 4.382 1.764 6.273l-1.921 7.031 7.228-1.939c1.78.98 3.824 1.503 5.766 1.503 6.506 0 11.776-5.253 11.776-11.75S18.537 0 12.031 0z"/>
          </svg>
          ¡Consultá por WhatsApp!
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
