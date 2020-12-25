function changeRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let mainColor = document.querySelector(".main__color");
  let body = document.querySelector("body");
  body.style.background = randomColor;
  mainColor.innerHTML = `BG Color : ${randomColor}`;
  mainColor.style.color = "black";
}
function changeInputColor() {
  let inputColor = document.querySelector("#color-input").value.toLowerCase();

  let body = document.querySelector("body");
  let mainColor = document.querySelector(".main__color");
  if (isColor(inputColor)) {
    body.style.background = inputColor;
    mainColor.innerHTML = `BG Color : ${inputColor}`;
  } else if (
    inputColor.split("(")[0] === "rgb" ||
    inputColor.split("(")[0] === "rgba"
  ) {
    body.style.background = inputColor;
    mainColor.innerHTML = `BG Color : ${inputColor}`;
  } else if (inputColor[0] === "#") {
    body.style.background = inputColor;
    mainColor.innerHTML = `BG Color : ${inputColor}`;
  } else {
    mainColor.innerHTML = "INVAILD COLOR";
  }

  if (inputColor == "black") {
    mainColor.style.color = "white";
  } else {
    mainColor.style.color = "black";
  }
}
function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}
