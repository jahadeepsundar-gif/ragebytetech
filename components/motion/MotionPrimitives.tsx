"use client";

import React from "react";
import { motion, useReducedMotion, Variants, HTMLMotionProps } from "framer-motion";

// Studio Easing Curve: High initial velocity, deceleration into final settle
export const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Default durations
export const MOTION_DURATIONS = {
  fast: 0.25,
  normal: 0.55,
  slow: 0.75,
  stagger: 0.08,
};

// 1. SCROLL REVEAL CONTAINER
interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  viewportMargin?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  distance = 24,
  duration = MOTION_DURATIONS.normal,
  delay = 0,
  className = "",
  viewportMargin = "-60px",
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: STUDIO_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 2. STAGGER CONTAINER & ITEMS FOR CARDS/GRIDS
interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerInterval?: number;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
}

export function StaggerContainer({
  children,
  staggerInterval,
  staggerDelay,
  delayChildren = 0.05,
  className = "",
  viewportMargin = "-60px",
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveStagger = staggerDelay ?? staggerInterval ?? MOTION_DURATIONS.stagger;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : effectiveStagger,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}

export function StaggerItem({
  children,
  distance = 24,
  className = "",
  ...props
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : MOTION_DURATIONS.normal,
        ease: STUDIO_EASE,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// 3. TEXT REVEAL FOR MAJOR HEADINGS
interface TextRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({
  children,
  delay = 0,
  className = "",
  ...props
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.6,
        delay,
        ease: STUDIO_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 4. SCALE-IN FOR ENCLOSURES & DETAIL PANELS
interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  initialScale?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({
  children,
  initialScale = 0.97,
  delay = 0,
  duration = MOTION_DURATIONS.normal,
  className = "",
  ...props
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: shouldReduceMotion ? 1 : initialScale,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: STUDIO_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 5. DIVIDER HAIRLINE REVEAL
interface DividerRevealProps extends HTMLMotionProps<"div"> {
  className?: string;
  delay?: number;
}

export function DividerReveal({
  className = "border-t border-white/10",
  delay = 0.1,
  ...props
}: DividerRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ scaleX: shouldReduceMotion ? 1 : 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.7,
        delay,
        ease: STUDIO_EASE,
      }}
      style={{ transformOrigin: "left" }}
      className={className}
      {...props}
    />
  );
}
