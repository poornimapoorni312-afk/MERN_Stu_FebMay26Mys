function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("portfolio-theme");

    // Apply saved theme on page load
    
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", functi
        on () {
        body.classList.toggle("dark-mode");

        // Save theme preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("portfolio-theme", "dark");
        } else {
            localStorage.setItem("portfolio-theme", "light");
            console.log("light mode enabled")
        }
    });
}