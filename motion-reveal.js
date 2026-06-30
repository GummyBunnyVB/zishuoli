(() => {
  const root = document.documentElement;
  root.classList.add("motion-ready");

  const revealSelector =
    ".motion-reveal, .motion-art-reveal, .motion-text-reveal";

  const revealAll = () => {
    document.querySelectorAll(revealSelector).forEach((element) => {
      element.classList.add("is-visible");
    });
  };

  const init = () => {
    const elements = Array.from(document.querySelectorAll(revealSelector));
    if (elements.length === 0) return;

    if (
      !("IntersectionObserver" in globalThis) ||
      globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: "0px",
      threshold: 0,
    });

    for (const element of elements) {
      observer.observe(element);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
