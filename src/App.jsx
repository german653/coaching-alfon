// src/App.jsx

import { useState, useEffect } from 'react'; // Necesario para el menú hamburguesa
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';          // <--- ¡ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ PRESENTE!
import Services from './components/Services';
// import Testimonials from './components/Testimonials'; // Eliminado anteriormente
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // useEffect para bloquear el scroll del body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden'); 
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />          {/* <--- Aquí se estaba usando sin importar */}
        <Services />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;