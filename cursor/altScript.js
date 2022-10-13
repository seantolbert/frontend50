const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const container = document.querySelector(".container");

let cursorX = 0,
  cursorY = 0,
  currentX = 0,
  currentY = 0;

window.addEventListener("mousemove", (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
});

function follow(start, end, t) {
  return start * (1 - t) + end * t;
}

function animate() {
  currentX = follow(currentX, cursorX, 0.1);
  currentY = follow(currentY, cursorY, 0.1);
  container.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)`;
  requestAnimationFrame(animate);
}



animate();
