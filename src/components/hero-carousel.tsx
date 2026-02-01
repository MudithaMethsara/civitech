'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/project_img/Commercial and Industrial Buildings/brandix_apparel-rideegama_office.jpg',
  '/project_img/Commercial and Industrial Buildings/lanka_tiels_plc-nugegoda.jpg',
  '/project_img/Residential Projects/Picture41.jpg',
  '/project_img/Steel Structures/Picture25.jpg',
  '/project_img/Commercial and Industrial Buildings/nursery_buildings-moragahakanda_kalugaga.jpg'
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Hero Background"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/30" />
    </div>
  );
}
