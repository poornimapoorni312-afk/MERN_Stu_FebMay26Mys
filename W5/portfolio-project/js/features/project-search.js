function createProjectCards() {
    const container = document.getElementById("projects-container");

    if (!container) {
        console.error("Container not found");
        return;
    }

    container.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "bg-white p-6 rounded shadow";

        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p>${project.description || "No description"}</p>
        `;

        container.appendChild(card);
    });
}