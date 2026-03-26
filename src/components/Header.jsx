// src/components/Header.jsx

import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import MobileMenu from './MobileMenu';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Contacto', href: '#contacto' },
];

function Header({ isMenuOpen, setIsMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      style={scrolled ? { borderBottom: '1px solid rgba(249,115,22,0.15)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300"
                style={{ background: 'rgba(249,115,22,0.4)' }} />
              <img
                src="/logo-coach.jpg"
                alt="Logo del Coach"
                className="h-12 w-12 rounded-full object-cover shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="hidden sm:block font-bold text-white text-lg tracking-tight">
              Alfonso Coach
            </span>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-stone-300 hover:text-white font-medium transition-colors duration-300 rounded-lg hover:bg-white/5 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                  style={{ background: '#f97316' }} />
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-4 font-semibold py-2 px-5 rounded-lg text-gray-900 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
            >
              Sesión Gratuita
            </a>
          </nav>

          {/* Hamburguesa */}
          <button
            className="md:hidden p-2 text-stone-300 hover:text-orange-400 transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú de navegación"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}

export default Header;
