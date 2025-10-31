// src/components/Services.jsx

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
    ),
    title: 'Coaching Ejecutivo',
    description: 'Diseñado para líderes que buscan maximizar su impacto, desarrollar equipos de alto rendimiento y tomar decisiones estratégicas bajo presión.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
    title: 'Claridad de Propósito',
    description: 'Encuentra tu verdadera vocación y alinea tus valores con tus metas. Supera la procrastinación y el miedo al cambio.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"></path></svg>
    ),
    title: 'Mentoría de Carrera',
    description: 'Sesiones enfocadas en ascensos, transiciones laborales y negociación salarial. Plan de acción concreto para tu próximo nivel.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Mi Metodología
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Servicios de Coaching Personalizados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              {feature.icon}
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-gray-700">
                {feature.description}
              </p>
              {/* Enlace "Saber más" eliminado */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
