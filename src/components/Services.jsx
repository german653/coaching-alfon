// src/components/Services.jsx

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Coaching Ejecutivo',
    description: 'Diseñado para líderes que buscan maximizar su impacto, desarrollar equipos de alto rendimiento y tomar decisiones estratégicas bajo presión.',
    tag: 'Más popular',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Claridad de Propósito',
    description: 'Encontrá tu verdadera vocación y alineá tus valores con tus metas. Superá la procrastinación y el miedo al cambio para vivir con intención.',
    tag: null,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
      </svg>
    ),
    title: 'Mentoría de Carrera',
    description: 'Sesiones enfocadas en ascensos, transiciones laborales y negociación salarial. Plan de acción concreto para tu próximo nivel profesional.',
    tag: null,
  },
];

function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-orange-500 mb-3">
            Mi Metodología
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Servicios de Coaching
            <span className="block" style={{
              background: 'linear-gradient(135deg, #f97316, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Personalizados
            </span>
          </h2>
          <p className="mt-4 text-stone-400 text-lg max-w-2xl mx-auto">
            Cada programa está diseñado a medida para tu situación única. No existen soluciones genéricas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(249,115,22,0.2)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(249,115,22,0.6)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(249,115,22,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(249,115,22,0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Tag "Más popular" */}
              {service.tag && (
                <div className="absolute -top-3 right-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-gray-900"
                    style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)' }}>
                    {service.tag}
                  </span>
                </div>
              )}

              {/* Icono */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-orange-400 mb-6"
                style={{ background: 'rgba(249,115,22,0.1)' }}>
                {service.icon}
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-stone-400 leading-relaxed">{service.description}</p>

              {/* Link */}
              <a href="#contacto" className="inline-flex items-center gap-2 mt-6 text-orange-400 font-semibold hover:text-orange-300 transition-colors group-hover:gap-3 duration-300">
                Consultar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
