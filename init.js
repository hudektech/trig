const initializeCanvases = () => {
  ctxCir.clearRect(0, 0, cir.width, cir.height);
  ctxCos.clearRect(0, 0, cos.width, cos.height);
  ctxSin.clearRect(0, 0, sin.width, sin.height);

  // Cosine x,y
  ctxCos.beginPath();
  ctxCos.lineWidth = 5;
  ctxCos.lineCap = "round";
  ctxCos.strokeStyle = "black";
  ctxCos.moveTo(0, cos.height / 2);
  ctxCos.lineTo(cos.width, cos.height / 2);
  ctxCos.stroke();

  ctxCos.beginPath();
  ctxCos.lineWidth = 5;
  ctxCos.lineCap = "round";
  ctxCos.strokeStyle = "black";
  ctxCos.moveTo(2.5, cos.height * 0.95);
  ctxCos.lineTo(2.5, cos.height * 0.05);
  ctxCos.stroke();

  // Sine x,y
  ctxSin.beginPath();
  ctxSin.lineWidth = 5;
  ctxSin.lineCap = "round";
  ctxSin.strokeStyle = "black";
  ctxSin.moveTo(0, sin.height / 2);
  ctxSin.lineTo(sin.width, sin.height / 2);
  ctxSin.stroke();

  ctxSin.beginPath();
  ctxSin.lineWidth = 5;
  ctxSin.lineCap = "round";
  ctxSin.strokeStyle = "black";
  ctxSin.moveTo(2.5, sin.height * 0.95);
  ctxSin.lineTo(2.5, sin.height * 0.05);
  ctxSin.stroke();

  // Unit circle x, y
  ctxCir.beginPath();
  ctxCir.lineWidth = 5;
  ctxCir.lineCap = "round";
  ctxCir.strokeStyle = "white";
  ctxCir.moveTo(-d * 0.45 + cir.width / 2, cir.height / 2);
  ctxCir.lineTo(d * 0.45 + cir.width / 2, cir.height / 2);
  ctxCir.stroke();

  ctxCir.beginPath();
  ctxCir.lineWidth = 5;
  ctxCir.lineCap = "round";
  ctxCir.strokeStyle = "white";
  ctxCir.moveTo(cir.width / 2, -d * 0.45 + cir.height / 2);
  ctxCir.lineTo(cir.width / 2, d * 0.45 + cir.height / 2);
  ctxCir.stroke();

  // Unit circle outside edge
  ctxCir.beginPath();
  ctxCir.lineCap = "round";
  ctxCir.strokeStyle = "white";
  ctxCir.arc(cir.width / 2, cir.height / 2, d * 0.45, 0, 7);
  ctxCir.stroke();
};

window.onload = handleMouseMove;
