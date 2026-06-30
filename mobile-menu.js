(() => {
  const init = () => {
    const toggle = document.querySelector("[data-mobile-menu-toggle]");
    const panel = document.querySelector("[data-mobile-menu-panel]");
    const list = document.querySelector("[data-mobile-menu-list]");
    if (!toggle || !panel || !list) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      panel.setAttribute("aria-hidden", String(!open));
      panel.classList.toggle("pointer-events-none", !open);
      panel.classList.toggle("is-open", open);
      list.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    panel.addEventListener("click", (event) => {
      if (event.target === panel) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
