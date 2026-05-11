function setGreeting() {
  const greetingEl = document.getElementById("greeting-text");
  if (!greetingEl) return;

  greetingEl.classList.add("opacity-0");

  setTimeout(() => {
    const hour = new Date().getHours();

    let greeting = "";

    if (hour >= 5 && hour < 12) {
      greeting = "🌅 Good Morning";
    } else if (hour >= 12 && hour < 17) {
      greeting = "🌞 Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
      greeting = "🌇 Good Evening";
    } else {
      greeting = "🌙 Good Night";
    }

    greetingEl.textContent = greeting + ", Poornima 👋";
    greetingEl.classList.remove("opacity-0");
  }, 150);
}

document.addEventListener("DOMContentLoaded", function () {
  setGreeting();
});