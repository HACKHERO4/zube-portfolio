"use client";

import React from 'react';
import Image from 'next/image';
import artistic from '../images/artistic.jpg';
import parallaxImage3 from '../images/parallax-image3.png';
import parallaxImage5 from '../images/parallax-image5.png';
import pumpmwebmobile1 from '../images/pumpmwebmobile1.png';
import pumpmwebmobile2 from '../images/pumpmwebmobile2.png';
import pumpmwebmobile3 from '../images/pumpmwebmobile3.png';
import pumpmwebmobile4 from '../images/pumpmwebmobile4.png';
// Import additional images as needed


const ParallaxBackground: React.FC = () => {
  const columns = [
    {
      images: [
        artistic,
        parallaxImage3,
        parallaxImage5,
        artistic,
        parallaxImage3,
        parallaxImage5, // Ensures seamless looping
      ],
      speed: 20, // Animation duration in seconds for column 1
    },
    {
      images: [
        pumpmwebmobile1,
        pumpmwebmobile2,
        pumpmwebmobile3,
        pumpmwebmobile4,
        pumpmwebmobile1,
        pumpmwebmobile2, // Ensures seamless looping
      ],
      speed: 25, // Animation duration in seconds for column 2
    },
    {
      images: [
        parallaxImage5,
        artistic,
        parallaxImage3,
        parallaxImage5,
        artistic,
        parallaxImage3, // Ensures seamless looping
      ],
      speed: 30, // Animation duration in seconds for column 3
    },
    {
      images: [
        pumpmwebmobile1,
        pumpmwebmobile2,
        pumpmwebmobile3,
        pumpmwebmobile4,
        pumpmwebmobile1,
        pumpmwebmobile2, // Ensures seamless looping
      ],
      speed: 35, // Animation duration in seconds for column 4
    },
    // Add more columns with different speeds if desired
  ];

  // Define the number of columns
  const numberOfColumns = columns.length;

  // Define desired spacing between columns in percentage
  const spacingPercentage = 2; // Increased spacing to 3%

  // Calculate total spacing
  const totalSpacing = spacingPercentage * (numberOfColumns + 1); // 3% * 5 = 15%

  // Calculate width of each column
  const columnWidth = (100 - totalSpacing) / numberOfColumns; // (100 - 15) / 4 = 21.25%

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {columns.map((column, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transform: 'rotate(0deg)',
            // Adjusted the horizontal position to prevent overlapping
            left: `${spacingPercentage + index * (columnWidth + spacingPercentage)}%`,
            width: `${columnWidth}%`,
            height: '150%', // Adjusted height to better fit the viewport
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
                  className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 opacity-15"
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