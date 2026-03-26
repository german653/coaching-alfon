// src/components/WhatsAppButton.jsx

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/549TUNUMERO?text=Hola,%20me%20interesa%20una%20sesi%C3%B3n%20de%20coaching."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse ring animado */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: '#25D366' }}></span>

      {/* Botón principal */}
      <div
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 0C5.525 0 .285 5.253.285 11.75c0 2.227.604 4.382 1.764 6.273l-1.921 7.031 7.228-1.939c1.78.98 3.824 1.503 5.766 1.503 6.506 0 11.776-5.253 11.776-11.75S18.537 0 12.031 0zm0 21.43c-1.898 0-3.666-.523-5.215-1.428l-.375-.224-3.89 1.044 1.011-3.704-.241-.383c-.933-1.488-1.429-3.21-1.429-4.99 0-5.18 4.2-9.38 9.38-9.38s9.38 4.2 9.38 9.38-4.2 9.38-9.38 9.38zm5.722-6.522c-.317-.16-.927-.457-1.07-.506-.142-.049-.244-.074-.352.146-.108.22-.416.505-.51.613-.095.107-.19.115-.353.064-.163-.049-.687-.251-1.306-.806-.484-.437-1.042-1.09-1.385-1.69-.343-.599-.036-.928.283-1.258.172-.172.385-.436.577-.655.192-.219.256-.376.35-.589.095-.213.048-.399-.024-.55-.072-.15-.662-1.597-.907-2.18-.239-.582-.477-.499-.66-.506-.182-.007-.393-.007-.604-.007h-.62c-.21 0-.549.078-.838.358-.289.28-.979.957-.979 2.336 0 1.38.998 2.686 1.137 2.89.14.205 1.94 3.14 4.793 4.312 2.854 1.173 2.854.786 3.35.738.5-.047 1.62-.646 1.844-1.267.225-.62.225-.572.158-.696z"/>
        </svg>
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span className="bg-stone-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg">
          ¡Escribinos!
        </span>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-0 h-0"
          style={{ borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '6px solid #1c1917' }}></div>
      </div>
    </a>
  );
}

export default WhatsAppButton;