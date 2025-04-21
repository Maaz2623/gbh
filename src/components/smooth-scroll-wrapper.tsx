// components/SmoothScrollWrapper.tsx
"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScrollWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
};
