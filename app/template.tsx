"use client";

import React from "react";
import { usePathname } from "next/navigation";

// Last route this template rendered. Undefined on the very first load, which the
// preloader already owns; a repeat of the same path (React StrictMode's double
// mount in development) is not a navigation either.
let lastPath: string | undefined;

function routeLabel(pathname: string) {
  const segment = pathname.split("/").filter(Boolean).pop();
  return segment ? segment.replace(/-/g, " ").toUpperCase() : "HOME";
}

/**
 * Page transition: an ink curtain carrying the destination's name wipes upward
 * to uncover the new page, which rises in behind it.
 *
 * Deliberately pure CSS (styles/motion.css): the browser runs these transform /
 * opacity animations on the compositor, so they keep moving even while the main
 * thread is busy mounting the new page — e.g. the home bookshelf compiling its
 * WebGL shaders. A JS-driven animation freezes mid-way in that situation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [navigated] = React.useState(() => lastPath !== undefined && lastPath !== pathname);
  React.useEffect(() => {
    lastPath = pathname;
  }, [pathname]);

  if (!navigated) return <>{children}</>;

  return (
    <>
      <div aria-hidden="true" className="route-curtain">
        <span className="route-curtain__mask">
          <span className="route-curtain__label">{routeLabel(pathname)}</span>
        </span>
        <span className="route-curtain__rule" />
      </div>
      <div className="route-enter">{children}</div>
    </>
  );
}
