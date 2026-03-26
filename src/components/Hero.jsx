// src/components/Hero.jsx

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1c1917 0%, #292524 55%, #1c1917 100%)' }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          {/* Columna de Texto */}
          <div className="lg:col-span-6 text-center lg:text-left animate-fade-in">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Coach de Liderazgo y Transformación Personal
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Creá la Vida
              <span className="block" style={{
                background: 'linear-gradient(135deg, #f97316, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                que Merecés
              </span>
            </h1>

            <p className="mt-6 text-xl text-stone-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Te acompaño en el camino para superar barreras, definir metas claras y tomar acción hacia tus objetivos profesionales y personales.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-black text-white">15+</p>
                <p className="text-sm text-stone-400">Años de experiencia</p>
              </div>
              <div className="w-px bg-stone-700"></div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-black text-white">200+</p>
                <p className="text-sm text-stone-400">Personas transformadas</p>
              </div>
              <div className="w-px bg-stone-700"></div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-black text-white">98%</p>
                <p className="text-sm text-stone-400">Satisfacción</p>
              </div>
            </div>

            {/* Botón CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-xl text-lg text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
              >
                Consultar por Sesión
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center justify-center font-semibold py-4 px-8 rounded-xl text-lg text-stone-300 border border-stone-600 hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
              >
                Conocé más →
              </a>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 flex justify-center items-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #f97316, transparent)' }} />

              {/* Ring decorativo */}
              <div className="absolute -inset-4 rounded-full border border-orange-500/20"></div>
              <div className="absolute -inset-8 rounded-full border border-orange-500/10"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
                style={{ border: '4px solid #f97316', boxShadow: '0 0 60px rgba(249, 115, 22, 0.4)' }}>
                <img
                  className="object-cover w-full h-full scale-125"
                  src="/alfon-foto.png"
                  alt="Foto profesional de la coach"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 animate-bounce">
        <p className="text-xs tracking-widest uppercase">Descubrí más</p>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
