"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Statistics = ({ text, end }: { text: string; end: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="w-[250px] max-w-full rounded-lg bg-gray-500/10 backdrop-blur-3xl border-white flex justify-start items-center relative aspect-video border px-6 shadow-lg transition-all duration-500"
    >
      <div>
        {inView ? (
          <CountUp
            className="text-4xl font-extrabold text-green-800"
            start={0}
            end={end}
            duration={3}
            suffix="+"
            delay={1}
          />
        ) : (
          <span className="text-4xl font-extrabold text-green-800">0+</span>
        )}
        <p className="text-lg mt-2 text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        "#about-super-container",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          "#about-image",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.8"
        )
        .fromTo(
          "#about-heading",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.7"
        )
        .fromTo(
          "#about-text",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.7"
        );
    },
    { scope: containerRef }
  );

  return (
    <div id="about" className="min-h-screen space-y-14 p-6 md:p-10">
      {/* Statistics Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        <Statistics end={2000} text="Current Enrollments" />
        <Statistics end={90} text="Qualified Staff" />
        <Statistics end={80} text="Clubs & Activities" />
        <Statistics end={100} text="Active PTFA Members" />
      </div>

      {/* About Section */}
      <div
        className="flex justify-center items-center"
        id="about-super-container"
        ref={containerRef}
      >
        <div className="bg-white/20 w-full max-w-6xl backdrop-blur-xl flex flex-col md:flex-row p-6 md:p-10 rounded-xl border gap-6">
          {/* Image */}
          <div className="mx-auto md:mx-0" id="about-image">
            <Image
              src={`/about-us.png`}
              alt="about-us"
              width={600} // Default width for smaller devices
              height={600} // Default height for smaller devices
              className="rounded-lg shadow-xl border hover:shadow-2xl transition-all w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] object-cover" // Responsive classes for image size
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left" id="about-text-block">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
              id="about-heading"
            >
              About <span className="text-green-600">Us</span>
            </h2>
            <p
              id="about-text"
              className="mt-4 text-gray-800 text-base sm:text-lg"
            >
              At GreenBell High (One of the best schools in Bangalore), we
              believe in fostering holistic development, where academics
              seamlessly blend with the soothing embrace of nature. Our
              picturesque campus, surrounded by lush greenery, set against the
              backdrop of serene landscapes, provides an ideal setting for young
              minds to flourish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
