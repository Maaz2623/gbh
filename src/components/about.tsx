"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = ({ text, end }: { text: string; end: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="w-[250px] rounded-lg bg-gray-500/10 backdrop-blur-3xl border-white flex justify-start items-center relative aspect-video border px-6 shadow-lg transition-all duration-500"
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
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const containerRef = useRef<HTMLDivElement>(null); // ✅ For gsap context

  useGSAP(
    () => {
      const body = document.querySelector("body");
      body?.classList.add("overflow-hidden");

      const tl = gsap.timeline({
        onComplete: () => {
          body?.classList.remove("overflow-hidden");
        },
      });

      tl.fromTo(
        "#about-super-container",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.3 }
      )
        .fromTo(
          "#about-image",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, delay: 0.2 }
        )
        .fromTo(
          "#about-heading",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, delay: 0.2 }
        )
        .fromTo(
          "#about-text",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, delay: 0.2 }
        );
    },
    { dependencies: [inView], scope: containerRef }
  );

  return (
    <div ref={inViewRef} className="min-h-screen space-y-14 p-10">
      <div className="flex justify-center items-center gap-x-7 flex-wrap">
        <Statistics end={2000} text="Current Enrollments" />
        <Statistics end={90} text="Qualified Staff" />
        <Statistics end={80} text="Clubs & Activities" />
        <Statistics end={100} text="Active PTFA Members" />
      </div>

      {inView && (
        <div
          className="flex justify-center items-center"
          id="about-super-container"
          ref={containerRef} // ✅ Scope is correctly passed here
        >
          <div className="bg-white/20 w-3/4 gap-x-4 backdrop-blur-xl flex p-10 rounded-xl shadow-2xl">
            <div className="shrink-0" id="about-image">
              <Image
                src={`/about-us.png`}
                alt="about-us"
                width={250}
                height={250}
                className="rounded-lg shrink-0 shadow-xl border hover:shadow-2xl transition-all"
              />
            </div>
            <div>
              <h2 className="text-5xl font-extrabold" id="about-heading">
                About <span className="text-green-600">Us</span>
              </h2>
              <p id="about-text" className="text-wrap mt-2 text-gray-800">
                At GreenBell High (One of the best schools in Bangalore), we
                believe in fostering holistic development, where academics
                seamlessly blend with the soothing embrace of nature. Our
                picturesque campus, surrounded by lush greenery, set against the
                backdrop of serene landscapes, provides an ideal setting for
                young minds to flourish.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
