import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const clients = [
  { src: '/home/client/c1.png', name: 'Client 1', alt: 'JK Power System Client - Industrial Manufacturing Company' },
  { src: '/home/client/c2.png', name: 'Client 2', alt: 'JK Power System Client - Energy Sector Company' },
  { src: '/home/client/c3.png', name: 'Client 3', alt: 'JK Power System Client - Infrastructure Development Corporation' },
  { src: '/home/client/c4.png', name: 'Client 4', alt: 'JK Power System Client - Power Generation Company' },
  { src: '/home/client/c5.png', name: 'Client 5', alt: 'JK Power System Client - Construction Company' },
  { src: '/home/client/c6.png', name: 'Client 6', alt: 'JK Power System Client - Engineering Solutions Provider' },
  { src: '/home/client/c7.png', name: 'Client 7', alt: 'JK Power System Client - Manufacturing Industry Leader' },
  { src: '/home/client/c8.png', name: 'Client 8', alt: 'JK Power System Client - Industrial Automation Company' },
  { src: '/home/client/c9.png', name: 'Client 9', alt: 'JK Power System Client - Power Distribution Company' },
  { src: '/home/client/c10.png', name: 'Client 10', alt: 'JK Power System Client - Electrical Equipment Manufacturer' },
  { src: '/home/client/c11.png', name: 'Client 11', alt: 'JK Power System Client - Infrastructure Solutions Provider' },
  { src: '/home/client/c12.png', name: 'Client 12', alt: 'JK Power System Client - Industrial Solutions Company' },
  { src: '/home/client/c13.png', name: 'Client 13', alt: 'JK Power System Client - Energy Solutions Provider' },
  { src: '/home/client/c14.png', name: 'Client 14', alt: 'JK Power System Client - Power Systems Integrator' },
  { src: '/home/client/c15.png', name: 'Client 15', alt: 'JK Power System Client - Industrial Equipment Manufacturer' },
];

export default function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  const getVisibleClients = () => {
    const visibleClients = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % clients.length;
      visibleClients.push(clients[index]);
    }
    return visibleClients;
  };

  return (
    <>
      <Head>
        <meta name="description" content="Trusted by leading companies across industries, JK Power System provides electrical solutions to a diverse portfolio of clients." />
        <meta property="og:title" content="Our Clients - JK Power System" />
        <meta property="og:description" content="Discover the companies that trust JK Power System for their electrical solutions and power systems needs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Clients - JK Power System" />
        <meta name="twitter:description" content="Leading companies trust JK Power System for electrical solutions and power systems." />
      </Head>
      
      <div 
        className="w-full max-w-[95vw] mx-auto py-12 px-4"
        role="region"
        aria-label="Client Testimonials Carousel"
      >
        <div className="relative overflow-hidden">
          <div className="flex justify-center gap-4">
            {getVisibleClients().map((client, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className="rounded-lg shadow-lg p-4 flex items-center justify-center"
                style={{ 
                  width: `calc(${100 / itemsPerSlide}% - 1rem)`,
                  maxWidth: '300px'
                }}
                initial={{ opacity: 0, x: index === itemsPerSlide - 1 ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index === 0 ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                role="group"
                aria-label={`Client ${currentIndex + index + 1} of ${clients.length}`}
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain p-2"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div 
          className="flex justify-center mt-6 space-x-2"
          role="tablist"
          aria-label="Carousel Navigation"
        >
          {Array.from({ length: clients.length }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-[#BD7500]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </>
  );
} 