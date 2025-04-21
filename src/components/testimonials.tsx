"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Dummy Testimonials (Replace with your actual ones)
const testimonials = [
  {
    name: "Pratiba R",
    date: "a year ago",
    review: "It is very nice 👍 for kids 😀",
  },
  {
    name: "Shantha CM",
    date: "a year ago",
    review: "The best school",
  },
  {
    name: "Meena Meena",
    date: "a year ago",
    review: "My best school",
  },
  {
    name: "Ramesh Kumar",
    date: "2 months ago",
    review: "Excellent staff and environment. My child loves going to school!",
  },
  {
    name: "Anita D",
    date: "3 months ago",
    review: "Beautiful campus and caring teachers. Highly recommend.",
  },
  {
    name: "Sunil Sharma",
    date: "5 months ago",
    review: "A school that focuses on overall development of the child.",
  },
  {
    name: "Kristal Chiwariro",
    date: "3 years ago",
    review:
      "This school is full of fun and greenery. I am studying in this school, I love it and I advise you to come and get admission for your child in this school.",
  },
  {
    name: "rashmi Begum",
    date: "5 years ago",
    review:
      "Good school present in a calm and quiet place... school atmosphere is good...",
  },
];

export const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    cardsRef.current.forEach((el, i) => {
      const directions = ["x", "y", "-x", "-y"];
      const randomDir =
        directions[Math.floor(Math.random() * directions.length)];

      const fromVars = {
        opacity: 0,
        x: 0,
        y: 0,
      };

      switch (randomDir) {
        case "x":
          fromVars.x = 50;
          break;
        case "-x":
          fromVars.x = -50;
          break;
        case "y":
          fromVars.y = 50;
          break;
        case "-y":
          fromVars.y = -50;
          break;
      }

      gsap.fromTo(el, fromVars, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-20 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10 max-w-xl">
        <h2 className="text-4xl font-extrabold mb-2">What Parents Say</h2>
        <p className="text-gray-600 text-lg">
          Genuine feedback from our wonderful community
        </p>
      </div>

      {/* Google rating */}
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-semibold flex items-center justify-center gap-2">
          Green Bell High <span className="text-yellow-500">4.3</span>
        </h3>
        <p className="text-sm text-gray-500">
          Based on 47 reviews – powered by Google
        </p>
        <div className="flex justify-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${
                i < 4 ? "text-yellow-400" : "text-gray-300"
              }`}
              fill={i < 4 ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className="bg-white p-6 rounded-2xl shadow-md transition hover:shadow-lg border border-gray-100"
          >
            <p className="text-gray-800 italic mb-4">“{t.review}”</p>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">{t.name}</span> – {t.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
