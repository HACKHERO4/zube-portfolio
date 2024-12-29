import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import artistic from './images/artistic.jpg'; // Image import
import com from './images/com.png'; // Image import
import './Port.css'; // Import CSS for animation
import tonstationweb1 from './images/tonstationweb1.png';
import identity from './images/identity.png';
import ghy from './images/ghy.png';
import tailoed from './images/tailoed.png';
import service from './images/service.png';
const portfolioItems = [
  {
    tags: ['mobile-app', 'blockchain-app'],
    image: artistic,
    title: 'Dlrlr',
    category: 'Web-Based App',
    projectUrl: 'https://github.com/HACKHERO4/DLRlr',
    sourceCodeUrl: 'https://github.com/HACKHERO4/DLRlr',
  },
  {
    tags: ['mobile-app', 'blockchain-app'],
    image: com,
    title: 'Ecommerce Store',
    category: 'Web-Based App',
    projectUrl: 'https://github.com/HACKHERO4/ecommerce.web',
    sourceCodeUrl: 'https://github.com/HACKHERO4/ecommerce.web',
  },
  {
    tags: ['mobile-app', 'blockchain-app'],
    image: tonstationweb1,
    title: 'Crypto Wallet Tracker',
    category: 'Mobile App',
    projectUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git',
    sourceCodeUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git',
  },

  {
    tags: ['mobile-app', 'blockchain-app'],
    image: identity,
    title: 'Tracer',
    category: 'Mobile App',
    projectUrl: 'https://github.com/HACKHERO4/portpro',
    sourceCodeUrl: 'https://github.com/HACKHERO4/portpro',
  },
  {
    tags: ['mobile-app', 'blockchain-app'],
    image: ghy,
    title: 'Design art',
    category: 'Mobile App',
    projectUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git',
    sourceCodeUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git',
  },
  {
    tags: ['mobile-app', 'blockchain-app'],
    image: service,
    title: 'Pocket site',
    category: 'Mobile App',
    projectUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git',
    sourceCodeUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git',
  },
];

function PortfolioGrid() {
  return (
    <div className="fgt">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 py-5">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function PortfolioItem({ item, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`portfolio-item rounded-lg overflow-hidden relative ${
        isVisible ? 'animate' : ''
      }`}
      style={{ animationDelay: `${index * 0.2}s` }} // Delays animation for each item
    >
      <div className="relative h-48 md:h-64">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="portfolio-content absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm opacity-80">{item.category}</p>
        {item.projectUrl && (
          <a
            href={item.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:underline mt-2 block"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}


export default PortfolioGrid;
