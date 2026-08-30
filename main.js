/* St. Albert Family Clinic - shared behavior */

// Mobile nav toggle
document.addEventListener("click", function (e) {
  const toggle = e.target.closest(".nav-toggle");
  if (toggle) {
    document.querySelector(".site-header").classList.toggle("open");
  }
});

// Hero slider
(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const slides = Array.from(hero.querySelectorAll(".slide"));
  if (!slides.length) return;
  let i = 0;
  let timer;

  function show(n) {
    slides[i].classList.remove("active");
    i = (n + slides.length) % slides.length;
    slides[i].classList.add("active");
  }
  function next() { show(i + 1); }
  function prev() { show(i - 1); }
  function play() { timer = setInterval(next, 6000); }
  function reset() { clearInterval(timer); play(); }

  const nextBtn = hero.querySelector(".slide-next");
  const prevBtn = hero.querySelector(".slide-prev");
  if (nextBtn) nextBtn.addEventListener("click", () => { next(); reset(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); reset(); });

  play();
})();

// Contact form (front-end only; no backend wired up)
(function () {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = "Thanks! Your message has been noted. Please call (302) 389-8443 for urgent needs.";
      status.style.color = "#1f7a3f";
    }
    form.reset();
  });
})();
