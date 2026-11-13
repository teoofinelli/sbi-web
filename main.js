// SBI — small progressive enhancements. The page works without this file.

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Header background once the page scrolls
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Hero slider: slow rotation, manual tabs, pause button, pauses on hover/focus
  const slider = document.querySelector(".slider");
  if (slider) {
    const slides = slider.querySelectorAll(".slide");
    const tabs = slider.querySelectorAll(".slider-tab");
    const pauseBtn = slider.querySelector(".slider-pause");
    const interval = Number(slider.dataset.interval) || 6500;
    slider.style.setProperty("--slide-ms", interval + "ms");

    let current = 0;
    let timer = null;
    let userPaused = reduceMotion;
    let hoverPaused = false;

    const show = (i) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle("is-active", n === current));
      tabs.forEach((t, n) => {
        t.classList.toggle("is-active", n === current);
        t.setAttribute("aria-selected", String(n === current));
      });
      // restart the progress bar animation
      const bar = tabs[current].querySelector(".tab-progress");
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "";
    };

    const stop = () => { clearInterval(timer); timer = null; slider.classList.remove("is-running"); };
    const start = () => {
      stop();
      if (userPaused || hoverPaused) return;
      slider.classList.add("is-running");
      timer = setInterval(() => show(current + 1), interval);
    };

    tabs.forEach((tab) => tab.addEventListener("click", () => { show(Number(tab.dataset.go)); start(); }));

    pauseBtn.addEventListener("click", () => {
      userPaused = !userPaused;
      pauseBtn.dataset.paused = String(userPaused);
      pauseBtn.setAttribute("aria-label", userPaused ? "Play rotation" : "Pause rotation");
      start();
    });
    pauseBtn.dataset.paused = String(userPaused);

    slider.addEventListener("mouseenter", () => { hoverPaused = true; stop(); });
    slider.addEventListener("mouseleave", () => { hoverPaused = false; start(); });
    slider.addEventListener("focusin", () => { hoverPaused = true; stop(); });
    slider.addEventListener("focusout", () => { hoverPaused = false; start(); });

    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

    start();
  }

  // Hero photos: crossfade on their own timer; the slider's pause button stops them too
  const media = document.querySelector(".hero-media");
  const photos = media ? media.querySelectorAll("img") : [];
  if (photos.length > 1 && !reduceMotion) {
    const pauseBtn = document.querySelector(".slider-pause");
    const interval = Number(media.dataset.interval) || 5500;
    let current = 0;
    let timer = null;

    const next = () => {
      photos[current].classList.remove("is-active");
      current = (current + 1) % photos.length;
      photos[current].classList.add("is-active");
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (pauseBtn && pauseBtn.dataset.paused === "true") return;
      timer = setInterval(next, interval);
    };

    if (pauseBtn) pauseBtn.addEventListener("click", start);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    start();
  }

  // Gentle reveal of content blocks as they scroll into view
  if (!reduceMotion && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(
      ".section-head, .pillar, .statement, .step, .criterion, .filters, .attributes li, .contact-card"
    );
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 5) * 60 + "ms";
      io.observe(el);
    });
  }
})();
