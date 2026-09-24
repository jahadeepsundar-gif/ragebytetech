"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { STUDIO_EASE } from "@/components/motion/MotionPrimitives";
import { createTopDockController } from "@/src/shaders/animated-top-dock/topDockController";
import { ANIMATED_TOP_DOCK_DEFAULTS } from "@/src/shaders/animated-top-dock/AnimatedTopDock";
import "@/src/shaders/threeui.css";
import "@/styles/navbar-dock.css";

import { Magnetic } from "@/components/motion/Premium";
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// Icons are the authored Sable dock glyphs (16x16, stroked) from AnimatedTopDock.tsx
const navItems: NavItem[] = [
  {
    label: "WORK",
    href: "/work",
    icon: <><rect x="2" y="3" width="12" height="10" rx="1.5" /><path d="M2 6h12M5 4.5h.01M7 4.5h.01" /></>,
  },
  {
    label: "SERVICES",
    href: "/services",
    icon: <><rect x="2.25" y="2.25" width="4.5" height="4.5" rx=".8" /><rect x="9.25" y="2.25" width="4.5" height="4.5" rx=".8" /><rect x="2.25" y="9.25" width="4.5" height="4.5" rx=".8" /><rect x="9.25" y="9.25" width="4.5" height="4.5" rx=".8" /></>,
  },
  {
    label: "ABOUT",
    href: "/about",
    icon: <><circle cx="3" cy="8" r="1.5" /><circle cx="12.5" cy="3.5" r="1.5" /><circle cx="12.5" cy="12.5" r="1.5" /><path d="M4.5 7.3 11 4.2M4.5 8.7l6.5 3.1" /></>,
  },
  {
    label: "CONTACT",
    href: "/contact",
    icon: <><path d="M4 2.25h5.4L12 4.85v8.9H4z" /><path d="M9.25 2.25V5h2.7M6 8h4M6 10.5h4" /></>,
  },
];

/** Sable dock spring (ThreeUI AnimatedTopDock) with the configured props */
const DOCK_OPTIONS = {
  proximity: ANIMATED_TOP_DOCK_DEFAULTS.proximity, // 122
  spring: ANIMATED_TOP_DOCK_DEFAULTS.spring, // 0.19
  damping: ANIMATED_TOP_DOCK_DEFAULTS.damping, // 0.70
  widthGrowth: ANIMATED_TOP_DOCK_DEFAULTS.widthGrowth, // 17
  heightGrowth: ANIMATED_TOP_DOCK_DEFAULTS.heightGrowth, // 16
  drop: ANIMATED_TOP_DOCK_DEFAULTS.drop, // 3.5
  axis: "x" as const,
};

const isActivePath = (pathname: string, href: string) =>
  pathname === href || (href !== "/" && pathname.startsWith(href));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dockRef = useRef<HTMLElement>(null);

  // The controller springs every [data-dock-item] toward the pointer
  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return undefined;
    return createTopDockController(dock, () => DOCK_OPTIONS);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none ${
        scrolled ? "pt-2 sm:pt-3 pb-2" : "pt-3 sm:pt-5 pb-2"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Floating Capsule Container with Smooth Initial Entry */}
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: STUDIO_EASE }}
          className={`pointer-events-auto relative flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-white/[0.14] bg-background/95 shadow-[0_20px_50px_-15px_rgba(17,17,17,0.27)] backdrop-blur-2xl"
              : "border-white/[0.10] bg-background/80 shadow-[0_16px_40px_-20px_rgba(17,17,17,0.24)] backdrop-blur-xl"
          }`}
        >
          {/* 1. LEFT — Kaatchi Productions BRAND */}
          <Link
            href="/"
            aria-label="Kaatchi Productions Home"
            className="group flex items-center gap-2.5 sm:gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-0.5 px-1 transition-opacity hover:opacity-95 shrink-0"
          >
            <div className="relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-xl border border-white/10 bg-surface/90 p-1.5 transition-colors duration-200 group-hover:border-accent/60">
              <Terminal className="h-4 w-4 text-accent transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-[-0.03em] text-foreground leading-none">
                Kaatchi <span className="text-accent">Productions</span>
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-zinc-500 uppercase mt-0.5">
                TECHNICAL STUDIO
              </span>
            </div>
          </Link>

          {/* 2. CENTER — SABLE DOCK NAVIGATION (ThreeUI AnimatedTopDock) */}
          {/* Fixed-size frame: the controller re-measures on frame resize, so the frame
              must not grow with the springing items (see topDockController) */}
          <div
            data-dock-frame
            className="navbar-dock-frame hidden md:block"
            style={{ "--dock-items": navItems.length } as React.CSSProperties}
          >
            <nav
              ref={dockRef}
              aria-label="Main navigation"
              className="animated-top-dock__nav navbar-dock"
              data-dock-state="idle"
              data-dock-max="0.00"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-dock-item
                  aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                  className="animated-top-dock__item animated-top-dock__link"
                >
                  <span className="animated-top-dock__icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16">{item.icon}</svg>
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. RIGHT — PROMINENT CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Prominent Red Accent Pill CTA */}
            {/* Hidden at md only: the wider brand name + dock leave no room, and
                CONTACT is already in the dock at that width */}
            <Magnetic className="hidden sm:inline-block md:hidden lg:inline-block">
            <Link
              href="/contact"
              className="group relative hidden sm:inline-flex md:hidden lg:inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-4 py-1.5 sm:px-5 sm:py-2 font-mono text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_20px_-3px_rgba(17,17,17,0.158)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_24px_-2px_rgba(17,17,17,0.225)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            </Magnetic>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.96] md:hidden"
            >
              {isOpen ? <X className="h-5 w-5 text-accent" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>

        {/* 4. MOBILE DRAWER (Softened Editorial Container) */}
        {isOpen && (
          <div className="pointer-events-auto mt-2 rounded-3xl border border-white/[0.12] bg-background/95 backdrop-blur-2xl px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 md:hidden">
            <nav className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-colors duration-200 ${
                      isActive
                        ? "bg-white/[0.10] text-white font-bold"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="font-display uppercase text-lg font-bold tracking-tight">{item.label}</span>
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-zinc-600" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold text-black shadow-[0_0_20px_-3px_rgba(17,17,17,0.158)] transition-colors hover:bg-accent-hover active:scale-[0.98]"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
