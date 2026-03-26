// src/components/About.jsx

const achievements = [
  { number: '15+', label: 'Años de experiencia' },
  { number: '200+', label: 'Vidas transformadas' },
  { number: '98%', label: 'Clientes satisfechos' },
];

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'Metodología basada en neurociencia del comportamiento',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'Técnicas de liderazgo internacional probadas',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'Plan de acción concreto y personalizado',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    text: 'Acompañamiento continuo entre sesiones',
  },
];

function About() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-orange-500 mb-3">
            Quién soy
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 leading-tight">
            Mi Compromiso Contigo
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          {/* Columna Imagen */}
          <div className="flex justify-center mb-16 lg:mb-0">
            <div className="relative">
              {/* Fondo decorativo */}
              <div className="absolute -inset-4 rounded-3xl rotate-3 opacity-20"
                style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}></div>
              <div className="absolute -inset-4 rounded-3xl -rotate-3 bg-stone-200 opacity-50"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '3px solid #f97316' }}>
                <img
                  src="/logo-coach.jpg"
                  alt="Alfonso Coach"
                  className="w-full max-w-sm h-auto object-cover"
                />
                {/* Badge encima de la imagen */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 backdrop-blur-md"
                  style={{ background: 'rgba(28,25,23,0.85)', border: '1px solid rgba(249,115,22,0.3)' }}>
                  <p className="text-white font-bold text-sm">Alfonso</p>
                  <p className="text-orange-400 text-xs">Coach de Liderazgo & Transformación Personal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Contenido */}
          <div>
            <p className="text-lg text-stone-600 leading-relaxed">
              Después de <strong className="text-stone-900">15 años en el mundo corporativo</strong>, descubrí que mi verdadera pasión era guiar a otros a encontrar claridad y propósito. No solo te doy herramientas, te ayudo a construir un sistema de vida que te permita ser resiliente y exitoso a largo plazo.
            </p>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              Mi metodología combina la neurociencia del comportamiento con técnicas de liderazgo probadas para asegurar que cada sesión sea un paso concreto hacia la maestría personal.
            </p>

            {/* Lista de valores */}
            <ul className="mt-8 space-y-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <span className="text-orange-500 flex-shrink-0">{v.icon}</span>
                  <span className="font-medium">{v.text}</span>
                </li>
              ))}
            </ul>

            {/* Cita destacada */}
            <blockquote className="mt-8 p-6 rounded-2xl border-l-4 border-orange-500"
              style={{ background: 'linear-gradient(135deg, #fff7ed, #fff)' }}>
              <p className="italic text-stone-700 text-lg leading-relaxed">
                "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amás lo que hacés, serás exitoso."
              </p>
              <footer className="mt-2 text-sm text-stone-500 font-semibold">
                — Albert Schweitzer
              </footer>
            </blockquote>
          </div>

        </div>

        {/* Stats bar debajo */}
        <div className="mt-20 grid grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white shadow-md border border-stone-100 hover:shadow-lg transition-shadow duration-300">
              <p className="text-4xl font-black" style={{ color: '#f97316' }}>{ach.number}</p>
              <p className="text-stone-600 font-medium mt-1">{ach.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
