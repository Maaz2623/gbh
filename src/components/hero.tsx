"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosLeaf } from "react-icons/io";
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";
import { ArrowDownCircleIcon } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const HeroSection = () => {
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
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 1,
        autoAlpha: 1,
        ease: "power3.out",
        delay: 1, // delay before video animation starts
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
        "-=0.6" // small overlap if you want a smooth feel
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
        "-=0.6" // small overlap if you want a smooth feel
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
        "-=0.6" // small overlap if you want a smooth feel
      );
  }, []);

  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       videoRef.current?.play();
  //     }, 2000); // Delay video playback

  //     return () => clearTimeout(timeout);
  //   }, []);

  return (
    <div
      
      className="flex justify-between p-10 items-center min-h-screen overflow-hidden"
    >
      <div className={`z-40 ${montserrat.className} px-3`}>
        <div className="">
          <h1
            className=" text-6xl font-bold"
            id="hero-text"
            style={{ visibility: "hidden" }} // Hide until GSAP animates in
          >
            A School in the Lap
            <span className="flex mt-2">
              of Nature
              <IoIosLeaf className="text-green-500" />.
            </span>
          </h1>
          <p id="hero-subtext" className="text-xl text-gray-800 mt-4">
            Shaping future-ready individuals through care, creativity, and
            character.
          </p>
        </div>
        <div className="h-20 flex justify-start items-end" id="hero-button">
          <Button className="w-1/2 h-14 text-lg cursor-pointer bg-green-600 hover:bg-green-700">
            Explore <ArrowDownCircleIcon className="size-5" />
          </Button>
        </div>
      </div>
      <div className="h-full mt-10">
        <div
          id="video"
          className="overflow-hidden shadow-2xl rounded-lg w-[600px]"
          style={{ visibility: "hidden" }} // Hide until animation
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
  );
};
