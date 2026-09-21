"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-surface-border bg-background/90 backdrop-blur-xl shadow-2xl shadow-black/50"
          : "border-b border-surface-border/40 bg-background/60 backdrop-blur-md"
      }`}
    >
      {/* Top subtle ambient highlight line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity / Wordmark */}
        <Link
          href="/"
          aria-label="RageByte Home"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
        >
          <div className="relative flex h-9 w-9 items-center justify-center border border-surface-border bg-surface/80 p-2 transition-all duration-200 group-hover:border-accent/60">
            <Terminal className="h-4 w-4 text-accent transition-transform duration-200 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-black uppercase tracking-[-0.03em] text-foreground leading-none">
              RAGE<span className="text-accent">BYTE</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase mt-0.5">
              TECHNICAL STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Editorial Monospace Links) */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 border-b border-white/10 pb-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? "text-accent"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Hub (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-2 border border-surface-border bg-background/80 px-3 py-1 text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>OPEN FOR SPRINT</span>
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-accent px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-background transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-surface/80 p-2.5 text-muted-foreground transition-colors hover:border-surface-border-hover hover:text-foreground md:hidden"
        >
          {isOpen ? <X className="h-5 w-5 text-accent" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-200 border-b border-white/10 bg-[#070709]/95 backdrop-blur-2xl px-6 py-8 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-white/10 pb-3 transition-colors ${
                    isActive ? "text-[#F42C1D]" : "text-white hover:text-[#F42C1D]"
                  }`}
                >
                  <span className="font-display uppercase text-2xl font-black tracking-tight">{item.label}</span>
                  {isActive ? (
                    <span className="h-2 w-2 bg-[#F42C1D]" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-zinc-600" />
                  )}
                </Link>
              );
            })}

            <div className="pt-4">
              <div className="mb-4 flex items-center gap-2 border border-white/10 bg-black/60 px-3 py-2 text-xs font-mono text-zinc-400">
                <span className="h-1.5 w-1.5 bg-[#F42C1D] animate-pulse" />
                <span>OPEN FOR SPRINT // 2026</span>
              </div>

              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 bg-[#F42C1D] px-5 py-3.5 font-mono text-xs uppercase tracking-widest font-bold text-white transition-colors hover:bg-[#ff3b2c]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
