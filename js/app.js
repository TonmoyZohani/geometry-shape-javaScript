// Converting the string value
function convertStringToValue(value) {
  return parseFloat(value);
}

// Multiplication for area
function multiPly(n1, n2) {
  return (n1 * n2).toFixed(2);
}

// Empty value validation check
function emptyValidation(value1, value2) {
  if (value1 === "" || value2 === "" || (value1 === "" && value2 === "")) {
    return true;
  } else {
    return false;
  }
}

// Positive value validation check
function positiveValidation(value1, value2) {
  if (value1 < 0 || value2 < 0) {
    return true;
  } else {
    return false;
  }
}

// Creating the list element for area calculation
function createListElement(area) {
  const list = document.createElement("li");
  list.innerHTML = `<div class="mb-2 flex items-center justify-center">
                Triangle &nbsp; <span> ${area} cm<sup>2</sup> </span>&nbsp; 
                <button class="bg-blue-400 p-1 rounded">
                  Convert to m<sup>2</sup>
                </button>
              </div>`;
  console.log(list);

  document.getElementById("list-container").appendChild(list);
}

// Triangle area calculation

document.getElementById("btn-triangle").addEventListener("click", function () {
  const triangleHeightStr = document.getElementById("tri-height").value;
  const triangleBaseStr = document.getElementById("tri-base").value;

  if (emptyValidation(triangleHeightStr, triangleBaseStr)) {
    alert("Please,Enter valid input");
  } else {
    const triangleHeight = convertStringToValue(triangleHeightStr);
    const triangleBase = convertStringToValue(triangleBaseStr);

    if (positiveValidation(triangleHeight, triangleBase)) {
      alert("Don't give negative input");
    } else {
      const area = 0.5 * multiPly(triangleHeight, triangleBase);

      createListElement(area);
    }
  }
});

// Rectangle area calculation

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangleWidthStr = document.getElementById("rect-width").value;
  const rectangleLengthStr = document.getElementById("rect-length").value;

  if (emptyValidation(rectangleWidthStr, rectangleLengthStr)) {
    alert("Please,Enter valid input");
  } else {
    const rectangleWidth = convertStringToValue(rectangleWidthStr);
    const rectangleLength = convertStringToValue(rectangleLengthStr);

    if (positiveValidation(rectangleWidth, rectangleWidth)) {
      alert("Don't give negative input");
    } else {
      const area = multiPly(rectangleWidth, rectangleLength);

      createListElement(area);
    }
  }
});
