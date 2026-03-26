// src/components/Footer.jsx

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0f0d0b' }}>
      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Columna 1: Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-coach.jpg" alt="Logo" className="h-12 w-12 rounded-full object-cover"
                style={{ border: '2px solid #f97316' }} />
              <div>
                <p className="text-white font-bold text-lg leading-none">Alfonso Coach</p>
                <p className="text-orange-500 text-sm">Coaching de Transformación</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Acompañando a personas y líderes a desbloquear su máximo potencial y crear vidas con propósito.
            </p>
          </div>

          {/* Columna 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Navegación</h4>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Sobre Mí', href: '#sobre-mi' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href}
                    className="text-stone-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contacto@alfonscoach.com"
                  className="flex items-center gap-2 text-stone-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contacto@alfonscoach.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/549TUNUMERO" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-green-400 transition-colors duration-300 text-sm">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.525 0 .285 5.253.285 11.75c0 2.227.604 4.382 1.764 6.273l-1.921 7.031 7.228-1.939c1.78.98 3.824 1.503 5.766 1.503 6.506 0 11.776-5.253 11.776-11.75S18.537 0 12.031 0z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #f97316, #ec4899)'; e.currentTarget.style.border = 'none'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'; }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.716 0 3.061.012 4.121.060 1.055.048 1.795.215 2.45.46a4.265 4.265 0 012.553 2.553c.245.655.412 1.395.46 2.45.048 1.06.06 1.405.06 4.121s-.012 3.061-.06 4.121c-.048 1.055-.215 1.795-.46 2.45a4.265 4.265 0 01-2.553 2.553c-.655.245-1.395.412-2.45.46-1.06.048-1.405.06-4.121.06s-3.061-.012-4.121-.06c-1.055-.048-1.795-.215-2.45-.46a4.265 4.265 0 01-2.553-2.553c-.245-.655-.412-1.395-.46-2.45-.048-1.06-.06-1.405-.06-4.121s.012-3.061.06-4.121c.048-1.055.215-1.795.46-2.45a4.265 4.265 0 012.553-2.553c.655-.245 1.395-.412 2.45-.46C8.939 2.012 9.284 2 12 2zm0 5a5 5 0 100 10A5 5 0 0012 7zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.25-8.583a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                </svg>
              </a>
              <a href="https://wa.me/549TUNUMERO" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.border = 'none'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'; }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.525 0 .285 5.253.285 11.75c0 2.227.604 4.382 1.764 6.273l-1.921 7.031 7.228-1.939c1.78.98 3.824 1.503 5.766 1.503 6.506 0 11.776-5.253 11.776-11.75S18.537 0 12.031 0zm0 21.43c-1.898 0-3.666-.523-5.215-1.428l-.375-.224-3.89 1.044 1.011-3.704-.241-.383c-.933-1.488-1.429-3.21-1.429-4.99 0-5.18 4.2-9.38 9.38-9.38s9.38 4.2 9.38 9.38-4.2 9.38-9.38 9.38z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {year} Alfonso Coach. Todos los derechos reservados.
          </p>
          <p className="text-stone-600 text-xs">
            Diseñado con ❤️ para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;