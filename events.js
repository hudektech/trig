btnRad.addEventListener("click", (evt) => {
  handleMouseMove();
});

btnRad.addEventListener("mousedown", (evt) => {
  debugger;
  btnRad.addEventListener("mousemove", handleMouseMove);
});

btnRad.addEventListener("mouseup", (evt) => {
  btnRad.removeEventListener("mousemove", handleMouseMove);
});

// Mobile
btnRad.addEventListener("touchstart", (evt) => {
  // evt.preventDefault();
  btnRad.addEventListener("touchmove", handleMouseMove);
});

btnRad.addEventListener("touchend", (evt) => {
  // evt.preventDefault();
  btnRad.removeEventListener("touchmove", handleMouseMove);
});

window.onresize = (evt) => {
  // location.reload();
};
