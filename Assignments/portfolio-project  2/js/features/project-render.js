function renderProject(data = projectsData) {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.log("Projects were not found");
        return;
    }

    projectsContainer.textContent = "";

    data.forEach(function (project) {

        const card = document.createElement("div");
        card.className = "relative p-8 pt-12 text-center bg-white rounded-3xl shadow-lg";

        card.addEventListener("click", () => {
            console.log("clicked:", project.name);
            saveRecentProject(project);
        });

        const projectName = document.createElement("h2");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        const projectCategory = document.createElement("h5");
        projectCategory.className = "text-sm mb-2 text-blue-800";
        projectCategory.textContent = project.category;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-2";
        projectDescription.textContent = project.description;

        const projectTechnologies = document.createElement("span");
        projectTechnologies.className = "text-sm mb-2 text-green-600 block";
        projectTechnologies.textContent = project.technologies.join(", ");

        const statsContainer = document.createElement("div");
        statsContainer.className =
            "flex justify-between text-sm mt-4 bg-gray-100 px-3 py-2 rounded-lg";

        const views = document.createElement("span");
        views.textContent = `👁 ${project.stats?.views ?? 0}`;

        const likes = document.createElement("span");
        likes.textContent = `❤️ ${project.stats?.likes ?? 0}`;

        const visits = document.createElement("span");
        visits.textContent = `🚀 ${project.stats?.visits ?? 0}`;

        statsContainer.appendChild(views);
        statsContainer.appendChild(likes);
        statsContainer.appendChild(visits);

        const projectStatus = document.createElement("div");
        projectStatus.className =
            "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg";
        projectStatus.textContent = project.status;

        const projectliveDemo = document.createElement("a");
        projectliveDemo.className =
            "inline-block mt-3 text-blue-500 text-sm px-4 py-2 bg-blue-200 rounded";
        projectliveDemo.textContent = "Live Demo";
        projectliveDemo.href = project.liveDemo;
        projectliveDemo.target = "_blank";

        const projectgithub = document.createElement("a");
        projectgithub.className =
            "inline-block mt-2 text-blue-500 text-sm px-4 py-2 bg-blue-200 rounded";
        projectgithub.textContent = "GitHub";
        projectgithub.href = project.github;
        projectgithub.target = "_blank";

        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(statsContainer);
        card.appendChild(projectStatus);
        card.appendChild(projectliveDemo);
        card.appendChild(projectgithub);

        projectsContainer.appendChild(card);
    });
}

renderProject();