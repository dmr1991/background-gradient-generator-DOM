var cssOutput = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("backgroundGradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  cssOutput.textContent = body.style.background + ";";
}

window.onload = function () {
  setGradient();
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
