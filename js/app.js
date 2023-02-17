function convertStringToValue(value) {
  return parseFloat(value);
}

function multiPly(n1, n2) {
  return n1 * n2;
}

// Triangle area calculation

document.getElementById("btn-triangle").addEventListener("click", function () {
  const triangleHeightStr = document.getElementById("tri-height").value;
  const triangleBaseStr = document.getElementById("tri-base").value;

  if (
    triangleHeightStr === "" ||
    triangleBaseStr === "" ||
    (triangleHeightStr === "" && triangleBaseStr === "")
  ) {
    alert("Please,Enter valid input");
  } else {
    const triangleHeight = convertStringToValue(triangleHeightStr);
    const triangleBase = convertStringToValue(triangleBaseStr);

    if (triangleHeight < 0 || triangleBase < 0) {
      alert("Please,Enter valid input");
    } else {
      const area = multiPly(triangleHeight, triangleBase);
      console.log(area);

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
  }
});
