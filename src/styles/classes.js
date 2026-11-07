// Shared button styles. Square-shouldered, uppercase, like equipment labels.
const btnBase =
  "inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] rounded-sm duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

// Solid ink (black in day mode, off-white at night).
export const btnPrimary = `${btnBase} bg-ink text-page hover:bg-accent hover:text-white focus-visible:outline-ink`;
// Emblem red, the main call to action.
export const btnRed = `${btnBase} bg-rover-red text-white hover:bg-rover-red-light focus-visible:outline-rover-red`;
// Outline, follows the theme.
export const btnGhost = `${btnBase} border border-line/25 text-ink hover:border-accent hover:text-accent focus-visible:outline-ink`;
// Outline for use on dark photos, always white.
export const btnGhostLight = `${btnBase} border border-white/40 text-white hover:border-white hover:bg-white hover:text-black focus-visible:outline-white`;

export const tag = "label inline-flex items-center gap-2 text-accent";
