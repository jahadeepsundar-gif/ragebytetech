"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { STUDIO_EASE } from "@/components/motion/MotionPrimitives";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
              ? "border-white/[0.14] bg-[#070709]/95 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
              : "border-white/[0.10] bg-[#070709]/80 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          }`}
        >
          {/* 1. LEFT — RAGEBYTE BRAND */}
          <Link
            href="/"
            aria-label="RageByte Home"
            className="group flex items-center gap-2.5 sm:gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-0.5 px-1 transition-opacity hover:opacity-95 shrink-0"
          >
            <div className="relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-xl border border-white/10 bg-surface/90 p-1.5 transition-colors duration-200 group-hover:border-accent/60">
              <Terminal className="h-4 w-4 text-accent transition-transform duration-200 group-hover:scale-110" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-[-0.03em] text-foreground leading-none">
                RAGE<span className="text-accent">BYTE</span>
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-zinc-500 uppercase mt-0.5">
                TECHNICAL STUDIO
              </span>
            </div>
          </Link>

          {/* 2. CENTER — UNIFIED NAVIGATION PILL CONTROL */}
          <nav
            aria-label="Main navigation"
            className="hidden md:inline-flex items-center gap-1 p-1 rounded-full border border-white/[0.08] bg-black/50 backdrop-blur-md shadow-inner"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 sm:px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                    isActive
                      ? "bg-white/[0.14] text-white font-medium shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06] font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* 3. RIGHT — STATUS PILL + PROMINENT CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Open For Sprint Status Pill */}
            <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[10px] text-zinc-400 uppercase tracking-wider select-none">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>OPEN FOR SPRINT</span>
            </div>

            {/* Prominent Red Accent Pill CTA */}
            <Link
              href="/contact"
              className="group relative hidden sm:inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-4 py-1.5 sm:px-5 sm:py-2 font-mono text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_20px_-3px_rgba(244,44,29,0.35)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_24px_-2px_rgba(244,44,29,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

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
          <div className="pointer-events-auto mt-2 rounded-3xl border border-white/[0.12] bg-[#070709]/95 backdrop-blur-2xl px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 md:hidden">
            <nav className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
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
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-mono text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span>OPEN FOR SPRINT</span>
                </div>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold text-black shadow-[0_0_20px_-3px_rgba(244,44,29,0.35)] transition-colors hover:bg-accent-hover active:scale-[0.98]"
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
