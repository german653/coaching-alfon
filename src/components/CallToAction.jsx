// src/components/CallToAction.jsx

function CallToAction() {
  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden bg-stone-50">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Ícono decorativo */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-glow-orange"
          style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-tight">
          ¿Listo para dar el
          <span className="block" style={{
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            primer paso?
          </span>
        </h2>

        <p className="mt-6 text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Iniciá hoy mismo tu <strong>sesión de descubrimiento gratuita</strong> y empezá a construir la vida que merecés con un plan concreto y acompañamiento profesional.
        </p>

        {/* Beneficios rápidos */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center text-stone-700 text-sm font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Primera sesión sin costo
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sin compromisos
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Respuesta en menos de 24 hs
          </div>
        </div>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/549TUNUMERO?text=Hola,%20me%20interesa%20una%20sesión%20de%20coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 font-bold py-4 px-8 rounded-xl text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.525 0 .285 5.253.285 11.75c0 2.227.604 4.382 1.764 6.273l-1.921 7.031 7.228-1.939c1.78.98 3.824 1.503 5.766 1.503 6.506 0 11.776-5.253 11.776-11.75S18.537 0 12.031 0z"/>
            </svg>
            Escribir por WhatsApp
          </a>
          <a
            href="mailto:contacto@alfonscoach.com"
            className="inline-flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-xl text-lg text-gray-900 border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300 hover:scale-105"
          >
            Enviar un Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;