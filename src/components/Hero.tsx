import React from 'react';
import { Shield, Smartphone, Fingerprint, ArrowRight } from 'lucide-react';
import ScrollingProductMenu from './ScrollingProductMenu';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-black dark:to-gray-900 overflow-hidden transition-colors duration-300 pt-24 sm:pt-24 md:pt-28">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gray-200 dark:bg-gray-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-300 dark:bg-yellow-700 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 text-center py-8 sm:py-12">
        <div className="space-y-8">
          {/* Logo et titre principal */}
          <div className="space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-hero text-gray-900 dark:text-white leading-tight px-2">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-yellow-500 dark:from-gray-200 dark:to-yellow-400">
                Votre Maison De Demain
              </span>
            </h1>
            {/* Version courte sur mobile */}
            <div className="sm:hidden text-xs text-gray-600 dark:text-gray-300 max-w-3xl w-full mx-auto leading-snug px-4 break-words whitespace-normal">
              <span className="block">🏠 Transformez votre maison en habitat intelligent.</span>
              <span className="block">🔐 Serrures, 💡 éclairage, 🛡️ sécurité.</span>
              <span className="block">📱 Contrôle centralisé. ⚡ Installation incluse.</span>
            </div>

            {/* Version complète dès tablette */}
            <div className="hidden sm:block text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl w-full mx-auto leading-relaxed px-4 break-words whitespace-normal">
              🏠 <strong>Transformez votre maison en habitat intelligent</strong> avec nos solutions domotiques de dernière génération. 🔐 Serrures connectées, 💡 éclairage intelligent, 🛡️ sécurité avancée et 📱 contrôle centralisé. ⚡ Installation professionnelle incluse pour une maison du futur !
            </div>

            {/* Scrolling Product Menu */}
            <div className="mt-12">
              <ScrollingProductMenu />
            </div>
          </div>

          {/* Caractéristiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="flex items-center justify-center space-x-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-yellow-300 dark:border-yellow-600 hover:scale-105 transition-transform">
              <div className="text-3xl">📱</div>
              <div>
                <div className="font-bold text-gray-800 dark:text-gray-200">Maison Connectée</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Contrôle total via app</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-yellow-300 dark:border-yellow-600 hover:scale-105 transition-transform">
              <div className="text-3xl">🔐</div>
              <div>
                <div className="font-bold text-gray-800 dark:text-gray-200">Sécurité Avancée</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Face ID, Empreinte & NFC</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-yellow-300 dark:border-yellow-600 hover:scale-105 transition-transform">
              <div className="text-3xl">⚡</div>
              <div>
                <div className="font-bold text-gray-800 dark:text-gray-200">Installation Pro</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Configuration & garantie</div>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16">
            <button 
              onClick={scrollToProducts}
              className="group bg-gradient-to-r from-black to-gray-800 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-semibold sm:font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center space-x-3 border-2 border-yellow-400"
            >
              <span>🚀</span>
              <span>Découvrir nos produits</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button 
              onClick={whatsappContact}
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-semibold sm:font-bold text-base sm:text-lg hover:bg-green-600 hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center space-x-3"
            >
              <span>💬</span>
              <span>Devis GRATUIT</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">⚡</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;