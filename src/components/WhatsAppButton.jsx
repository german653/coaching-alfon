// src/components/WhatsAppButton.jsx

import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid'; // Usamos la versión "solid" para que el icono se vea relleno

function WhatsAppButton() {
  const whatsappNumber = "+[TuNumeroWhatsApp]"; // Reemplaza con el número de tu cliente
  const message = "Hola, me interesa consultar por una sesión de coaching."; // Mensaje predefinido

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <ChatBubbleLeftIcon className="h-7 w-7" /> {/* Icono de Heroicons */}
      <span className="sr-only">Contactar por WhatsApp</span> {/* Para accesibilidad */}
    </a>
  );
}

export default WhatsAppButton;