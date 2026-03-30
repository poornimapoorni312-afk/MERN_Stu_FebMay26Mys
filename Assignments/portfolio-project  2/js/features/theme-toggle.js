const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// ✅ Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

// ✅ Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // save theme
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});