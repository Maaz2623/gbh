import AboutSection from "@/components/about";
import Certifications from "@/components/certifications";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { SmoothScrollWrapper } from "@/components/smooth-scroll-wrapper";
import WhyUsSection from "@/components/why-us-section";
import React from "react";
import GallerySection from "@/components/gallery-section";
import PrincipalMessage from "@/components/principal-message";
import { TestimonialSection } from "@/components/testimonials";

const HomePage = () => {
  return (
    <SmoothScrollWrapper>
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
          <div className="pt-20 lg:pt-10">
            <HeroSection />
            <AboutSection />
            <PrincipalMessage />
            <Certifications />
            <WhyUsSection />
            <TestimonialSection />
            <GallerySection />
          </div>
          <Footer />
        </div>
      </div>
    </SmoothScrollWrapper>
  );
};

export default HomePage;
