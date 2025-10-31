// src/components/CallToAction.jsx

function CallToAction() {
  return (
    <section id="contacto" className="py-20 bg-orange-500"> {/* MODIFICADO: Fondo naranja */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"> {/* MODIFICADO: Color de texto */}
          ¿Listo para Dejar de Postergar?
        </h2>
        <p className="mt-4 text-xl text-orange-900"> {/* MODIFICADO: Color de texto */}
          Inicia hoy mismo tu sesión de descubrimiento gratuita y da el primer paso hacia una vida con propósito.
        </p>
        
        {/* Botón CTA Invertido para Máximo Contraste */}
        <div className="mt-10">
          <a
            href="mailto:[Email del Coach]" // Podrías cambiar esto por un enlace a un formulario o a tu WhatsApp
            className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-10 rounded-lg shadow-lg text-xl transition duration-300 transform hover:scale-105" // MODIFICADO: Color de botón y texto
          >
            Consultar por Sesión {/* MODIFICADO: Texto del botón */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;