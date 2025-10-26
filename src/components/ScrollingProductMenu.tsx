import React from 'react';

const products = [
  { id: 'i40', image: '/images/i40 (2).webp' },
  { id: 'i30', image: '/images/i30.jpg' },
  { id: 'i29', image: '/images/WhatsApp Image 2025-09-11 at 15.47.22.jpeg' },
  { id: 'k10', image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (6).jpeg' },
  { id: 'x5-cam', image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (5).jpeg' },
  { id: 'x5-ultra', image: '/images/WhatsApp Image 2025-09-11 at 15.47.21 (4).jpeg' },
  { id: 'k5', image: '/images/k5.jpg' },
  { id: 'i20', image: '/images/i20.jpg' },
  { id: 'qm50', image: '/images/qm50.jpg' },
  { id: 'qm60', image: '/images/qm60.jpg' },
  { id: 'ca1-ca2', image: '/images/ca1.jpg' },
  { id: 'inta-intb', image: '/images/inta.jpg' },
  { id: 'sonoff-dual-r3', image: '/images/smart switch rideau.jpg' },
  { id: 'sonoff-mini-r4', image: '/images/smart switch.jpg' },
  { id: 'cam', image: '/images/cam.webp' }
];

const ScrollingProductMenu = () => {
  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-title text-gray-900 dark:text-white mb-6">
          Découvrez nos produits
        </h3>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {products.concat(products).map((product, index) => (
              <div key={`${product.id}-${index}`} className="flex-shrink-0 w-64 mx-4">
                <img
                  src={product.image}
                  alt={`Produit ${product.id}`}
                  className="w-full h-48 object-contain bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
};

export default ScrollingProductMenu;