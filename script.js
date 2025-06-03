const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop + 60 &&
      section.offsetTop + section.offsetHeight > fromTop + 60
    ) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

