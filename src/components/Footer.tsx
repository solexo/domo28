import React from 'react';
import { Home, Phone, Mail, Clock, Shield, Award, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/212660245937', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/domo_28/', '_blank');
  };

  const openFacebook = () => {
    window.open('https://web.facebook.com/profile.php?id=61567384930999', '_blank');
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logob.jpeg"
                alt="DOMO28 Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Spécialiste en serrures intelligentes et domotique. Nous sécurisons votre domicile 
              avec des solutions technologiques avancées et un service d'installation professionnel.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Installation incluse</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Garantie 2 ans</span>
              </div>
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <button
                onClick={whatsappContact}
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+212 660 24 59 37</span>
              </button>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+212 669 15 42 35</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>badr.assanoussi@domo28.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>ali.belgamra@domo28.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Lun-Sam 8h-18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Serrures intelligentes</li>
              <li>Installation professionnelle</li>
              <li>Maintenance & SAV</li>
              <li>Conseil en domotique</li>
              <li>Formation utilisateur</li>
              <li>Support technique</li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="space-y-3">
              <button
                onClick={openInstagram}
                className="flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Instagram</div>
                  <div className="text-sm">@domo_28</div>
                </div>
              </button>
              
              <button
                onClick={openFacebook}
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Facebook</div>
                  <div className="text-sm">DOMO28</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 DOMO28. Tous droits réservés.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={whatsappContact}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
              >
                💬 WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;