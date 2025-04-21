"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyUsSection = () => {
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
        "#why-us-heading",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      ).fromTo(
        ".why-us-item",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.3 },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <div className="min-h-screen space-y-14 p-6 md:p-10" ref={containerRef}>
      <h2
        id="why-us-heading"
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-10 text-green-600"
      >
        Why <span className="text-green-800">Us?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          id="lush-campus"
          className="why-us-item bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-green-800">
            Lush, Serene Campus
          </h3>
          <p className="mt-3 text-gray-700">
            Our picturesque campus, surrounded by lush greenery, provides the
            perfect setting for students to thrive in a calm and peaceful
            environment.
          </p>
        </div>
        <div
          id="holistic-education"
          className="why-us-item bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-green-800">
            Holistic Education
          </h3>
          <p className="mt-3 text-gray-700">
            We focus on the overall development of the student, blending
            academics with personal and emotional growth.
          </p>
        </div>
        <div
          id="experienced-faculty"
          className="why-us-item bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-green-800">
            Experienced and Dedicated Faculty
          </h3>
          <p className="mt-3 text-gray-700">
            Our team of highly qualified and dedicated teachers are committed to
            shaping young minds with a passion for education.
          </p>
        </div>
        <div
          id="innovative-teaching"
          className="why-us-item bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-green-800">
            Innovative Teaching Methods
          </h3>
          <p className="mt-3 text-gray-700">
            We embrace new-age teaching methods, using technology and
            interactive sessions to make learning more engaging and effective.
          </p>
        </div>
        <div
          id="environmental-consciousness"
          className="why-us-item bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-green-800">
            Environmental Consciousness
          </h3>
          <p className="mt-3 text-gray-700">
            We instill a sense of environmental responsibility in students,
            encouraging sustainable practices and green initiatives.
          </p>
        </div>
        <div
          id="best-cbse"
          className="why-us-item bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-green-800">
            Best CBSE School
          </h3>
          <p className="mt-3 text-gray-700">
            Our school follows the CBSE curriculum, which provides a
            well-rounded, recognized education across the country.
          </p>
        </div>
        <div
          id="nurturing"
          className="why-us-item bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-green-800">
            Dedication to Nurturing
          </h3>
          <p className="mt-3 text-gray-700">
            We are committed to nurturing every student&apos;s unique potential,
            supporting them in their academic and personal growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
