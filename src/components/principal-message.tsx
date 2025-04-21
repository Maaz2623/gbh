"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PrincipalMessage = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 flex items-center justify-center"
    >
      <div
        ref={cardRef}
        className="max-w-3xl shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl p-8 sm:p-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
          A Word by the Principal
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed italic mb-6">
          “Do what is right, not what is easy! Green Bell High is a home away
          from home, a school in the lap of nature, amidst nature in a serene
          beautiful environment, away from pollution and the hustle bustle of
          the city. An idle place for education, where kids are learning to be a
          simple, caring, creative and confident human being. We the team here
          gear up the young minds to face the challenges in the ever changing
          society.”
        </p>
        <p className="text-right text-green-600 font-semibold text-lg mt-4">
          — J. Umadevi
          <br />
          <span className="text-sm font-normal text-gray-500">Principal</span>
        </p>
      </div>
    </section>
  );
};

export default PrincipalMessage;
