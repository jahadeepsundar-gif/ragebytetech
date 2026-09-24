"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { STUDIO_EASE } from "./MotionPrimitives";

interface PageLoadSequenceProps {
  children: React.ReactNode;
}

export function PageLoadSequence({ children }: PageLoadSequenceProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Immediate mounting triggers the coordinated cascade
    setMounted(true);
  }, []);

  return (
    <>
      {/* Subtle initial veil that quickly reveals the page in <300ms without blocking UI */}
      <AnimatePresence>
        {!mounted && (
          <motion.div
            key="page-veil"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: STUDIO_EASE }}
            className="fixed inset-0 z-[9999] pointer-events-none bg-background"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: STUDIO_EASE }}
        className="flex min-h-screen flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
