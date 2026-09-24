"use client";

/**
 * Premium motion layer: opt-in primitives added on top of MotionPrimitives.
 * Everything here is applied explicitly per section. The book (BookshelfServices)
 * and person-details (TeamSection / TeamCard / CharacterCarousel) animations do
 * not use these and are intentionally left untouched.
 */

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
  type MotionValue,
} from "framer-motion";
import { STUDIO_EASE } from "./MotionPrimitives";

/* ------------------------------------------------------------------------- */
/* Intro handshake: the preloader announces when the page is actually visible */
/* ------------------------------------------------------------------------- */

export const INTRO_DONE_EVENT = "ragebyte:intro-done";

declare global {
  interface Window {
    __ragebyteIntroDone?: boolean;
  }
}

export function announceIntroDone() {
  if (typeof window === "undefined" || window.__ragebyteIntroDone) return;
  window.__ragebyteIntroDone = true;
  window.dispatchEvent(new Event(INTRO_DONE_EVENT));
}

/** True once the loading intro has finished (or was skipped). */
export function useIntroReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.__ragebyteIntroDone) {
      setReady(true);
      return undefined;
    }
    const onDone = () => setReady(true);
    window.addEventListener(INTRO_DONE_EVENT, onDone);
    // Safety net: never hold content back if the intro never reports in
    const fallback = window.setTimeout(onDone, 4500);
    return () => {
      window.removeEventListener(INTRO_DONE_EVENT, onDone);
      window.clearTimeout(fallback);
    };
  }, []);
  return ready;
}

/* ------------------------------------------------------------------------- */
/* Heading mask reveal: the heading rises out of a clipped slot and un-skews   */
/* ------------------------------------------------------------------------- */

interface HeadingRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function HeadingReveal({ children, delay = 0, className = "", ...props }: HeadingRevealProps) {
  const reduce = useReducedMotion();
  return (
    // The mask (outer) is what gets observed: the heading itself starts pushed
    // below the clip, so an observer on it would never see it as "in view".
    // Padding/negative margin keeps descenders from being clipped by the mask.
    <motion.div
      className={`overflow-hidden pb-[0.12em] -mb-[0.12em] ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        variants={{
          hidden: reduce ? { opacity: 0 } : { y: "108%", skewY: 4, opacity: 0.001 },
          shown: { y: "0%", skewY: 0, opacity: 1 },
        }}
        transition={{ duration: reduce ? 0.2 : 0.95, delay, ease: STUDIO_EASE }}
        style={{ transformOrigin: "0% 100%" }}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** A single line that rises from a mask; used for choreographed multi-line headlines. */
export function MaskLine({
  children,
  delay = 0,
  play = true,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  play?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${className}`}>
      <motion.span
        className="block"
        initial={reduce ? { opacity: 0 } : { y: "110%", rotate: 2.5 }}
        animate={play ? { y: "0%", rotate: 0, opacity: 1 } : undefined}
        transition={{ duration: reduce ? 0.2 : 1.05, delay: reduce ? 0 : delay, ease: STUDIO_EASE }}
        style={{ transformOrigin: "0% 100%" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------------- */
/* Scroll progress rail                                                       */
/* ------------------------------------------------------------------------- */

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-foreground"
      style={{ scaleX }}
    />
  );
}

/* ------------------------------------------------------------------------- */
/* Magnetic: children lean toward the pointer, then spring home               */
/* ------------------------------------------------------------------------- */

export function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (event: React.PointerEvent) => {
    if (reduce || event.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((event.clientX - (r.left + r.width / 2)) * strength);
    y.set((event.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------------- */
/* Parallax: scroll-linked drift for decorative or media layers               */
/* ------------------------------------------------------------------------- */

export function useParallax(target: React.RefObject<HTMLElement>, distance = 40): MotionValue<number> {
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
}

/* ------------------------------------------------------------------------- */
/* Scroll rail: a line that fills as a section scrolls through the viewport   */
/* ------------------------------------------------------------------------- */

export function ScrollRail({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute w-px bg-foreground/10 ${className}`}>
      <motion.div
        className="absolute inset-0 origin-top bg-foreground"
        style={{ scaleY: reduce ? 1 : scaleY }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Spotlight: cards marked [data-spotlight] get a light that follows the cursor */
/* ------------------------------------------------------------------------- */

export function SpotlightTracker() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;
    let frame = 0;
    let last: PointerEvent | null = null;
    const apply = () => {
      frame = 0;
      if (!last) return;
      const el = (last.target as Element | null)?.closest?.<HTMLElement>("[data-spotlight]");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${last.clientX - r.left}px`);
      el.style.setProperty("--spot-y", `${last.clientY - r.top}px`);
    };
    const onMove = (event: PointerEvent) => {
      last = event;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
