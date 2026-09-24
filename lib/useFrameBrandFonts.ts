"use client";

import { useEffect, type RefObject } from "react";
import { getBrandFontPayload } from "@/lib/brandFonts";

/** Answers a srcDoc frame's FRAME_FONT_RECEIVER with the brand font files. */
export function useFrameBrandFonts(frameRef: RefObject<HTMLIFrameElement>, enabled = true) {
  useEffect(() => {
    const frame = frameRef.current;
    if (!enabled || !frame) return undefined;
    let cancelled = false;

    const send = () => {
      getBrandFontPayload().then((fonts) => {
        if (!cancelled && fonts.length) frame.contentWindow?.postMessage({ brandFonts: fonts }, "*");
      });
    };
    const onMessage = (event: MessageEvent) => {
      if (event.source === frame.contentWindow && event.data?.brandFontsRequest) send();
    };

    getBrandFontPayload(); // start fetching before the frame asks
    window.addEventListener("message", onMessage);
    frame.addEventListener("load", send);
    return () => {
      cancelled = true;
      window.removeEventListener("message", onMessage);
      frame.removeEventListener("load", send);
    };
  }, [frameRef, enabled]);
}
