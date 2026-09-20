"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { services } from "@/data/services";
import {
  Globe,
  Layout,
  Briefcase,
  ShoppingCart,
  Palette,
  Wrench,
  CheckCircle2,
  X,
  Rotate3d,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import "@/src/shaders/threeui.css";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Layout,
  Briefcase,
  ShoppingCart,
  Palette,
  Wrench,
};

// Exact ThreeUI BookshelfScene dynamically loaded with SSR disabled
const BookshelfScene = dynamic(
  () =>
    import("@/src/shaders/bookshelf/BookshelfScene").then(
      (mod) => mod.BookshelfScene
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#070709]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4B2D2E] border-t-accent" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            Loading Interactive Studio Architecture...
          </span>
        </div>
      </div>
    ),
  }
);

export function BookshelfServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isInspecting, setIsInspecting] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sync state from native ThreeUI DOM hooks via MutationObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkState = () => {
      // 1. Check detail panel inspection state
      const detailPanel = container.querySelector("#detail-panel");
      if (detailPanel) {
        const inspecting = detailPanel.getAttribute("aria-hidden") === "false";
        setIsInspecting(inspecting);
      }

      // 2. Check selected marker index
      const markers = container.querySelector("#markers");
      if (markers && markers.children.length > 0) {
        const markerList = Array.from(markers.children);
        const activeIdx = markerList.findIndex(
          (m) =>
            m.getAttribute("aria-selected") === "true" ||
            m.getAttribute("aria-current") === "true"
        );
        if (activeIdx !== -1 && activeIdx < services.length) {
          setSelectedIndex(activeIdx);
        }
      }

      // 3. Format floating 3D pointer-label with RageByte SPEC branding
      const pointerLabel = container.querySelector("#pointer-label");
      const pointerLabelIndex = container.querySelector("#pointer-label-index");
      const pointerLabelTitle = container.querySelector("#pointer-label-title");

      if (pointerLabel && pointerLabelIndex && pointerLabelTitle) {
        const isPointerVisible = pointerLabel.getAttribute("aria-hidden") === "false";
        if (isPointerVisible) {
          const rawIndexText = pointerLabelIndex.textContent || "";
          const match = rawIndexText.match(/\d+/);
          if (match) {
            const num = parseInt(match[0], 10);
            const idx = Math.min(num - 1, services.length - 1);
            setHoveredIndex(idx);

            const specLabel = `SPEC [0${idx + 1}]`;
            const serviceTitle = services[idx]?.title || "";

            if (pointerLabelIndex.textContent !== specLabel) {
              pointerLabelIndex.textContent = specLabel;
            }
            if (pointerLabelTitle.textContent !== serviceTitle) {
              pointerLabelTitle.textContent = serviceTitle;
            }
          }
        } else {
          setHoveredIndex(null);
        }
      }
    };

    // Initial check
    checkState();

    // Observe changes on source-controls
    const observer = new MutationObserver(() => {
      checkState();
    });

    observer.observe(container, {
      attributes: true,
      subtree: true,
      childList: true,
      attributeFilter: ["aria-hidden", "aria-selected", "aria-current"],
    });

    return () => observer.disconnect();
  }, []);

  // Native ThreeUI volume selector trigger
  const handleSelectVolume = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      // If currently inspecting, close inspection first to return to shelf
      if (isInspecting) {
        const closeBtn = container.querySelector<HTMLButtonElement>("#close-detail");
        closeBtn?.click();
      }

      // Click corresponding ThreeUI native marker button
      const markers = container.querySelector("#markers");
      const markerBtn = markers?.children[index] as HTMLButtonElement | undefined;
      if (markerBtn) {
        markerBtn.click();
      }
      setSelectedIndex(index);
    },
    [isInspecting]
  );

  const handleCloseInspection = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const closeBtn = container.querySelector<HTMLButtonElement>("#close-detail");
    closeBtn?.click();
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === "Escape" && isInspecting) {
        handleCloseInspection();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInspecting, handleCloseInspection]);

  // Current active service (guaranteed 0 to 5)
  const safeIndex = Math.min(Math.max(0, selectedIndex), services.length - 1);
  const currentService = services[safeIndex];
  const currentSpecCode = `SPEC [0${safeIndex + 1}]`;
  const IconComponent = iconMap[currentService.icon] || Globe;

  return (
    <div
      ref={containerRef}
      className="bookshelf-interactive-zone relative w-full overflow-hidden rounded-2xl lg:rounded-3xl border border-surface-border/80 bg-[#070709] shadow-[0_24px_64px_-20px_rgba(0,0,0,0.95)]"
    >
      <style jsx global>{`
        /* Floating 3D Pointer Tooltip over hovered books */
        .bookshelf-interactive-zone #pointer-label {
          display: flex !important;
          position: absolute;
          z-index: 40;
          pointer-events: none;
          transform: translate(-50%, -130%);
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(14, 10, 11, 0.95);
          border: 1px solid rgba(244, 44, 29, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9),
            0 0 16px rgba(244, 44, 29, 0.35);
          backdrop-filter: blur(12px);
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: #ffffff;
          white-space: nowrap;
          transition: opacity 150ms ease-out;
        }
        .bookshelf-interactive-zone #pointer-label[aria-hidden="true"] {
          display: none !important;
          opacity: 0;
        }
        .bookshelf-interactive-zone #pointer-label-index {
          color: #f42c1d;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .bookshelf-interactive-zone #pointer-label-title {
          color: #f4f4f5;
          font-weight: 500;
        }
      `}</style>

      {/* Subtle atmospheric ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-[#701C1A]/10 blur-[100px] -z-10"
      />

      {/* 1. Main 3D Bookshelf Canvas (Exact ThreeUI BookshelfScene with RageByte Service Books) */}
      <div className="relative h-[600px] sm:h-[660px] lg:h-[720px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BookshelfScene className="w-full h-full !bg-transparent" />
        </div>

        {/* 2. Top Subtle Telemetry Status */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/70 bg-[#070709]/70 px-3 py-1 font-mono text-[10px] sm:text-[11px] text-muted-foreground backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>STUDIO VOLUMES // 6 CORE SPECIFICATIONS</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-surface-border/70 bg-[#070709]/70 px-3 py-1 font-mono text-[10px] sm:text-[11px] text-zinc-400 backdrop-blur-md">
            <Rotate3d className="h-3.5 w-3.5 text-accent" />
            <span>
              {isInspecting
                ? "INSPECTION MODE · CLICK BOOK TO OPEN"
                : "DRAG TO ROTATE · CLICK BOOK TO INSPECT"}
            </span>
          </div>
        </div>

        {/* 3. SHELF OVERVIEW MODE: Minimal Active SPEC Information (NO extra buttons on right) */}
        {!isInspecting && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-3 sm:p-5 lg:p-6 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent pt-14">
            {/* 3a. Native 6 SPEC Volume Pills Bar (Clicking any tab smoothly selects the book in 3D) */}
            <div className="pointer-events-auto mb-2.5 flex items-center justify-start sm:justify-center overflow-x-auto pb-1 sm:pb-0 gap-1.5 sm:gap-2 no-scrollbar">
              {services.map((service, idx) => {
                const isActive = safeIndex === idx;
                const isHovered = hoveredIndex === idx;
                const code = `SPEC [0${idx + 1}]`;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => handleSelectVolume(idx)}
                    className={`group relative flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] transition-all duration-200 shrink-0 ${
                      isActive
                        ? "border border-accent bg-[#1c1112] text-white shadow-[0_0_16px_rgba(244,44,29,0.35)]"
                        : isHovered
                        ? "border border-accent/60 bg-[#140c0d] text-white"
                        : "border border-surface-border/70 bg-[#0e0a0b]/80 text-zinc-400 hover:border-[#824334] hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isActive
                          ? "bg-accent shadow-[0_0_6px_#F42C1D]"
                          : "bg-zinc-600 group-hover:bg-accent"
                      }`}
                    />
                    <span
                      className={`font-semibold ${
                        isActive ? "text-accent" : "text-zinc-400 group-hover:text-accent"
                      }`}
                    >
                      {code}
                    </span>
                    <span className="hidden md:inline text-zinc-300">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 3b. Active SPEC Metadata Information Bar (Clean, Minimal, Zero extra buttons on the right) */}
            <div className="pointer-events-auto relative rounded-xl sm:rounded-2xl border border-surface-border/90 bg-[#0e0a0b]/90 px-4 py-3 backdrop-blur-xl shadow-2xl transition-all">
              <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-border bg-surface text-accent shadow-inner">
                  <IconComponent className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-accent font-bold">
                    <span>{currentSpecCode}</span>
                    <span className="text-zinc-600">{"//"}</span>
                    <span className="text-zinc-400 uppercase tracking-wider">
                      Active Volume
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white shrink-0">
                      {currentService.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {currentService.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. DETAIL / INSPECTION MODE: Architectural Blueprint Drawer (When book is inspected in 3D) */}
        {isInspecting && (
          <div className="pointer-events-auto absolute inset-x-3 bottom-3 sm:inset-y-4 sm:right-4 sm:left-auto sm:w-[460px] z-30 animate-in fade-in slide-in-from-right-4 duration-300 rounded-2xl border border-accent/50 bg-[#0e0a0b]/95 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-start justify-between gap-4 border-b border-surface-border/80 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-accent">
                    <span>{currentSpecCode}</span>
                    <span className="text-muted-foreground">{"//"}</span>
                    <span className="text-foreground uppercase tracking-wider">
                      Architectural Blueprint
                    </span>
                  </div>
                  <h3 className="mt-1 font-heading text-xl sm:text-2xl font-extrabold text-white">
                    {currentService.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleCloseInspection}
                  aria-label="Close volume inspection"
                  className="rounded-lg border border-surface-border bg-surface p-1.5 text-muted-foreground transition-colors hover:border-accent/40 hover:text-white focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Service Description */}
              <div className="mt-4 space-y-4">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentService.description}
                </p>

                {currentService.idealFor && (
                  <div className="rounded-xl border border-surface-border/80 bg-[#140c0d] p-3 text-xs leading-relaxed">
                    <span className="font-mono text-accent font-semibold block mb-1">
                      Ideal Target Architecture:
                    </span>
                    <span className="text-zinc-300">{currentService.idealFor}</span>
                  </div>
                )}

                {/* Deliverables Checklist */}
                {currentService.deliverables && (
                  <div>
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" />
                      <span>Standard Production Deliverables</span>
                    </h4>
                    <ul className="space-y-2">
                      {currentService.deliverables.slice(0, 4).map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-zinc-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="mt-6 pt-4 border-t border-surface-border/80 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>3D Interaction: Drag to turn pages</span>
                <button
                  type="button"
                  onClick={handleCloseInspection}
                  className="text-zinc-400 hover:text-accent transition-colors"
                >
                  Return to Shelf [Esc]
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    currentService.title
                  )}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-[0_0_18px_rgba(244,44,29,0.35)] transition-all hover:bg-accent-hover"
                >
                  <span>Request Proposal</span>
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-surface-border bg-surface px-3 py-2.5 text-xs font-mono text-zinc-300 hover:border-accent/40 hover:text-accent transition-colors"
                >
                  Full Catalog
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
