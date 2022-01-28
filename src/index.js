const COLOR_MODE = "color-mode";
const systemPrefersColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const systemPrefersColorMode = systemPrefersColorScheme ? "dark" : "light";
const prefersColorScheme =
  localStorage.getItem(COLOR_MODE) ?? systemPrefersColorMode;

const $body = document.querySelector("body");
const $buttonSwitchLightMode = document.getElementById(
  "js-toggle-light-color-mode"
);
const $buttonSwitchDarkMode = document.getElementById(
  "js-toggle-dark-color-mode"
);

if (!prefersColorScheme) {
  localStorage.setItem(COLOR_MODE, systemPrefersColorMode);
}

// Initialize body className
$body.classList.add(`${COLOR_MODE}-${prefersColorScheme}`);
// Trigger buttons
$buttonSwitchLightMode.addEventListener("click", () =>
  toggleColorMode("light")
);
$buttonSwitchDarkMode.addEventListener("click", () => toggleColorMode("dark"));

const toggleColorMode = (colorMode) => {
  localStorage.setItem(COLOR_MODE, colorMode);
  $body.classList = `${COLOR_MODE}-${colorMode}`;
};
