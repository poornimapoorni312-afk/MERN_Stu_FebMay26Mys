function saveRecentProject(project) {
  let recent = JSON.parse(localStorage.getItem("recentProjects")) || [];

  // remove duplicate (avoid same project twice)
  recent = recent.filter(p => p.name !== project.name);

  // add latest project at top
  recent.unshift(project);

  // keep only last 5
  recent = recent.slice(0, 5);

  localStorage.setItem("recentProjects", JSON.stringify(recent));

  renderRecentProjects();
}

function renderRecentProjects() {
  const container = document.getElementById("recent-container");

  if (!container) {
    console.log("Recent container not found");
    return;
  }

  const recent = JSON.parse(localStorage.getItem("recentProjects")) || [];

  container.innerHTML = "";

  recent.forEach(project => {
    const card = document.createElement("div");
    card.className = "p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md";

    card.innerHTML = `
      <h3 class="font-bold text-lg">${project.name}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300">
        ${project.description}
      </p>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderRecentProjects);