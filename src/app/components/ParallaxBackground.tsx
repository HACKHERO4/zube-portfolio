"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import parallaxImage1 from '../images/parallax-image1.png';
import parallaxImage3 from '../images/parallax-image3.png';
import parallaxImage5 from '../images/parallax-image5.png'; 
// Import additional images as needed

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const layers = [
    {
      images: [parallaxImage1, parallaxImage3, parallaxImage5, parallaxImage1, parallaxImage3, parallaxImage5, parallaxImage1, parallaxImage3, parallaxImage5, parallaxImage1, parallaxImage3, parallaxImage5, parallaxImage1, parallaxImage3, parallaxImage5],
      speed: 0.2,
      rotation: 45, // Degrees
    },
   
    // Add more layers if desired
  ];

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * layer.speed}px) rotate(${layer.rotation}deg)`,
            pointerEvents: 'none',
          }}
        >
          <div className="grid grid-cols-4 gap-6">
            {layer.images.map((src, imgIndex) => (
              <div
                key={imgIndex}
                className="relative w-32 h-64 sm:w-40 sm:h-80 md:w-48 md:h-96 lg:w-56 lg:h-112 opacity-20"
              >
                <Image
                  src={src}
                  alt={`Parallax Image ${imgIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxBackground;