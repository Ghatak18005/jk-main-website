import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function DealingCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [itemsPerSlide, setItemsPerSlide] = useState(4); // Set itemsPerSlide to 4 for all screen sizes

    useEffect(() => {
        setIsMounted(true);
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerSlide(2); // 2 items per slide on small screens
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(3); // 3 items per slide on medium screens
            } else {
                setItemsPerSlide(4); // 4 items per slide on large screens
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / itemsPerSlide));
        }, 3000);

        return () => clearInterval(timer);
    }, [isMounted, itemsPerSlide]);

    if (!isMounted) {
        return null;
    }

    const getVisibleClients = () => {
        const visibleClients = [];
        for (let i = 0; i < itemsPerSlide; i++) {
            const index = (currentIndex * itemsPerSlide + i) % clients.length;
            visibleClients.push(clients[index]);
        }
        return visibleClients;
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-12 px-4">
            <div className="relative overflow-hidden">
                <motion.div
                    className="flex gap-4 transition-all"
                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${(0 / itemsPerSlide) * currentIndex}%)`,
                    }}
                >
                    {getVisibleClients().map((client, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg shadow-lg p-4 flex items-center justify-center mx-auto"
                            style={{
                                width: `calc(${100 / itemsPerSlide}% - 1rem)`,
                                maxWidth: '300px', // Increased maxWidth for larger images on large screens
                            }}
                        >
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    width={350} // Increased width for larger images
                                    height={350} // Increased height for larger images
                                    className="object-contain p-2"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(clients.length / itemsPerSlide) }).map(
                    (_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-[#BD7500]' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    )
                )}
            </div>
        </div>
    );
}