document.addEventListener("mousemove", (details) => {
  document.querySelectorAll(".img").forEach((elem) => {
    const position = elem.getAttribute("value");
    const x = (window.innerWidth - details.clientX * position) / 50;
    const y = (window.innerHeight - details.clientY * position) / 50;
    elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
