const indexValueInput = document.getElementById("index-value");
const indexLevel = document.querySelector(".index-level");
const indexNumber = document.querySelector(".index-number");

indexValueInput.addEventListener("input", (event) => {
  const indexValue = event.target.value;
  indexLevel.style.width = `${indexValue}%`;
  indexNumber.textContent = indexValue;
  indexNumber.style.setProperty("left", "calc(" + indexValue + "% - 20px)");
});
