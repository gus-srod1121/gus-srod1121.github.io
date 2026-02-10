const defaultDarkMode = true;

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function setup() {
    const darkModeButton = document.getElementById("dark-mode-button");
    if (!darkModeButton) return;

    darkModeButton.addEventListener("click", toggleDarkMode);

    if (defaultDarkMode)
    {
        document.body.classList.add("dark-mode");
    }
}

setup();
