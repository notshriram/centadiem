/**
 * Get the percentage of the day that has passed
 * @param {number} timezone decimal timezone offset (-5.5 for +5:30)
 * @returns {number} percentage of the day that has passed with 5 decimal places
 */

function getPercentTime(timezoneOffset) {
  Number.prototype.StartOfDayMilliseconds = function () {
    return this - (this % (86400 * 1000));
  };
  let now = Date.now();
  now -= timezoneOffset * 3600 * 1000;
  const startOfDay = now.StartOfDayMilliseconds();
  const percentTime = ((now - startOfDay) / (86400 * 1000)) * 100;

  return percentTime.toFixed(5);
}

// theme change
const themeIcon = document.getElementById("theme-img");

themeIcon.addEventListener("click", () => {
  const body = document.querySelector("body");
  const isLightTheme = body.getAttribute("data-theme") === "light";
  if (isLightTheme) {
    body.setAttribute("data-theme", "dark");
    themeIcon.setAttribute("src", "./assets/icons/sun-icon.svg");
  } else {
    body.setAttribute("data-theme", "light");
    themeIcon.setAttribute("src", "./assets/icons/moon-icon.svg");
  }
});
