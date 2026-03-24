const cursor = document.getElementById("cursor");

// Move cursor
document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

// Hover effect on clickable elements
const hoverElements = document.querySelectorAll("a, button");

hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
    });
});