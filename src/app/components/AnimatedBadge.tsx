'use client';

import React from 'react';

interface AnimatedBadgeProps {
  number: string;
  text: string;
  className: string;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ number, text, className }) => {
  return (
    <div className={`bg-opacity-30 backdrop-filter backdrop-blur-md bg-gray-800 text-white py-2 px-4 rounded-full z-30 overflow-hidden shine-effect ${className}`}>
      <span className="text-xl font-bold">{number}</span>
      <span className="text-xs ml-1">{text}</span>
      <div className="shine"></div>
    </div>
  );
};

export default AnimatedBadge;
