function addHoverEffect(element, color) {
  element.addEventListener("mouseenter", () => {
    element.classList.add(`bg-${color}-300`, `hover:bg-${color}-300`);
  });

  element.addEventListener("mouseleave", () => {
    element.classList.remove(`bg-${color}-300`, `hover:bg-${color}-300`);
  });
}

const triangle = document.getElementById("triangle");
addHoverEffect(triangle, "pink");

const rectangle = document.getElementById("rectangle");
addHoverEffect(rectangle, "rose");

const parallelogram = document.getElementById("parallelogram");
addHoverEffect(parallelogram, "fuchsia");

const rhombus = document.getElementById("rhombus");
addHoverEffect(rhombus, "purple");

const pentagon = document.getElementById("pentagon");
addHoverEffect(pentagon, "blue");

const ellipse = document.getElementById("ellipse");
addHoverEffect(ellipse, "green");

