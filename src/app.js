// Window content loaded
window.addEventListener("DOMContentLoaded", initApp);

// Init function
function initApp() {
  const pageArr = ["10k", "50k", "100k", "500k", "1m"];
  let priceArr = ["8.00", "12.00", "16.00", "24.00", "36.00"];

  // DOM selects
  const rangeSlider = document.querySelector("#range-slider");
  const pages = document.querySelector(".compo__page");
  const prices = document.querySelector(".compo__price h2");
  const priceRange = document.querySelector(".compo__price--range");
  const billCheckbox = document.querySelector("#bill-checkbox");

  // Input range
  rangeSlider.addEventListener("input", function (event) {
    progressRange();
    showResult();
  });

  // Bill Checkbox
  billCheckbox.addEventListener("change", function (event) {
    if (billCheckbox.checked) {
      priceArr.forEach(
        (value, index) => (priceArr[index] = parseInt(value) * 12 + ".00")
      );
      // 25% off
      priceArr.forEach(
        (value, index) =>
          (priceArr[index] =
            parseInt(value) - (parseInt(value) * 25) / 100 + ".00")
      );

      priceRange.innerText = "/ year";
      showResult();
    } else {
      priceArr = ["8.00", "12.00", "16.00", "24.00", "36.00"];
      priceRange.innerText = "/ month";
      showResult();
    }
  });

  // Show result
  function showResult() {
    const targetValue = rangeSlider.value;

    pages.innerText = `${pageArr[targetValue - 1]} pageviews`;
    prices.innerHTML = `&dollar;${priceArr[targetValue - 1]}`;
  }

  // Progress range
  function progressRange() {
    const minValue = rangeSlider.min;
    const maxValue = rangeSlider.max;
    const value = rangeSlider.value;

    rangeSlider.style.backgroundSize =
      ((value - minValue) * 100) / (maxValue - minValue) + "% 100%";
  }
}
