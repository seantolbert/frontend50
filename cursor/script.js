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
    left: `${e.pageX}px`,
    top: `${e.pageY}px`,
  });
});

// touch accessible video tutorial
// https://www.youtube.com/watch?v=62BCYtJX2tY
// function isTouchDevice() {
//   try {
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

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
  // gsap.to(container, {
  //   duration: 0.7,
  //   top: getDocumentOffsetPosition(greenButton).top,
  //   left: getDocumentOffsetPosition(greenButton).left,
  //   ease: "elastic",
  // });
  gsap.to(greenButton, { duration: 0.7, color: "green" });
});

greenButton.addEventListener("mouseleave", (e) => {
  gsap.to(tl, { timeScale: 1 });
  // gsap.to(container, {
  //   duration: 0.5,
  //   left: `${e.pageX}px`,
  //   top: `${e.pageY}px`,
  //   ease: "elastic",
  // });
  gsap.to(greenButton, { duration: 0.7, color: "white" });
});

// grab an element's position
function getDocumentOffsetPosition(el) {
  let top = 0,
    left = 0;
  while (el !== null) {
    top += el.offsetTop;
    left += el.offsetLeft;
    el = el.offsetParent;
  }
  return { top, left };
}

console.log(getDocumentOffsetPosition(greenButton));
