import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animation
import Image from 'next/image';

const VisionCard = ({ imageSrc, altText, description }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-xl transition-transform transform border-4 border-[#BD7500]"
      initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and bring up
      viewport={{ once: true }} // Trigger animation only once when it comes into view
      transition={{ duration: 1, delay: 0.2 }} // Adjust duration and delay
    >
      <div className="lg:px-5 lg:py-4 p-2">
        <div className="mb-4">
          <Image
            src={imageSrc}
            alt={altText}
            width={150}
            height={150}
            className="mx-auto rounded-lg lg:block mb-10 lg:w-1/2 w-2/5 mt-5 lg:py-0"
          />
        </div>
        <h3 className="lg:text-lg text-base font-normal text-gray-900 mb-2 text-center">
          {description}
        </h3>
      </div>
    </motion.div>
  );
};

const VisionMission = () => {
  const visionItems = [
    {
      imageSrc: 'home/vision/v1.svg',
      altText: 'Service 1',
      description: 'Establish leadership in electrical solutions in a rapidly growing India.',
    },
    {
      imageSrc: 'home/vision/v2.svg',
      altText: 'Service 2',
      description: 'Set industry standards for quality, innovation, and customer satisfaction.',
    },
    {
      imageSrc: 'home/vision/v3.svg',
      altText: 'Service 3',
      description: 'Deliver innovative and reliable electrical solutions to industries and enterprises.',
    },
    {
      imageSrc: 'home/vision/v4.svg',
      altText: 'Service 4',
      description: 'Enhance safety, efficiency, and sustainability, contributing to a prosperous India.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="lg:text-3xl text-xl font-bold text-[#2E414B] lg:mb-12 mb-7 bg-[#C0DBE1] py-2 rounded-2xl lg:w-5/12 w-3/4 mx-auto">
        VISION & MISSION
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-8 gap-4">
        {visionItems.map((item, index) => (
          <VisionCard
            key={index}
            imageSrc={item.imageSrc}
            altText={item.altText}
            description={item.description}
            // Apply staggered delay based on index
            transition={{ duration: 1, delay: index * 0.2 }} 
          />
        ))}
      </div>
    </div>
  );
};

export default VisionMission;
