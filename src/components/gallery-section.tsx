"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // ✅ useMemo so it doesn’t recreate every render
  const images = useMemo(
    () => [
      "/gallery/2.jpg",
      "/gallery/3.jpg",
      "/gallery/4.jpg",
      "/gallery/5.jpg",
      "/gallery/6.jpg",
      "/gallery/7.jpg",
      "/gallery/8.jpg",
      "/gallery/9.jpg",
      "/gallery/10.jpg",
    ],
    []
  );

  const randomHeights = useMemo(
    () => ["h-[250px]", "h-[300px]", "h-[350px]", "h-[400px]", "h-[450px]"],
    []
  );

  const [heights, setHeights] = useState<string[] | null>(null);

  useEffect(() => {
    // ✅ Randomize heights on client only, once
    setHeights(
      images.map(
        () => randomHeights[Math.floor(Math.random() * randomHeights.length)]
      )
    );
  }, [images, randomHeights]);

  useEffect(() => {
    if (!heights) return;

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      }
    );

    // Cards animation
    cardsRef.current.forEach((el, index) => {
      const fromAxis = Math.random() > 0.5 ? "x" : "y";
      const direction = Math.random() > 0.5 ? 100 : -100;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          [fromAxis]: direction,
        },
        {
          opacity: 1,
          [fromAxis]: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, [heights]);

  if (!heights) return null;

  return (
    <section
      className="min-h-screen py-20 px-6 flex flex-col items-center"
      ref={sectionRef}
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mb-12" ref={headingRef}>
        <h2 className="text-4xl font-extrabold mb-4">
          <span className="text-green-600">Our</span> Gallery
        </h2>
        <p className="text-gray-700 text-lg">
          Explore our amazing collection of images showcasing various aspects of
          our work and achievements.
        </p>
      </div>

      {/* Gallery Items */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 w-full max-w-7xl">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`gallery-item overflow-hidden rounded-lg shadow-lg mb-4 break-inside-avoid ${heights[idx]}`}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Gallery Image ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform transform hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
