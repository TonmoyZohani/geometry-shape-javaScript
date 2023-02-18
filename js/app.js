let serialNo = 0;

// Converting the string value
function convertStringToValue(value) {
  return parseFloat(value);
}

// Multiplication for area
function multiPlyTwo(n1, n2) {
  return (n1 * n2).toFixed(2);
}

function multiPlyThree(n1, n2) {
  return (0.5 * n1 * n2).toFixed(2);
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
  if (value1 <= 0 || value2 <= 0 || isNaN(value1) || isNaN(value2)) {
    return true;
  } else {
    return false;
  }
}

// Creating the list element for area calculation
function createListElement(name, serialNo, area) {
  if (serialNo <= 8) {
    const list = document.createElement("li");
    list.innerHTML = `<div class="mb-2 flex items-center justify-center">${serialNo}.
                ${name} &nbsp; <span> ${area} cm<sup>2</sup> </span>&nbsp; 
                <button class="bg-blue-400 p-1 rounded">
                  Convert to m<sup>2</sup>
                </button>
              </div>`;
    console.log(list);

    document.getElementById("list-container").appendChild(list);
  } else {
    alert("You can not make operation more than eight");
  }
}

// Going to the blog page
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

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
      alert("Please, Enter valid inputt");
    } else {
      serialNo++;
      const area = multiPlyThree(triangleHeight, triangleBase);

      createListElement("Triangle", serialNo, area);
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

    if (positiveValidation(rectangleWidth, rectangleLength)) {
      alert("Please, Enter valid inputt");
    } else {
      serialNo++;
      const area = multiPlyTwo(rectangleWidth, rectangleLength);
      createListElement("Rectangle", serialNo, area);
    }
  }
});

// Parallelogram area calculation

document.getElementById("btn-para").addEventListener("click", function () {
  const paraBaseStr = document.getElementById("paraBase").value;
  const paraHeightStr = document.getElementById("paraHeight").value;

  if (emptyValidation(paraBaseStr, paraHeightStr)) {
    alert("Please,Enter valid input");
  } else {
    const paraWidth = convertStringToValue(paraBaseStr);
    const paraHeight = convertStringToValue(paraHeightStr);

    if (positiveValidation(paraWidth, paraHeight)) {
      alert("Please, Enter valid inputt");
    } else {
      serialNo++;
      const area = multiPlyTwo(paraWidth, paraHeight);
      createListElement("Parallelogram", serialNo, area);
    }
  }
});

// Rhombus area calculation

document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhomDiagOneStr = document.getElementById("diagOne").value;
  const rhomDiagTwoStr = document.getElementById("diagTwo").value;

  if (emptyValidation(rhomDiagOneStr, rhomDiagTwoStr)) {
    alert("Please,Enter valid input");
  } else {
    const rhomDiagOne = convertStringToValue(rhomDiagOneStr);
    const rhomDiagTwo = convertStringToValue(rhomDiagTwoStr);

    if (positiveValidation(rhomDiagOne, rhomDiagTwo)) {
      alert("Please, Enter valid inputt");
    } else {
      serialNo++;
      const area = multiPlyThree(rhomDiagOne, rhomDiagTwo);
      createListElement("Rhombus", serialNo, area);
    }
  }
});

// Pentagon area calculation
document.getElementById("btn-pent").addEventListener("click", function () {
  const baseStr = document.getElementById("base").value;
  const pentStr = document.getElementById("pent").value;

  if (emptyValidation(baseStr, pentStr)) {
    alert("Please,Enter valid input");
  } else {
    const base = convertStringToValue(baseStr);
    const pent = convertStringToValue(pentStr);

    if (positiveValidation(base, pent)) {
      alert("Please, Enter valid inputt");
    } else {
      serialNo++;
      const area = multiPlyThree(base, pent);
      createListElement("Pentagon", serialNo, area);
    }
  }
});

// Ellipse area calculation

document.getElementById("btn-ellipse").addEventListener("click", function () {
  const axisValStr = document.getElementById("axisVal").value;
  const baseValStr = document.getElementById("baseVal").value;

  if (emptyValidation(axisValStr, baseValStr)) {
    alert("Please,Enter valid input");
  } else {
    const axisVal = convertStringToValue(axisValStr);
    const baseVal = convertStringToValue(baseValStr);

    if (positiveValidation(axisVal, baseVal)) {
      alert("Please, Enter valid inputt");
    } else {
      serialNo++;
      const area = (multiPlyTwo(axisVal, baseVal) * 3.1416).toFixed(2);
      createListElement("Ellipse", serialNo, area);
    }
  }
});
