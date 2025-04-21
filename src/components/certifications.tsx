"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "CBSE Approval",
    description:
      "Officially affiliated with the Central Board of Secondary Education (CBSE), ensuring curriculum excellence and national academic standards.",
    url: "/docs/CBSE-approvalcard-1.pdf",
  },
  {
    title: "Registration Certificate",
    description:
      "Proof of our school’s legal recognition and registration under the Education Act, verifying our commitment to authentic academic operations.",
    url: "/docs/registration.pdf",
  },
  {
    title: "NOC Certificate",
    description:
      "A No Objection Certificate (NOC) granted by the State Education Department allowing us to operate under CBSE regulations.",
    url: "/docs/noc.pdf",
  },
  {
    title: "Building Safety Certificate",
    description:
      "Issued by the local municipal authority, this certificate ensures that our campus infrastructure is secure and adheres to safety norms.",
    url: "/docs/building-safety.pdf",
  },
  {
    title: "Fire Safety Certificate",
    description:
      "Certified by the Fire Department, verifying that our school is fully equipped with fire extinguishers, alarms, and evacuation procedures.",
    url: "/docs/fire-safety.pdf",
  },
  {
    title: "DEO Certificate",
    description:
      "District Education Officer’s certification validating our school’s academic and operational standards for district-level compliance.",
    url: "/docs/deo.pdf",
  },
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <section
      className="min-h-screen py-20 px-6 flex flex-col items-center"
      ref={sectionRef}
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mb-12" ref={headingRef}>
        <h2 className="text-4xl font-extrabold mb-4">
          <span className="text-green-600">Our</span> Certifications
        </h2>
        <p className="text-gray-700 text-lg">
          At GreenBell High School, we take pride in our commitment to providing
          a well-rounded and high-quality education backed by essential
          certifications and standards.
        </p>
      </div>

      {/* Certifications List */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className={`bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
              idx % 2 === 0 ? "h-auto" : "h-auto"
            }`}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-600 mb-4">{cert.description}</p>
            <Button asChild>
              <Link href={cert.url}>Open</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
