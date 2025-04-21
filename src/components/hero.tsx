"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosLeaf } from "react-icons/io";
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";
import { PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import { ContactDialog } from "./contact-dialog";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const HeroSection = () => {
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    const body = document.querySelector("body");
    body?.classList.add("overflow-hidden");

    const tl = gsap.timeline({
      onComplete: () => {
        body?.classList.remove("overflow-hidden");
      },
    });

    tl.fromTo(
      "#video",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        ease: "power3.out",
        delay: 1,
        onStart: () =>
          document.getElementById("video")?.classList.remove("invisible"),
      }
    )
      .fromTo(
        "#hero-text",
        {
          y: 100,
          autoAlpha: 0,
        },
        {
          y: 0,
          duration: 1,
          delay: 0.5,
          autoAlpha: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .fromTo(
        "#hero-subtext",
        {
          y: 100,
          autoAlpha: 0,
        },
        {
          y: 0,
          duration: 1,
          delay: 0.5,
          autoAlpha: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .fromTo(
        "#hero-button",
        {
          x: 100,
          autoAlpha: 0,
        },
        {
          x: 0,
          duration: 1,
          delay: 0.5,
          autoAlpha: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <>
      <ContactDialog open={open} setOpen={setOpen} />

      <div className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen px-10 py-12 md:py-24 overflow-hidden">
        <div
          className={`z-40 ${montserrat.className} text-center lg:text-left`}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold invisible"
            id="hero-text"
          >
            A School in the Lap
            <span className="flex justify-center lg:justify-start mt-2">
              of Nature
              <IoIosLeaf className="text-green-500 ml-2 text-3xl size-10" />
            </span>
          </h1>
          <p
            id="hero-subtext"
            className="text-lg sm:text-xl lg:text-2xl text-gray-800 mt-4 invisible"
          >
            Shaping future-ready individuals through care, creativity, and
            character.
          </p>
          <div
            className="h-20 flex justify-center lg:justify-start items-end invisible mt-8"
            id="hero-button"
          >
            <Button
              onClick={() => setOpen(true)}
              className="w-full sm:w-1/2 lg:w-1/3 h-14 text-lg cursor-pointer bg-green-600 hover:bg-green-700 transition duration-300"
            >
              Contact Us <PhoneCallIcon className="inline-block ml-2" />
            </Button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 w-full max-w-4xl">
          <div
            id="video"
            className="overflow-hidden shadow-2xl rounded-lg w-full invisible"
          >
            <video
              className="object-cover w-full h-full"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src="/gbh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
