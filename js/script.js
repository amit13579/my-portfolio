/* ═══════ Amit Kumar Gupta — Portfolio interactions (GSAP) ═══════ */

(function () {
  "use strict";

  /* ---------- Navbar ---------- */
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // Active link highlighting
  const sections = document.querySelectorAll("section[id], header[id]");
  const linkMap = {};
  navLinks.querySelectorAll("a[href^='#']").forEach((a) => {
    linkMap[a.getAttribute("href").slice(1)] = a;
  });
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && linkMap[e.target.id]) {
          navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
          linkMap[e.target.id].classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Lightbox for certificates & achievements ---------- */
  const lightbox = document.getElementById("lightbox");
  const lbImg = lightbox.querySelector("img");
  document.querySelectorAll(".cert-card img, .ach-card img").forEach((img) => {
    img.closest(".cert-card, .ach-card").addEventListener("click", () => {
      lbImg.src = img.src;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
  const closeLb = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };
  lightbox.addEventListener("click", (e) => { if (e.target !== lbImg) closeLb(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

  /* ---------- Contact form: thank-you notice after redirect ---------- */
  if (new URLSearchParams(location.search).get("sent") === "1") {
    const form = document.getElementById("contactForm");
    if (form) {
      const note = document.createElement("p");
      note.textContent = "✅ Thank you! Your message has been sent — I'll get back to you soon.";
      note.style.cssText = "color:#4ade80;font-weight:600;margin-bottom:18px;";
      form.prepend(note);
      history.replaceState(null, "", location.pathname);
      setTimeout(() => document.getElementById("contact").scrollIntoView(), 300);
    }
  }

  /* ---------- Count-up helper (works with or without GSAP) ---------- */
  function countUp(el, target, duration) {
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- No GSAP? Graceful fallback: just run counters & bars ---------- */
  if (typeof gsap === "undefined" || reduceMotion) {
    document.querySelectorAll(".stat-num").forEach((el) => {
      countUp(el, +el.dataset.count, 1200);
    });
    document.querySelectorAll(".bar i").forEach((i) => { i.style.width = i.dataset.w + "%"; });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Hero entrance ---------- */
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .from("[data-anim='hero']", { y: 34, opacity: 0, duration: 0.8, stagger: 0.14 })
    .from("#heroSocials .social-icon", {
      scale: 0, opacity: 0, duration: 0.5, stagger: 0.12, ease: "back.out(2.2)",
    }, "-=0.3")
    .from("#heroStats .stat", { y: 26, opacity: 0, duration: 0.55, stagger: 0.1 }, "-=0.2")
    .add(() => {
      document.querySelectorAll("#heroStats .stat-num").forEach((el) =>
        countUp(el, +el.dataset.count, 1400)
      );
    }, "-=0.4");

  /* ---------- About ---------- */
  gsap.from("#aboutPhoto", {
    x: -70, opacity: 0, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: "#about", start: "top 70%" },
  });
  gsap.from(".mv-card", {
    rotationY: -90, opacity: 0, transformOrigin: "left center",
    duration: 0.8, stagger: 0.2, ease: "power2.out",
    scrollTrigger: { trigger: ".mv-grid", start: "top 82%" },
  });
  gsap.from("#aboutNavBtns .chip-btn", {
    y: 24, opacity: 0, duration: 0.45, stagger: 0.08,
    scrollTrigger: { trigger: "#aboutNavBtns", start: "top 88%" },
  });

  /* ---------- Experience: alternate slide-in + curtain + bullets ---------- */
  document.querySelectorAll(".xp-card").forEach((card) => {
    const fromLeft = card.dataset.xp === "left";
    gsap.from(card, {
      x: fromLeft ? -80 : 80, opacity: 0, duration: 0.85, ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 80%" },
    });
    gsap.from(card.querySelector(".xp-side"), {
      scaleX: 0, transformOrigin: "left center", duration: 0.7, delay: 0.15, ease: "power2.out",
      scrollTrigger: { trigger: card, start: "top 80%" },
    });
    gsap.from(card.querySelectorAll(".xp-list li"), {
      y: 16, opacity: 0, duration: 0.4, stagger: 0.09, delay: 0.3,
      scrollTrigger: { trigger: card, start: "top 78%" },
    });
  });

  /* ---------- Education: drop / rise ---------- */
  document.querySelectorAll(".edu-card").forEach((card) => {
    const drop = card.dataset.edu === "drop";
    gsap.from(card, {
      y: drop ? -70 : 70, rotation: drop ? -3 : 0, opacity: 0,
      duration: 0.85, ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 84%" },
    });
    gsap.from(card.querySelectorAll(".edu-points li"), {
      x: -22, opacity: 0, duration: 0.35, stagger: 0.1, delay: 0.35,
      scrollTrigger: { trigger: card, start: "top 82%" },
    });
  });

  /* ---------- Projects: panel slide + outcomes dealt + pill bounce ---------- */
  document.querySelectorAll(".proj-card").forEach((card) => {
    gsap.from(card.querySelector(".proj-side"), {
      x: -110, opacity: 0, filter: "blur(8px)", duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 78%" },
    });
    gsap.from(card.querySelector(".proj-body"), {
      opacity: 0, duration: 0.7, delay: 0.3,
      scrollTrigger: { trigger: card, start: "top 78%" },
    });
    gsap.from(card.querySelectorAll(".outcome"), {
      scale: 0.7, opacity: 0, duration: 0.45, stagger: 0.12, delay: 0.4, ease: "back.out(1.6)",
      scrollTrigger: { trigger: card, start: "top 75%" },
    });
    gsap.from(card.querySelectorAll(".proj-tags span"), {
      scale: 0, opacity: 0, duration: 0.5, stagger: 0.05, delay: 0.6, ease: "elastic.out(1, 0.5)",
      scrollTrigger: { trigger: card, start: "top 72%" },
    });
  });

  /* ---------- Skills: grid wave + bars + % count ---------- */
  gsap.from(".skill-card", {
    scale: 0.85, opacity: 0, duration: 0.6, stagger: { each: 0.12, grid: "auto", from: "start" },
    ease: "power2.out",
    scrollTrigger: { trigger: ".skills-grid", start: "top 78%" },
  });
  document.querySelectorAll(".skill-card").forEach((card) => {
    ScrollTrigger.create({
      trigger: card, start: "top 82%", once: true,
      onEnter: () => {
        card.querySelectorAll(".skill-row").forEach((row, i) => {
          const bar = row.querySelector(".bar i");
          const pct = row.querySelector("b");
          const target = +bar.dataset.w;
          gsap.to(bar, { width: target + "%", duration: 1, delay: i * 0.08, ease: "power2.out" });
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target, duration: 1, delay: i * 0.08, ease: "power2.out",
            onUpdate: () => { pct.textContent = Math.round(obj.v) + "%"; },
          });
        });
      },
    });
  });

  /* ---------- Certifications: waterfall + snap-flat + hover tilt ---------- */
  document.querySelectorAll(".cert-card").forEach((card, i) => {
    gsap.from(card, {
      y: 60, opacity: 0, rotation: (i % 2 ? 1 : -1) * 2.2,
      duration: 0.7, delay: i * 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ".cert-grid", start: "top 80%" },
    });
    // mouse-follow tilt
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -7;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 7;
      gsap.to(card, { rotationX: rx, rotationY: ry, transformPerspective: 700, duration: 0.4 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5 });
    });
  });

  /* ---------- Achievements: counters + spring zoom ---------- */
  ScrollTrigger.create({
    trigger: "#achCounters", start: "top 85%", once: true,
    onEnter: () => {
      document.querySelectorAll("#achCounters .stat-num").forEach((el) =>
        countUp(el, +el.dataset.count, 1300)
      );
    },
  });
  gsap.from(".ach-card", {
    scale: 0.7, opacity: 0, duration: 0.75, stagger: 0.15, ease: "back.out(1.8)",
    scrollTrigger: { trigger: ".ach-grid", start: "top 80%" },
  });
  gsap.from(".ach-badge", {
    scale: 0, duration: 0.5, stagger: 0.15, delay: 0.5, ease: "back.out(3)",
    scrollTrigger: { trigger: ".ach-grid", start: "top 80%" },
  });

  /* ---------- Contact: panels slide in from bottom corners ---------- */
  gsap.from("[data-contact='left']", {
    x: -60, y: 50, rotation: -2, opacity: 0, duration: 0.85, ease: "power3.out",
    scrollTrigger: { trigger: ".contact-grid", start: "top 78%" },
  });
  gsap.from("[data-contact='right']", {
    x: 60, y: 50, rotation: 2, opacity: 0, duration: 0.85, ease: "power3.out",
    scrollTrigger: { trigger: ".contact-grid", start: "top 78%" },
  });
  gsap.from(".contact-form .field", {
    opacity: 0, y: 14, duration: 0.4, stagger: 0.12, delay: 0.4,
    scrollTrigger: { trigger: ".contact-grid", start: "top 75%" },
  });
  gsap.fromTo(".btn-send",
    { scale: 1 },
    {
      scale: 1.03, duration: 0.35, delay: 1.2, yoyo: true, repeat: 1, ease: "power1.inOut",
      scrollTrigger: { trigger: ".contact-grid", start: "top 70%" },
    }
  );
})();
