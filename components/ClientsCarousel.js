import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  { src: '/home/client/c1.png', name: 'Client 1' },
  { src: '/home/client/c2.png', name: 'Client 2' },
  { src: '/home/client/c3.png', name: 'Client 3' },
  { src: '/home/client/c4.png', name: 'Client 4' },
  { src: '/home/client/c5.png', name: 'Client 5' },
  { src: '/home/client/c6.png', name: 'Client 6' },
  { src: '/home/client/c7.png', name: 'Client 7' },
  { src: '/home/client/c8.png', name: 'Client 8' },
  { src: '/home/client/c9.png', name: 'Client 9' },
  { src: '/home/client/c10.png', name: 'Client 10' },
  { src: '/home/client/c11.png', name: 'Client 11' },
  { src: '/home/client/c12.png', name: 'Client 12' },
  { src: '/home/client/c13.png', name: 'Client 13' },
  { src: '/home/client/c14.png', name: 'Client 14' },
  { src: '/home/client/c15.png', name: 'Client 15' },
];

export default function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    if (!isMounted || !isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (clients.length - itemsPerSlide + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [isMounted, isAutoPlaying, itemsPerSlide]);

  if (!isMounted) return null;

  const getVisibleClients = () => {
    const visibleClients = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % clients.length;
      visibleClients.push(clients[index]);
    }
    return visibleClients;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? clients.length - itemsPerSlide : prev - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % (clients.length - itemsPerSlide + 1)
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 -ml-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 -mr-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Items */}
        <div className="flex justify-center gap-4 px-4">
          <AnimatePresence mode="wait">
            {getVisibleClients().map((client, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className="rounded-xl flex items-center justify-center transform hover:scale-105 transition-all duration-300"
                style={{ 
                  width: `calc(${100 / itemsPerSlide}% - 1rem)`,
                  maxWidth: '300px',
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: clients.length - itemsPerSlide + 1 }).map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 h-2 bg-[#BD7500]' 
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            } rounded-full`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
} 