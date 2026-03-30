const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 120) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("text-blue-600", "border-b-2", "border-blue-600");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("text-blue-600", "border-b-2", "border-blue-600");
        }
    });
});