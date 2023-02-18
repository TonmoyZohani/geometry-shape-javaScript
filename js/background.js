function addHoverEffect(element) {

   const colors = [
     "gray",
     "red",
     "pink",
     "blue",
     "purple",
     "fuchsia",
     "purple",
     "violet",
     "amber",
     "rose",
     "indigo",
     "green",
     "yellow",
     "teal",
     "cool-gray",
     "blue-gray",
     "true-gra",
     "warm-gray",
     "orange",
     "sky",
     "navy",
     "emerald",
   ];

  let color = colors[Math.floor(Math.random() * colors.length)];
  element.addEventListener("mouseenter", () => {
    element.classList.add(`bg-${color}-300`, `hover:bg-${color}-300`);
  });

  element.addEventListener("mouseleave", () => {
    // element.classList.remove(`bg-${color}-300`, `hover:bg-${color}-300`);
    color = colors[Math.floor(Math.random() * colors.length)];
  });
}

// Get Random color function

// function getRandomColor() {
//   const colors = [
//     "gray",
//     "red",
//     "pink",
//     "blue",
//     "purple",
//     "fuchsia",
//     "purple",
//     "violet",
//     "amber",
//     "rose",
//     "indigo",
//     "green",
//     "yellow",
//     "teal",
//     "cool-gray",
//     "blue-gray",
//     "true-gra",
//     "warm-gray",
//     "orange",
//     "sky",
//     "navy",
//     "emerald",
//   ];

//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   console.log(randomColor);
//   return randomColor;
// }

const triangle = document.getElementById("triangle");
addHoverEffect(triangle);

const rectangle = document.getElementById("rectangle");
addHoverEffect(rectangle);

const parallelogram = document.getElementById("parallelogram");
addHoverEffect(parallelogram);

const rhombus = document.getElementById("rhombus");
addHoverEffect(rhombus);

const pentagon = document.getElementById("pentagon");
addHoverEffect(pentagon);

const ellipse = document.getElementById("ellipse");
addHoverEffect(ellipse);
