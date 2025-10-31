// src/components/Testimonials.jsx

const testimonials = [
  {
    quote: "Gracias al coaching, tripliqué mis ingresos y por fin encontré el equilibrio entre mi carrera y mi vida familiar. ¡Un cambio de vida total!",
    name: "Sofía Martínez",
    title: "Directora de Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Su metodología es increíblemente práctica. En 6 semanas, pasé de la parálisis por análisis a lanzar mi propio negocio con total confianza.",
    name: "Alejandro Torres",
    title: "Emprendedor Tech",
    image: "https://images.unsplash.com/photo-1560250097-0b73528c311a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-gray-50"> {/* MODIFICADO: Fondo ligeramente gris para contraste */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase"> {/* MODIFICADO: Color de texto */}
            Confianza y Resultados
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que Dicen mis Clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              {/* Icono de Cita */}
              <svg className="absolute top-0 left-0 w-16 h-16 text-gray-100 opacity-70 transform -translate-x-3 -translate-y-3" fill="currentColor" viewBox="0 0 24 24"><path d="M11 21h-4c-1.103 0-2-.897-2-2v-3c0-1.103.897-2 2-2h3V6H7V3h8v13h-4v5zM20 21h-4c-1.103 0-2-.897-2-2v-3c0-1.103.897-2 2-2h3V6h-4V3h8v13h-4v5z"></path></svg>
              
              <p className="text-xl italic text-gray-700 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-8 flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-500" // MODIFICADO: Ring de color naranja
                  src={testimonial.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt={`Foto de ${testimonial.name}`}
                />
                <div className="ml-4">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600"> {/* MODIFICADO: Color de texto */}
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;