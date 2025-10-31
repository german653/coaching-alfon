// src/components/Hero.jsx

function Hero() {
  return (
    <section id="inicio" className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Columna de Texto - order-1 (primero en móvil) */}
          <div className="lg:col-span-6 order-1 lg:order-1 text-center lg:text-left">
            <p className="text-lg font-semibold text-gray-700 mb-3">
              Coach de Liderazgo y Transformación Personal
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Desbloquea tu **Máximo Potencial** y Crea la Vida que Mereces
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              Te acompaño en el camino para superar barreras, definir metas claras y tomar acción masiva hacia tus objetivos profesionales y personales.
            </p>
            
            {/* Botón de CTA Principal */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="#contacto"
                className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg text-lg transition duration-300 transform hover:scale-105"
              >
                Consultar por Sesión
              </a>
            </div>
          </div>
          
          {/* Columna de Imagen - order-2 (segundo en móvil) */}
          <div className="lg:col-span-6 mt-12 lg:mt-0 order-2 lg:order-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-xl ring-4 ring-orange-500 ring-offset-4 ring-offset-white">
                <img
                    className="object-cover w-full h-full transform scale-125" // Zoom con scale-125
                    src="/alfon-foto.png" // Foto del cliente en /public
                    alt="Foto profesional de la coach"
                />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
