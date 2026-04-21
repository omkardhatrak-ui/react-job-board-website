(function () {
    const STORAGE_KEY = "jobfinder-theme";

    function getSavedTheme() {
        const savedTheme = window.localStorage.getItem(STORAGE_KEY);
        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function updateButtons(theme) {
        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            button.setAttribute("aria-pressed", String(theme === "dark"));
            button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
            button.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
        });
    }

    function applyTheme(theme) {
        if (!document.body) {
            return;
        }

        document.body.dataset.theme = theme;
        document.documentElement.dataset.theme = theme;
        updateButtons(theme);
    }

    function toggleTheme() {
        const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
    }

    function initializeTheme() {
        applyTheme(getSavedTheme());

        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            button.addEventListener("click", toggleTheme);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeTheme);
    } else {
        initializeTheme();
    }
})();
