"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import characterFilmstripSource from "./sources/character-filmstrip.html?raw";
import { FRAME_FONT_RECEIVER } from "@/lib/brandFonts";
import { useFrameBrandFonts } from "@/lib/useFrameBrandFonts";

export type CharacterCarouselVariant = "filmstrip" | "wave";

export interface TeamMemberProfile {
  id: string;
  name: string;
  designation: string;
  shortRole?: string;
  role?: string;
  image: string;
  bio?: string;
  specializations?: string[];
  skills?: string[];
  experience?: string;
  github?: string;
  linkedin?: string;
}

export type CharacterCarouselProps = {
  variant?: CharacterCarouselVariant;
  speed?: number;
  scale?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
  teamMembers?: TeamMemberProfile[];
  onSelectMember?: (index: number, id?: string) => void;
  onActiveIndexChange?: (index: number, id?: string) => void;
  activeIndex?: number;
  selectedMemberIndex?: number | null;
};

export const CHARACTER_CAROUSEL_DEFAULTS = {
  variant: "filmstrip",
  speed: 1,
  scale: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const satisfies Required<Pick<CharacterCarouselProps, "variant" | "speed" | "scale" | "opacity" | "hue" | "saturation" | "brightness">>;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function buildFocusedDocument(variant: CharacterCarouselVariant, teamMembers?: TeamMemberProfile[]) {
  const focusStyles = `<style data-character-carousel-focus>
:root { --character-carousel-scale: 1; }
html, body, .stage { width: 100%; height: 100%; margin: 0; overflow: hidden; }
.stage { min-height: 0 !important; }
.deck { transform: scale(var(--character-carousel-scale)); transform-origin: 50% 50%; }
</style>`;

  const memberPayload = teamMembers && teamMembers.length
    ? `<script data-team-members>window.__TEAM_MEMBERS = ${JSON.stringify(teamMembers)};</script>`
    : "";

  const controls = `<script data-character-carousel-controls>
(function () {
  var nativeFrame = window.requestAnimationFrame.bind(window);
  var clock = { real: null, virtual: null };
  var controls = window.__CHARACTER_CAROUSEL_CONTROLS = { speed: 1, scale: 1, paused: false };
  window.__CHARACTER_CAROUSEL_NOW = function () {
    return clock.virtual === null ? performance.now() : clock.virtual;
  };
  window.requestAnimationFrame = function (callback) {
    function tick(realTime) {
      if (clock.real === null) {
        clock.real = realTime;
        clock.virtual = realTime;
      } else {
        if (!controls.paused) clock.virtual += (realTime - clock.real) * controls.speed;
        clock.real = realTime;
      }
      if (controls.paused) {
        return nativeFrame(tick);
      }
      callback(clock.virtual);
    }
    return nativeFrame(tick);
  };
  window.addEventListener('message', function (event) {
    if (!event.data) return;
    if (event.data.type === 'character-carousel-controls') {
      var next = event.data.controls || {};
      if (Number.isFinite(next.speed)) controls.speed = Math.max(0, Math.min(2.5, next.speed));
      if (Number.isFinite(next.scale)) controls.scale = Math.max(0.7, Math.min(1.3, next.scale));
      controls.paused = Boolean(next.paused);
      document.documentElement.style.setProperty('--character-carousel-scale', String(controls.scale));
    }
  });
})();
</script>`;

  const baseSource = characterFilmstripSource;
  const focusedSource = baseSource.replaceAll("performance.now()", "window.__CHARACTER_CAROUSEL_NOW()");

  return focusedSource
    .replace(/<script[^>]+cloudflareinsights\.com[^>]*><\/script>/gi, "")
    .replace("</head>", `${focusStyles}${FRAME_FONT_RECEIVER}${memberPayload}${controls}</head>`);
}

export function CharacterCarousel({
  variant = CHARACTER_CAROUSEL_DEFAULTS.variant,
  speed = CHARACTER_CAROUSEL_DEFAULTS.speed,
  scale = CHARACTER_CAROUSEL_DEFAULTS.scale,
  opacity = CHARACTER_CAROUSEL_DEFAULTS.opacity,
  hue = CHARACTER_CAROUSEL_DEFAULTS.hue,
  saturation = CHARACTER_CAROUSEL_DEFAULTS.saturation,
  brightness = CHARACTER_CAROUSEL_DEFAULTS.brightness,
  className = "",
  style,
  teamMembers,
  onSelectMember,
  onActiveIndexChange,
  activeIndex,
  selectedMemberIndex,
}: CharacterCarouselProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useFrameBrandFonts(iframeRef);
  const [hostVisible, setHostVisible] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(() => typeof document === "undefined" || !document.hidden);
  const safeSpeed = clamp(speed, 0, 2.5);
  const safeScale = clamp(scale, 0.7, 1.3);
  const paused = !hostVisible || !documentVisible || safeSpeed === 0;
  const source = useMemo(() => buildFocusedDocument(variant, teamMembers), [variant, teamMembers]);

  const postControls = useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage({
      type: "character-carousel-controls",
      controls: { speed: safeSpeed, scale: safeScale, paused },
    }, "*");
  }, [paused, safeScale, safeSpeed]);

  const lastNotifiedIndexRef = useRef<number>(-1);

  // Listen for click and active events posted by the filmstrip iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return;
      if (
        (event.data.type === "character-filmstrip-click" || event.data.type === "character-filmstrip-select") &&
        typeof event.data.index === "number"
      ) {
        lastNotifiedIndexRef.current = event.data.index;
        onSelectMember?.(event.data.index, event.data.id);
      } else if (
        event.data.type === "character-filmstrip-active" &&
        typeof event.data.index === "number"
      ) {
        lastNotifiedIndexRef.current = event.data.index;
        onActiveIndexChange?.(event.data.index, event.data.id);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onSelectMember, onActiveIndexChange]);

  // Synchronize external activeIndex changes to iframe ONLY when triggered externally
  useEffect(() => {
    if (
      typeof activeIndex === "number" &&
      activeIndex >= 0 &&
      activeIndex !== lastNotifiedIndexRef.current &&
      iframeRef.current?.contentWindow
    ) {
      lastNotifiedIndexRef.current = activeIndex;
      iframeRef.current.contentWindow.postMessage({
        type: "character-filmstrip-move-to",
        index: activeIndex,
      }, "*");
    }
  }, [activeIndex]);

  // Notify iframe when selection is cleared
  useEffect(() => {
    if (selectedMemberIndex === null && iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: "character-filmstrip-deselect",
      }, "*");
    }
  }, [selectedMemberIndex]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => setHostVisible(entry?.isIntersecting ?? true));
    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const update = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    postControls();
  }, [postControls, source]);

  return (
    <div
      className={`threeui-background character-carousel character-carousel--${variant}${className ? ` ${className}` : ""}`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "440px",
        background: "#070709",
        pointerEvents: "auto",
        ...style,
      }}
    >
      <iframe
        ref={iframeRef}
        title="Kaatchi Productions Interactive Team Filmstrip"
        srcDoc={source}
        sandbox="allow-scripts"
        onLoad={postControls}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#070709",
          opacity: clamp(opacity, 0.05, 1),
          filter: `hue-rotate(${clamp(hue, -180, 180)}deg) saturate(${clamp(saturation, 0, 2)}) brightness(${clamp(brightness, 0.35, 1.65)})`,
        }}
      />
    </div>
  );
}

export function CharacterFilmstrip(props: Omit<CharacterCarouselProps, "variant">) {
  return <CharacterCarousel {...props} variant="filmstrip" />;
}
