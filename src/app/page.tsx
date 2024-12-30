"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ParallaxBackground from './components/ParallaxBackground';
import gideon from './images/gideon.png';
import pat1 from './images/pat1.png';
import PortfolioGrid from './PortfolioGrid';
import { jost } from './fonts';
import { Allura } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplineEmbed from './SplineEmbed';
import './port.css';
import {
  faWhatsapp,
  faLinkedin,
  faTwitter,
  faGithub, // Add this line
} from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {


  return (
    <>
    
      <section
        className={`min-h-screen flex items-center bg-gray-950 text-white relative overflow-hidden ${jost.className}`}
      >
        {/* Parallax Background */}
        <ParallaxBackground />

        {/* Decorative Text - Positioned Behind Other Elements */}
        <div
          className="absolute inset-0 flex items-end justify-end px-4 py-2 text-4xl md:text-9xl font-bold text-gray-800 opacity-10 z-10 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="text-right whitespace-nowrap">
            Mobile, & web Developer
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 z-20 relative">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Section */}
            <div className="md:w-1/2 z-20">
              <div className="mb-4">
                <span className="text-xl sm:text-3xl font-bold text-teal-500">Hello, </span>
                <span className="text-xl sm:text-3xl font-bold text-500">MY NAME IS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 uppercase">
              <span className="text-teal-400 relative">
                  Gideon
                </span>
                <span className="text-white relative ml-2">
                  Nnadi
                </span>
              </h1>
              <div className="mb-6">
                <span className="text-lg sm:text-xl">
                  Flutter, React, Node.js{' '}
                  <strong>Developer</strong>
                </span>
              </div>
              <p className="mb-6 text-sm sm:text-base">
                I have rich experience in web, blockchain and mobile 
                application development. I also have 6 years of experience in game 
                development using Unity. I love to talk with you about your unique projects 
                and how we can collaborate to bring your ideas to life.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="https://github.com/lambo10" className="text-2xl">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-teal-500" />
                </a>
                <a href="https://www.linkedin.com/in/lambert-nnadi-842743178" className="text-2xl">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-teal-500" />
                </a>
                <a href="https://x.com/nnadi_lambert" className="text-2xl">
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl text-teal-500" />
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://drive.google.com/file/d/1seyCzDKAFNcYUvszxoosA74qwMB_kt4a/view?usp=sharing" className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
                  Download CV
                </a>
                <a href="#skills-section" className="text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-gray-900 transition duration-300">
                  My Skills
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 relative mt-10 md:mt-0">
              <div className="relative w-96 h-96 mx-auto z-20">
                {/* Glassy circle background */}
                <div className="absolute inset-0 bg-teal-100 bg-opacity-10 backdrop-filter backdrop-blur-md rounded-full"></div>

                {/* Profile image */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <Image
                    src={gideon}
                    alt="GIDEON Nnadi"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-4 right-0 bg-teal-100 bg-opacity-10 backdrop-filter backdrop-blur-md text-white py-2 px-4 rounded-full z-30">
                  <span className="text-xl font-bold">6 <span className="text-green-500">+</span></span>
                  <span className="text-xs ml-1">YEARS OF <br />EXPERIENCE</span>
                </div>

                {/* Projects badge */}
                <div className="absolute -top-4 -left-4 bg-teal-100 bg-opacity-10 backdrop-filter backdrop-blur-md text-white py-2 px-4 rounded-full z-30">
                  <span className="text-xl font-bold">50</span>
                  <span className="text-xs ml-1">COMPLETED <br />PROJECTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Background Images */}
        <div className="absolute top-4 right-4 w-1/4 h-1/4 opacity-10 z-0">
          <Image
            src={pat1}
            alt="Decorative circle pattern"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>

<section className='relative inset-0 bg-[#00000c]'>
  <h1 className='uii'>My Project</h1>
      <PortfolioGrid/>
</section>
      {/* Updated "What I Do" section */}
      <section id="what-i-do" className="relative bg-[#1e2024] text-white py-20 ">
        <div className="absolute inset-0 bg-[#00000c]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-2">WHAT I DO</h2>
          <div className="flex items-center mb-10">
            <span className="text-green-500 mr-2">MY</span>
            <span className={`text-3xl ${allura.className}`}>Services</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-[#28212e] rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-10">Game Development</h3>
                <h4 className="text-lg font-semibold mb-2">Game Developer</h4>
                <p className="mb-4">Designed and implemented core gameplay mechanics, including player 
                  controls, physics interactions, and AI behavior
                   for a mobile adventure game.</p>
                
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <Image
                  src={pat1}
                  alt="Decorative dot pattern"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Apps Development */}
            <div className="bg-[#28212e] rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-10">Apps Development</h3>
                <h4 className="text-lg font-semibold mb-2">iOS & Android</h4>
                <p className="mb-4">Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.</p>
                
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <Image
                  src={pat1}
                  alt="Decorative dot pattern"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Game Development */}
            <div className="bg-[#28212e] rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-10">Web development</h3>
                <h4 className="text-lg font-semibold mb-2">React & Next.js</h4>
                <p className="mb-4">Creating website & describes the design, development and release of a website. Developing unique mobile android and ios games.</p>
               
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <Image
                  src={pat1}
                  alt="Decorative dot pattern"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='relative  inset-0 bg-[#00000c]'>
      <SplineEmbed/>
      <div className='gyt'></div>
</section>



       {/* Professional Skills section */}
       <section id="skills-section" className="relative bg-[#1e2024] text-white py-20">
        <div className="absolute inset-0 bg-[#00000c]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-2">PROFESSIONAL SKILLS</h2>
          <div className="flex items-center mb-10">
            <span className="text-green-500 mr-2">MY</span>
            <span className={`text-3xl ${allura.className}`}>Talent</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { skill: "Node.js", percentage: 90, description: "Building scalable and efficient server-side applications with Node.js" },
              { skill: "React", percentage: 95, description: "Creating dynamic and responsive user interfaces using React" },
              { skill: "Next.js", percentage: 95, description: "Developing high-performance, SEO-friendly React applications with Next.js" },
              { skill: "PHP", percentage: 90, description: "Crafting robust backend solutions and content management systems with PHP" },
              { skill: "Unity", percentage: 85, description: "Designing and developing interactive 2D and 3D games using Unity engine" },
              { skill: "TypeScript", percentage: 90, description: "Enhancing JavaScript development with static typing and advanced features" },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{item.skill}</h3>
                  <span className="text-green-500">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer section */}
      <footer className="relative bg-[#1e2024] text-white py-8">
        <div className="absolute inset-0 bg-[#1c1e27]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://github.com/lambo10" className="text-2xl hover:text-green-500 transition-colors">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/lambert-nnadi-842743178" className="text-2xl hover:text-green-500 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/nnadi_lambert" className="text-2xl hover:text-green-500 transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="text-sm">
              &copy; 2024 GideonNnadi.com
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
