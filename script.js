// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Intersection Observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Project filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter || "all";

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projects.forEach((project) => {
      const tags = (project.dataset.tags || "").split(" ");
      if (filter === "all" || tags.includes(filter)) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});

// Theme toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const applyTheme = (theme) => {
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
    themeToggle.querySelector(".icon").textContent = "☀";
  } else {
    root.setAttribute("data-theme", "dark");
    themeToggle.querySelector(".icon").textContent = "☾";
  }
};

const savedTheme = window.localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  applyTheme(savedTheme);
} else {
  // Match system preference by default
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "light" : "dark");
}

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = current === "light" ? "dark" : "light";
  applyTheme(next);
  window.localStorage.setItem("theme", next);
});

// Dynamic year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

