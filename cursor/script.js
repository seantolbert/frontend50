const container = document.querySelector(".container");
const greenButton = document.querySelector(".green");
const purpleButton = document.querySelector(".purple");
const orangeButton = document.querySelector(".orange");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");

// cursor follow function for container
document.addEventListener("mousemove", (e) => {
  gsap.to(container, {
    duration: 0.1,
    x: `${e.pageX - 350}px`,
    y: `${e.pageY - 350}px`,
  });
});

// defining the separate circle rotation animation
// the time scalse starts at 0,
// so it does not run in the background
const tl = gsap
  .to(container, {
    duration: 1,
    rotate: "360deg",
    ease: "none",
    repeat: -1,
  })
  .timeScale(0);

// container will only appear when mouse enters
document.addEventListener("mouseenter", (e) => {
  gsap.to(container, {
    duration: 0.5,
    opacity: 1,
  });
  gsap.to(tl, { timeScale: 1, ease: "power3" });
});

document.addEventListener("mouseleave", (e) => {
  gsap.to(container, {
    duration: 0.5,
    opacity: 0,
  });
  gsap.to(tl, { timeScale: 0, ease: "power3" });
});

// adding mouse hover effects to the buttons
greenButton.addEventListener("mouseenter", (e) => {
  gsap.to(tl, { timeScale: 0 });
  gsap.to(blue, { duration: 0.7, opacity: 0 });
  gsap.to(yellow, { duration: 0.2, x: -40, opacity: 0 });
  gsap.to(red, { duration: 0.2, x: 40, zIndex: -2 });
  gsap.to(greenButton, { duration: 0.7, color: "green" });
});

greenButton.addEventListener("mouseleave", (e) => {
  gsap.to(tl, { timeScale: 1 });
  gsap.to(blue, { duration: 0.7, opacity: 1 });
  gsap.to(yellow, { duration: 0.7, x: 0, opacity: 1 });
  gsap.to(red, { duration: 0.7, x: 0, zIndex: 0 });
  gsap.to(greenButton, { duration: 0.7, color: "white" });
});
