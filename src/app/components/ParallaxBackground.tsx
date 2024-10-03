"use client";

import React from 'react';
import Image from 'next/image';
import parallaxImage1 from '../images/parallax-image1.png';
import parallaxImage3 from '../images/parallax-image3.png';
import parallaxImage5 from '../images/parallax-image5.png';
// Import additional images as needed

const ParallaxBackground: React.FC = () => {
  const columns = [
    
    {
      images: [
        parallaxImage1,
        parallaxImage3,
        parallaxImage5,
        parallaxImage1,
        parallaxImage3,
        parallaxImage5, // Ensures seamless looping
      ],
      speed: 10, // Animation duration in seconds for column 1
    },
    {
      images: [
        parallaxImage3,
        parallaxImage5,
        parallaxImage1,
        parallaxImage3,
        parallaxImage5,
        parallaxImage1, // Ensures seamless looping
      ],
      speed: 15, // Animation duration in seconds for column 2
    },
    {
      images: [
        parallaxImage5,
        parallaxImage1,
        parallaxImage3,
        parallaxImage5,
        parallaxImage1,
        parallaxImage3, // Ensures seamless looping
      ],
      speed: 20, // Animation duration in seconds for column 3
    },
    {
      images: [
        parallaxImage1,
        parallaxImage3,
        parallaxImage5,
        parallaxImage1,
        parallaxImage3,
        parallaxImage5, // Ensures seamless looping
      ],
      speed: 25, // Animation duration in seconds for column 4
    },
    // Add more columns with different speeds if desired
  ];

  // Define the number of columns
  const numberOfColumns = columns.length;

  // Define desired spacing between columns in percentage
  const spacingPercentage = 2; // 2% spacing between columns

  // Calculate total spacing
  const totalSpacing = spacingPercentage * (numberOfColumns + 1);

  // Calculate width of each column
  const columnWidth = (100 - totalSpacing) / numberOfColumns;

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {columns.map((column, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transform: 'rotate(45deg)',
            // Calculate the horizontal position to spread columns evenly with spacing
            left: `${spacingPercentage + index * (columnWidth + spacingPercentage)}%`,
            width: `${columnWidth}%`,
            height: '200%', // Increased height to accommodate rotation
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          {/* Wrapper div for continuous vertical animation */}
          <div
            className="animate-marquee-vertical"
            style={{
              animationDuration: `${column.speed}s`,
            }}
          >
            <div className="flex flex-col">
              {column.images.map((src, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 opacity-20"
                  style={{ marginBottom: '1rem' }}
                >
                  <Image
                    src={src}
                    alt={`Parallax Image ${imgIndex + 1}`}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxBackground;