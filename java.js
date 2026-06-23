const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const htmlElement = document.documentElement;

function applyTheme(theme) {
    htmlElement.dataset.theme = theme;

    const darkThemeIsActive = theme === "dark";

    themeButton.setAttribute("aria-pressed", darkThemeIsActive);
    themeIcon.textContent = darkThemeIsActive ? "\u2600" : "\u263E";

    themeButton.setAttribute(
        "aria-label",
        darkThemeIsActive ? "Activar tema claro" : "Activar tema oscuro"
    );
}

themeButton.addEventListener("click", function () {
    const currentTheme = htmlElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme ? savedTheme : systemPrefersDark ? "dark" : "light";

applyTheme(initialTheme);
