"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from "lucide-react";

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
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-surface/80 p-2 shadow-inner transition-all duration-200 group-hover:border-accent/50 group-hover:shadow-[0_0_16px_rgba(244,44,29,0.25)]">
            <Terminal className="h-5 w-5 text-accent transition-transform duration-200 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
              RAGE<span className="text-accent">BYTE</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Web Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-surface-border/80 bg-surface/70 px-4 py-1.5 backdrop-blur-md md:flex shadow-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-accent bg-surface-elevated font-semibold shadow-inner"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-subtle"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Hub (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-surface-border/80 bg-surface/50 px-3 py-1 text-xs text-muted-foreground font-mono">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Available for Projects</span>
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs sm:text-sm font-semibold text-background transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(244,44,29,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        <div className="animate-in fade-in slide-in-from-top-4 duration-200 border-b border-surface-border bg-background/95 backdrop-blur-2xl px-6 py-6 md:hidden">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                    isActive
                      ? "bg-surface text-accent font-semibold border border-surface-border"
                      : "text-foreground hover:bg-surface/50 hover:text-accent"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-50" />
                  )}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-surface-border/80">
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-surface/60 px-3 py-2 text-xs font-mono text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Available for New Projects</span>
              </div>

              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover active:scale-[0.98]"
              >
                <Sparkles className="h-4 w-4" />
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
