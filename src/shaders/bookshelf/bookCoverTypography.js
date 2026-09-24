import { brandFont } from "@/lib/brandFonts";

const BRAND = "Kaatchi Productions";

/** Cover lettering shared by the six service volumes. Kept separate from scene mechanics. */
export function drawBookCoverTypography(ctx, book, index) {
  const ink = book.id === "spec-03" ? book.palette.ink : book.palette.paperPale;
  ctx.save();
  ctx.fillStyle = ink;
  ctx.strokeStyle = ink;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";

  ctx.font = brandFont("mono", 500, 14);
  ctx.letterSpacing = "2.4px";
  ctx.globalAlpha = 0.85;
  ctx.fillText(`${BRAND.toUpperCase()}  /  SERVICE COLLECTION`, 62, 72);

  // A fine printed rule and restrained title leave the illustrated cloth visible.
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(62, 936);
  ctx.lineTo(706, 936);
  ctx.stroke();

  ctx.globalAlpha = 1;
  ctx.letterSpacing = "0px";
  const discipline = book.discipline.toUpperCase();
  let size = 62;
  do {
    ctx.font = brandFont("display", 800, size);
    if (ctx.measureText(discipline).width <= 644) break;
    size -= 1;
  } while (size > 36);
  ctx.fillText(discipline, 62, 1011);

  ctx.globalAlpha = 0.8;
  ctx.font = brandFont("mono", 500, 14);
  ctx.letterSpacing = "2px";
  ctx.fillText(BRAND.toUpperCase(), 64, 1060);
  ctx.textAlign = "right";
  ctx.fillText(book.roman || String(index), 704, 1060);
  ctx.restore();
}
