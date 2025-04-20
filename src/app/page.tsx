import AboutSection from "@/components/about";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative">
        <Navbar />

        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default HomePage;
