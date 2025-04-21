"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  });

  return (
    <header
      ref={navRef}
      id="navbar"
      className="fixed top-0 left-0 z-50 w-full px-6 py-4 h-20 flex justify-between items-center border-b backdrop-blur-xl bg-white/50 shadow-md"
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-x-3">
        <Image
          src="/gbh-logo.png"
          alt="Green Bell High Logo"
          width={48}
          height={48}
          className="object-contain"
        />
        <h1
          className={`${montserrat.className} text-xl sm:text-2xl font-semibold text-gray-800 whitespace-nowrap`}
        >
          Green Bell High
        </h1>
      </div>

      {/* Links */}
      <nav className="hidden md:flex items-center gap-x-6 text-gray-700 text-sm sm:text-base font-medium"></nav>

      {/* CTA Button */}
      <div className="hidden sm:block">
        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-5 py-2 transition duration-300">
          Contact Us
        </Button>
      </div>
    </header>
  );
};
