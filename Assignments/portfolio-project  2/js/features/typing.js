const roles = [
  "Full-Stack Developer",
  "MERN Enthusiast",
  "Competitive Programmer"
];

const typingElement = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingElement.textContent = currentRole.slice(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.slice(0, charIndex++);
  }

  // speed control
  let speed = isDeleting ? 50 : 100;

  // when word finished typing
  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    speed = 1500; // pause before deleting
  }

  // when word fully deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500; // pause before next word
  }

  setTimeout(typeEffect, speed);
}

// start typing
typeEffect();