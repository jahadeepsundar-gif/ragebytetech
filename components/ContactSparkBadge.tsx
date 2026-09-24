"use client";

import { useEffect, useState } from "react";
import { SparkBadge } from "@/src/shaders/spark-badge/SparkBadge";
import "@/src/shaders/threeui.css";

/**
 * ThreeUI SparkBadge (badge variant) for the contact hero. The scene lives at
 * /public/spark-badge.html; its card carries the Kaatchi Productions wordmark.
 * On the light theme the scene sits in a black rounded panel (a "black band"
 * block, like the rest of the site's dark sections).
 */
export function ContactSparkBadge({ className = "" }: { className?: string }) {
  // SparkBadge reveals its iframe from onLoad. If it were server-rendered, the
  // iframe could finish loading before hydration attaches that handler and the
  // scene would stay invisible, so mount it on the client only.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden rounded-3xl ${className}`}
      style={{ background: "#000" }}
    >
      {hydrated ? (
        <SparkBadge
          speed={1.0}
          particleAmount={1.0}
          rainAmount={1.0}
          turbulence={1.0}
          spread={1.0}
        />
      ) : (
        <div className="spark-badge" />
      )}
    </div>
  );
}

export default ContactSparkBadge;
