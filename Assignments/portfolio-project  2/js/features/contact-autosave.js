const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");

// 🔹 Load saved data on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("contactForm");

  if (savedData) {
    const data = JSON.parse(savedData);

    nameInput.value = data.name || "";
    emailInput.value = data.email || "";
  }
});

// 🔹 Save data on typing
function saveData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value
  };

  localStorage.setItem("contactForm", JSON.stringify(formData));
}

nameInput.addEventListener("input", saveData);
emailInput.addEventListener("input", saveData);