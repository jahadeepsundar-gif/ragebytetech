/**
 * Brand type roles for code that draws text outside Tailwind (canvas renderers).
 *
 * next/font registers hashed family names (e.g. "__Inter_a1b2c3") and exposes them
 * through CSS variables on <html>. Canvas `ctx.font` can't read CSS variables, and a
 * literal "Inter" never matches the hashed name, so resolve the variables here.
 */
export type BrandFontRole = "display" | "sans" | "mono";

const ROLES: Record<BrandFontRole, { variable: string; fallback: string }> = {
  display: { variable: "--font-display", fallback: '"Barlow Condensed", "Arial Narrow", sans-serif' },
  sans: { variable: "--font-inter", fallback: 'Inter, "Helvetica Neue", Arial, sans-serif' },
  mono: { variable: "--font-geist-mono", fallback: '"Geist Mono", ui-monospace, monospace' },
};

export function brandFontFamily(role: BrandFontRole): string {
  const { variable, fallback } = ROLES[role];
  if (typeof document === "undefined") return fallback;
  const resolved = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return resolved ? `${resolved}, ${fallback}` : fallback;
}

/** A canvas `ctx.font` shorthand, e.g. brandFont("display", 800, 48). */
export function brandFont(role: BrandFontRole, weight: number, size: number): string {
  return `${weight} ${size}px ${brandFontFamily(role)}`;
}

/** Resolves once the brand faces used by canvases are ready (or after a timeout). */
export function loadBrandFonts(timeoutMs = 2000): Promise<void> {
  if (typeof document === "undefined" || !document.fonts) return Promise.resolve();
  const faces = [
    brandFont("display", 800, 48),
    brandFont("sans", 400, 16),
    brandFont("sans", 600, 16),
    brandFont("mono", 500, 12),
  ];
  const loaded = Promise.all(faces.map((face) => document.fonts.load(face))).then(
    () => undefined,
    () => undefined,
  );
  const timeout = new Promise<void>((resolve) => setTimeout(resolve, timeoutMs));
  return Promise.race([loaded, timeout]);
}

/* ------------------------------------------------------------------------------------
 * Sandboxed srcDoc iframes (null origin) can't see the page's fonts, so the host fetches
 * the self-hosted brand font files and posts them in; the frame registers them under
 * these stable family names.
 * ---------------------------------------------------------------------------------- */
export const FRAME_FONT_FAMILIES: Record<BrandFontRole, string> = {
  display: "RageByte Display",
  sans: "RageByte Sans",
  mono: "RageByte Mono",
};

export type BrandFontPayload = { family: string; weight: string; style: string; data: ArrayBuffer }[];

let payloadPromise: Promise<BrandFontPayload> | null = null;

const unquote = (value: string) => value.trim().replace(/^['"]|['"]$/g, "");

/** Latin-subset brand font files, fetched once and shared by every frame. */
export function getBrandFontPayload(): Promise<BrandFontPayload> {
  if (payloadPromise) return payloadPromise;
  payloadPromise = (async () => {
    const roleByFamily = new Map<string, BrandFontRole>();
    const rootStyle = getComputedStyle(document.documentElement);
    (Object.keys(ROLES) as BrandFontRole[]).forEach((role) => {
      const primary = unquote(rootStyle.getPropertyValue(ROLES[role].variable).split(",")[0] ?? "");
      if (primary) roleByFamily.set(primary, role);
    });

    const faces: { role: BrandFontRole; weight: string; style: string; url: string }[] = [];
    Array.from(document.styleSheets).forEach((sheet) => {
      let rules: CSSRuleList;
      try {
        rules = sheet.cssRules;
      } catch {
        return;
      }
      Array.from(rules).forEach((rule) => {
        if (!(rule instanceof CSSFontFaceRule)) return;
        const role = roleByFamily.get(unquote(rule.style.getPropertyValue("font-family")));
        if (!role) return;
        const range = rule.style.getPropertyValue("unicode-range");
        if (range && !/U\+0+-/i.test(range)) return; // latin subset only
        const url = rule.style.getPropertyValue("src").match(/url\(["']?([^"')]+)["']?\)/)?.[1];
        if (!url) return;
        faces.push({
          role,
          weight: rule.style.getPropertyValue("font-weight") || "400",
          style: rule.style.getPropertyValue("font-style") || "normal",
          url: new URL(url, sheet.href ?? window.location.href).href,
        });
      });
    });

    const loaded = await Promise.all(
      faces.map(async (face) => {
        try {
          const response = await fetch(face.url);
          if (!response.ok) return null;
          return { family: FRAME_FONT_FAMILIES[face.role], weight: face.weight, style: face.style, data: await response.arrayBuffer() };
        } catch {
          return null;
        }
      }),
    );
    return loaded.filter((face): face is BrandFontPayload[number] => face !== null);
  })();
  return payloadPromise;
}

/**
 * Script for a srcDoc frame: asks the host for the brand fonts, registers them, then
 * sets `window.__brandFontsReady` and fires a `brandfontsready` event.
 */
export const FRAME_FONT_RECEIVER = `<script data-brand-fonts>
(function () {
  function done() {
    if (window.__brandFontsReady) return;
    window.__brandFontsReady = true;
    window.dispatchEvent(new Event('brandfontsready'));
  }
  window.addEventListener('message', function (event) {
    var fonts = event.data && event.data.brandFonts;
    if (!fonts || window.__brandFontsReceived) return;
    window.__brandFontsReceived = true;
    Promise.all(fonts.map(function (font) {
      try {
        var face = new FontFace(font.family, font.data, { weight: font.weight, style: font.style });
        document.fonts.add(face);
        return face.load().catch(function () {});
      } catch (error) { return null; }
    })).then(done, done);
  });
  try { window.parent.postMessage({ brandFontsRequest: true }, '*'); } catch (error) {}
  setTimeout(done, 1200);
})();
</script>`;
