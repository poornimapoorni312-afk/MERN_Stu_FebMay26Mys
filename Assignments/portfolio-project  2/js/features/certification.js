const container = document.getElementById("certifications-container");

if (container && window.certifications) {
  window.certifications.forEach(cert => {
    const card = document.createElement("div");

    card.className =
      "p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-xl hover:scale-105 transition";

    card.innerHTML = `
      <h3 class="text-xl font-bold">${cert.title}</h3>
      <p>${cert.org}</p>
      <span class="text-sm">${cert.year}</span>
    `;

    container.appendChild(card);
  });
}