// src/components/MobileMenu.jsx

import { XMarkIcon } from '@heroicons/react/24/solid';

function MobileMenu({ isOpen, onClose, navItems }) {
  
  // Función para cerrar el menú al hacer clic en un enlace de sección o en la 'X'
  const closeMenu = () => {
      onClose();
  };

  return (
    // Contenedor principal:
    // 1. fixed inset-0: Ocupa toda la pantalla.
    // 2. z-[9999]: Se asegura de estar encima de todo.
    // 3. transition-transform duration-300 ease-in-out: Define la animación de deslizamiento.
    // 4. Lógica condicional:
    //    - isOpen ? 'translate-x-0' : 'translate-x-full'
    //    - Si está abierto, se posiciona en 0 (visible).
    //    - Si está cerrado, se mueve 100% a la derecha (fuera de la pantalla).
    <div 
      className={`
        fixed inset-0 bg-white z-[9999] p-6 flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      
      {/* Encabezado del Menú (Logo + Botón Cerrar) */}
      <div className="flex justify-between items-center h-16 border-b border-gray-100 mb-8">
        {/* Logo del Coach */}
        <a href="#inicio" onClick={closeMenu} className="flex items-center">
          <img 
            src="/logo-coach.jpg" 
            alt="Logo del Coach" 
            className="h-12 w-auto rounded-full shadow-sm"
          />
        </a>
        
        {/* Botón de Cierre 'X' */}
        <button 
          onClick={closeMenu} 
          className="p-2 text-gray-600 hover:text-orange-500"
          aria-label="Cerrar menú"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Enlaces de Navegación Centrados */}
      <nav className="flex flex-col space-y-10 flex-grow justify-center items-center"> 
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={closeMenu}
            className="text-4xl font-bold text-gray-800 hover:text-orange-500 py-3 transition duration-300" 
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Botón CTA (Whatsapp) */}
      <div className="mt-auto pb-6 w-full px-4"> 
        <a
          href="https://wa.me/[TuNumeroWhatsApp]" // Reemplaza con el número real
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition duration-300"
        >
          ¡Consultar por WhatsApp!
        </a>
      </div>

    </div>
  );
}

export default MobileMenu;
