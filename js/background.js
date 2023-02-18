// Generating random color
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Changing background color using random color
function setRandomBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = randomColor();
}

// Selecting the id's of the shapes
document.getElementById("triangle").addEventListener("mouseenter", function () {
  setRandomBackgroundColor("triangle");
});

document
  .getElementById("rectangle")
  .addEventListener("mouseenter", function () {
    setRandomBackgroundColor("rectangle");
  });

document.getElementById("rhombus").addEventListener("mouseenter", function () {
  setRandomBackgroundColor("rhombus");
});

document
  .getElementById("parallelogram")
  .addEventListener("mouseenter", function () {
    setRandomBackgroundColor("parallelogram");
  });

document.getElementById("pentagon").addEventListener("mouseenter", function () {
  setRandomBackgroundColor("pentagon");
});

document.getElementById("ellipse").addEventListener("mouseenter", function () {
  setRandomBackgroundColor("ellipse");
});
