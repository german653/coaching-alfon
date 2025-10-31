// src/components/Header.jsx

import { Bars3Icon } from '@heroicons/react/24/solid';
import MobileMenu from './MobileMenu'; // Asegúrate de que este archivo existe

// Elementos de navegación
const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Servicios', href: '#servicios' },
];

/**
 * Componente del Header (Encabezado de la Página)
 * @param {object} props
 * @param {boolean} props.isMenuOpen - Estado actual del menú móvil.
 * @param {function} props.setIsMenuOpen - Función para cambiar el estado del menú móvil.
 */
function Header({ isMenuOpen, setIsMenuOpen }) { 
  return (
    // z-40 para estar debajo del menú móvil
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start md:justify-between items-center h-20"> 
          
          {/* Logo del Coach */}
          <a href="#inicio" className="flex items-center">
            <img 
              src="/logo-coach.jpg" // Asegúrate de tener esta imagen en la carpeta /public
              alt="Logo del Coach" 
              className="h-12 w-auto rounded-full shadow-sm"
            />
          </a>
          
          {/* Enlaces de Navegación (Desktop) */}
          <nav className="hidden md:flex space-x-8 ml-10"> 
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <button 
            className="md:hidden ml-auto p-2 text-gray-600 hover:text-orange-500"
            onClick={() => setIsMenuOpen(true)} // Abre el menú
            aria-label="Abrir menú de navegación"
          >
            {/* Ícono de 3 barras completas de Heroicons */}
            <Bars3Icon className="h-7 w-7" /> 
          </button>
        </div>
      </div>
      
      {/* Componente del Menú Móvil (Modal de Pantalla Completa) */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navItems={navItems}
      />
    </header>
  );
}

export default Header;
