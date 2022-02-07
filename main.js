const imgSrces = [
  "S__50946079.jpg",
  "S__50946082.jpg",
  "S__50946084.jpg",
  "S__50946088.jpg",
  "S__50946090.jpg",
  "S__50946091.jpg",
  "S__50946093.jpg",
];
let num = -1;

function slider() {
  if (num === 6) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById(`slideImg`).src = imgSrces[num];
}

setInterval(slider, 2800);

function slideCap() {
  let Caption = document.getElementById("caption");
  if ((num = 1)) {
    Caption.textContent = "aaa";
  } else if ((num = 2)) {
    Caption.textContent = "bbb";
  } else if ((num = 3)) {
    Caption.textContent = "ccc";
  } else if ((num = 4)) {
    Caption.textContent = "ddd";
  } else if ((num = 5)) {
    Caption.textContent = "eee";
  } else if ((num = 6)) {
    Caption.textContent = "fff";
  }
}
