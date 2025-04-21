"use client";

import { PhoneCallIcon } from "lucide-react";
import React from "react";

export const HangBoard = () => {
  return (
    <div className="relative flex justify-center items-center w-[100px] h-[40px] lg:w-[140px] lg:h-[60px]">
      {/* Board */}
      <div className="w-full h-[40px] bg-yellow-300 text-black font-bold text-sm flex flex-col items-center justify-center rounded shadow-lg relative z-10 rotate-[-2deg] animate-hang-board border border-yellow-400">
        Admissions Open <PhoneCallIcon className="size-3" />
      </div>

      {/* Strings */}
      <div className="absolute top-[-10px] left-3 w-0.5 h-3 bg-black z-0"></div>
      <div className="absolute top-[-10px] right-3 w-0.5 h-3 bg-black z-0"></div>

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
