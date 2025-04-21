"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const HangBoard = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#hangboard",
      {
        y: -200,
      },
      {
        y: 0,
        delay: 2,
      }
    );
  });

  return (
    <div
      id="hangboard"
      className="relative flex justify-center items-center w-[150px] sm:w-[150px] h-[40px] sm:h-[40px]"
    >
      {/* Board */}
      <div className="w-full h-full bg-yellow-300 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-1 px-2 rounded shadow-lg relative z-10 rotate-[-2deg] animate-hang-board border border-yellow-400 transition-transform hover:scale-105">
        <span>Admissions Open</span>
      </div>

      {/* Strings */}
      <div className="absolute top-[-10px] left-3 w-0.5 h-3 bg-black z-0" />
      <div className="absolute top-[-10px] right-3 w-0.5 h-3 bg-black z-0" />

      {/* Hook or Nail */}
      <svg
        className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C10.34 2 9 3.34 9 5c0 .89.39 1.69 1 2.23V8H8v2h8V8h-2V7.23c.61-.54 1-1.34 1-2.23 0-1.66-1.34-3-3-3z" />
      </svg>
    </div>
  );
};
