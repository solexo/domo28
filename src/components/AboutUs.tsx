import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos de DOMO28
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez notre présentation complète sur les technologies domotiques modernes
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <iframe
              src="/images/Blue and White Modern Smart Home Technology Presentation.pdf"
              width="100%"
              height="800px"
              className="border-0 rounded"
              title="Présentation DOMO28 - Technologies Domotiques"
            >
              Votre navigateur ne supporte pas l'affichage des PDF.
              <a href="/images/Blue and White Modern Smart Home Technology Presentation.pdf" target="_blank" rel="noopener noreferrer">
                Cliquez ici pour télécharger la présentation
              </a>
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;