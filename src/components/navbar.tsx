"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"], // medium-bold for professional look
  display: "swap",
});

const navLinks = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About",
    id: "#about",
  },
];

export const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      "navbar",
      {
        y: -100,
      },
      {
        y: 0,
      }
    );
  });

  return (
    <header
      id="navbar"
      className="px-6 absolute top-0 left-0 w-full py-4 h-20  flex justify-between items-center border-b backdrop-blur-xl  bg-white/30"
    >
      <div className="flex items-center gap-x-4">
        <Image
          src="/gbh-logo.png"
          alt="Green Bell High Logo"
          width={48}
          height={48}
          className="object-contain"
        />
        <h1
          className={`${montserrat.className} text-2xl sm:text-3xl font-semibold text-gray-800`}
        >
          Green Bell High
        </h1>
      </div>

      <div className="flex justify-between items-center gap-x-5">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.id} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>
      <Button>Contact Us</Button>
    </header>
  );
};
