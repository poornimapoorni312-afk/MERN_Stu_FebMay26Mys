const skillBars = document.querySelectorAll(".skill-bar");

function animateSkills() {
    const triggerBottom = window.innerHeight * 0.8;

    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;

        if (barTop < triggerBottom) {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
        }
    });
}

window.addEventListener("scroll", animateSkills);