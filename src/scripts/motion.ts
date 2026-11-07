// Site-wide motion: cursor parallax, the hero targeting reticle, and scroll reveals.
// Everything is skipped for visitors who prefer reduced motion.

(window as any).__motion = true;

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(pointer: fine)").matches;

// --- Scroll reveal: [data-reveal] fades/slides in once. Optional data-reveal-delay in ms. ---
const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (reduce || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("revealed"));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      // Animate in, then drop the reveal transition so hover effects keep their own timing.
      const delay = Number(el.dataset.revealDelay ?? 0);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("revealing", "revealed");
      setTimeout(() => {
        el.classList.remove("revealing");
        el.style.transitionDelay = "";
      }, 900 + delay);
      io.unobserve(el);
    }
  }, { rootMargin: "0px 0px -10% 0px" });
  revealEls.forEach((el) => io.observe(el));
}

// --- Cursor parallax: [data-parallax="px"] shifts against the pointer by up to that many px. ---
const parallaxEls = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
if (!reduce && finePointer && parallaxEls.length) {
  const p = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener("pointermove", (e) => {
    p.tx = (e.clientX / innerWidth) * 2 - 1;
    p.ty = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });
  const tick = () => {
    p.x += (p.tx - p.x) * 0.06;
    p.y += (p.ty - p.y) * 0.06;
    for (const el of parallaxEls) {
      const amt = Number(el.dataset.parallax) || 10;
      el.style.transform = `translate3d(${(-p.x * amt).toFixed(2)}px, ${(-p.y * amt).toFixed(2)}px, 0)`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// --- Hero reticle: follows the cursor inside [data-reticle-area] and reads out its position. ---
document.querySelectorAll<HTMLElement>("[data-reticle-area]").forEach((area) => {
  const reticle = area.querySelector<HTMLElement>("[data-reticle]");
  const readout = area.querySelector<HTMLElement>("[data-reticle-readout]");
  if (!reticle || reduce || !finePointer) return;
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
  const move = () => {
    x += (tx - x) * 0.2;
    y += (ty - y) * 0.2;
    reticle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(move) : 0;
  };
  area.addEventListener("pointermove", (e) => {
    const r = area.getBoundingClientRect();
    tx = e.clientX - r.left;
    ty = e.clientY - r.top;
    if (!reticle.classList.contains("active")) { x = tx; y = ty; reticle.classList.add("active"); }
    if (readout) {
      const nx = ((tx / r.width) * 2 - 1).toFixed(3);
      const ny = (1 - (ty / r.height) * 2).toFixed(3);
      readout.textContent = `X ${Number(nx) >= 0 ? "+" : ""}${nx}  Y ${Number(ny) >= 0 ? "+" : ""}${ny}`;
    }
    if (!raf) raf = requestAnimationFrame(move);
  });
  area.addEventListener("pointerleave", () => reticle.classList.remove("active"));
  // Hide the reticle over buttons and links so it never fights the real cursor target.
  area.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("pointerenter", () => reticle.classList.add("over-control"));
    el.addEventListener("pointerleave", () => reticle.classList.remove("over-control"));
  });
});
