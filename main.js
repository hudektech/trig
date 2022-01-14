let btnRad = document.querySelector("#rad");
let cosine, sine;

let cir = document.querySelector("#cir");
let ctxCir = cir.getContext("2d");

let cos = document.querySelector("#cos");
let ctxCos = cos.getContext("2d");

let sin = document.querySelector("#sin");
let ctxSin = sin.getContext("2d");

cir.style.backgroundColor = "black";
cos.style.backgroundColor = "ivory";
sin.style.backgroundColor = "ivory";

let d = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.4);
let r = d / 2;
// cir.width = window.innerWidth * 0.8;
// cir.height = window.innerHeight * 0.4;
btnRad.max = Math.PI * 2;

cir.width = window.innerWidth * 0.8;
cir.height = window.innerHeight * 0.4;

cos.width = window.innerWidth * 0.8;
cos.height = window.innerHeight * 0.2;

sin.width = window.innerWidth * 0.8;
sin.height = window.innerHeight * 0.2;

const getPoints = (rad) => {
  let rcos = -(Math.cos(rad) * cos.height * 0.9) / 2 + cos.height / 2;
  let rsin = -(Math.sin(rad) * sin.height * 0.9) / 2 + sin.height / 2;

  return {
    cosine: { x: (rad / Math.PI / 2) * cos.width, y: rcos },
    sine: { x: (rad / Math.PI / 2) * sin.width, y: rsin },
  };
};

const calcPoints = (rad) => {
  arr = [];
  let steps = 10;

  for (let i = 1; i < rad * steps; i++) {
    let points1 = getPoints((i - 1) / steps);
    let cos1 = points1.cosine;
    let sin1 = points1.sine;

    let points2 = getPoints(i / steps);
    let cos2 = points2.cosine;
    let sin2 = points2.sine;

    arr.push({
      cos1: { x: cos1.x, y: cos1.y },
      sin1: { x: sin1.x, y: sin1.y },
      cos2: { x: cos2.x, y: cos2.y },
      sin2: { x: sin2.x, y: sin2.y },
    });
  }

  return arr;
};

const handleMouseMove = (evt) => {
  initializeCanvases();

  let rad = btnRad.value;
  let rcos = cir.width / 2 + 0.9 * r * Math.cos(rad);
  let rsin = cir.height / 2 - 0.9 * r * Math.sin(rad);

  // document.querySelector("#cosine").innerText = rad;

  let arr = calcPoints(rad);

  for (let i = 0; i < arr.length; i++) {
    ctxCos.beginPath();
    ctxCos.lineWidth = 5;
    ctxCos.lineCap = "round";
    ctxCos.strokeStyle = "blue";
    ctxCos.moveTo(arr[i].cos1.x, arr[i].cos1.y);
    ctxCos.lineTo(arr[i].cos2.x, arr[i].cos2.y);
    ctxCos.stroke();

    ctxSin.beginPath();
    ctxSin.lineWidth = 5;
    ctxSin.lineCap = "round";
    ctxSin.strokeStyle = "red";
    ctxSin.moveTo(arr[i].sin1.x, arr[i].sin1.y);
    ctxSin.lineTo(arr[i].sin2.x, arr[i].sin2.y);
    ctxSin.stroke();
  }

  // Cicle cosine
  ctxCir.beginPath();
  ctxCir.lineWidth = 8;
  ctxCir.lineCap = "round";
  ctxCir.strokeStyle = "blue";
  ctxCir.moveTo(cir.width / 2, cir.height / 2);
  ctxCir.lineTo(rcos, r);
  ctxCir.stroke();

  // Circle sine
  ctxCir.beginPath();
  ctxCir.lineWidth = 8;
  ctxCir.lineCap = "round";
  ctxCir.strokeStyle = "red";
  ctxCir.moveTo(rcos, r);
  ctxCir.lineTo(rcos, rsin);
  ctxCir.stroke();

  // Circle radius
  ctxCir.beginPath();
  ctxCir.lineCap = "round";
  ctxCir.strokeStyle = "green";
  ctxCir.moveTo(cir.width / 2, cir.height / 2);
  ctxCir.lineTo(rcos, rsin);
  ctxCir.stroke();

  // Circle angle
  ctxCir.beginPath();
  ctxCir.lineWidth = 5;
  ctxCir.lineCap = "butt";
  ctxCir.strokeStyle = "yellow";
  ctxCir.arc(cir.width / 2, cir.height / 2, d * 0.45, 0, -rad, true);
  ctxCir.stroke();
};
