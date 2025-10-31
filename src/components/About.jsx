// src/components/About.jsx

function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Columna de Contenido */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-orange-500 inline-block pb-1">
              Mi Compromiso Contigo
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Después de 15 años en el mundo corporativo, descubrí que mi verdadera pasión era guiar a otros a encontrar claridad y propósito. No solo te doy herramientas, te ayudo a construir un **sistema de vida** que te permita ser resiliente y exitoso a largo plazo.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Mi metodología combina la neurociencia del comportamiento con técnicas de liderazgo probado para asegurar que cada sesión sea un paso concreto hacia la maestría personal.
            </p>
            
            {/* Cita destacada */}
            <blockquote className="mt-8 p-6 border-l-4 border-orange-500 bg-white shadow-md rounded-lg italic text-gray-700">
              "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, serás exitoso."
              <footer className="mt-2 text-sm text-gray-600 font-semibold">- Albert Schweitzer (Frase inspiradora)</footer>
            </blockquote>
          </div>

          {/* Columna para el logo */}
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <img 
              src="/logo-coach.jpg" // Logo en /public
              alt="Logo del Coach" 
              className="w-full max-w-sm h-auto rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
