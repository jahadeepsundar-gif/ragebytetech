"use client";

import React, { useState, useEffect, useRef } from "react";
import { ThreeUIIntro } from "@/src/shaders/neuform-isolated/NeuformIsolatedEffects";
import { announceIntroDone } from "@/components/motion/Premium";

const SEEN_KEY = "ragebyte_preloader_seen";
// Fade duration of the overlay (keep in sync with the duration-500 class below)
const FADE_MS = 500;
// If the intro iframe has not started animating by this point, give up on it
const START_TIMEOUT_MS = 1500;
// Once started, the ThreeUI wordmark ends at 1.7s; this is the safety net
// in case its completion message never arrives
const RUN_TIMEOUT_MS = 2300;

export function RageBytePreloader() {
  const [active, setActive] = useState(false);
  const [fading, setFading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const finishRef = useRef<() => void>();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) {
        announceIntroDone();
        return;
      }
    } catch {
      // In restricted environments, proceed
    }

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      try {
        sessionStorage.setItem(SEEN_KEY, "true");
      } catch {}
      announceIntroDone();
      return;
    }

    setActive(true);

    // Lock scroll without letting the page reflow when the scrollbar disappears
    const { body } = document;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let finished = false;
    let started = false;

    const unlock = () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      timers.forEach(clearTimeout);
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("keydown", handleKey);
      try {
        sessionStorage.setItem(SEEN_KEY, "true");
      } catch {
        // Ignore storage restrictions
      }
      // Keep the scroll lock until the overlay is gone so the scrollbar
      // doesn't pop in (and reflow the page) mid-fade
      setFading(true);
      // Page entrance choreography plays as the overlay fades away
      announceIntroDone();
      timers.push(
        setTimeout(() => {
          unlock();
          setActive(false);
        }, FADE_MS + 50),
      );
    };

    const handleMessage = (event: MessageEvent) => {
      const frame = overlayRef.current?.querySelector("iframe");
      if (!frame || event.source !== frame.contentWindow) return;
      if (event.data?.threeuiIntroStart && !started) {
        started = true;
        timers.push(setTimeout(finish, RUN_TIMEOUT_MS));
      } else if (event.data?.threeuiIntroComplete) {
        finish();
      }
    };

    finishRef.current = finish;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") finish();
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("keydown", handleKey);
    timers.push(
      setTimeout(() => {
        if (!started) finish();
      }, START_TIMEOUT_MS),
    );

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("keydown", handleKey);
      timers.forEach(clearTimeout);
      unlock();
    };
  }, []);

  // Keep keyboard focus out of the page while the overlay covers it;
  // interaction is handed back as soon as the fade starts
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!active || fading || !overlay) return;
    const inerted: HTMLElement[] = [];
    Array.from(document.body.children).forEach((child) => {
      if (child === overlay || !(child instanceof HTMLElement) || child.inert) return;
      child.inert = true;
      inerted.push(child);
    });
    return () => inerted.forEach((el) => (el.inert = false));
  }, [active, fading]);

  if (!active) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      // Click anywhere to skip the intro
      onClick={() => finishRef.current?.()}
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden transition-opacity duration-500 ease-out select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto cursor-pointer"
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
            // Let clicks reach the overlay (for skipping) instead of the iframe
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

export default RageBytePreloader;
