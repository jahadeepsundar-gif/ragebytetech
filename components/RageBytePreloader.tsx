"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ThreeUIIntro } from "@/src/shaders/neuform-isolated/NeuformIsolatedEffects";

export function RageBytePreloader() {
  const [active, setActive] = useState(false);
  const [fading, setFading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const completeLoader = useCallback(() => {
    if (fading) return;
    setFading(true);

    try {
      sessionStorage.setItem("ragebyte_preloader_seen", "true");
    } catch {
      // Ignore storage restrictions
    }

    // Restore body scroll and interaction
    document.body.style.overflow = "";
    document.body.style.pointerEvents = "";

    // Unmount after smooth transition
    setTimeout(() => {
      setActive(false);
    }, 550);
  }, [fading]);

  useEffect(() => {
    setIsClient(true);

    // Play once on initial load only: check sessionStorage
    try {
      const alreadySeen = sessionStorage.getItem("ragebyte_preloader_seen");
      if (alreadySeen) {
        return;
      }
    } catch {
      // In restricted environments, proceed
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      try {
        sessionStorage.setItem("ragebyte_preloader_seen", "true");
      } catch {}
      return;
    }

    // Activate the preloader
    setActive(true);
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    // Listen for threeui completion message from iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.threeuiIntroComplete) {
        completeLoader();
      }
    };
    window.addEventListener("message", handleMessage);

    // Guaranteed fallback timer: ThreeUI animation endTime is 1.7s;
    // fallback fires at 2.2s to prevent blocking indefinitely under any circumstance
    timerRef.current = setTimeout(() => {
      completeLoader();
    }, 2200);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
    };
  }, [completeLoader]);

  if (!isClient || !active) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden pointer-events-auto transition-opacity duration-500 ease-out select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <ThreeUIIntro
          className="w-full h-full border-0"
          mode="dark"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            background: "#000000",
          }}
        />
      </div>
    </div>
  );
}

export default RageBytePreloader;
