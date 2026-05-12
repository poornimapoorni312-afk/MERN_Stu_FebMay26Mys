function initProjectFilter(){
    const projectsContainer = document.getElementById("project-filters");

    if(!projectsContainer){
        console.log("Project is not found");
        return;
    }
    projectsContainer.innerHTML=" ";
    projectsData.forEach(function(projects){

        const card = document.createElement("div");
        card.className = "p-8 text-center bg-pink-100 rounded-xl shadow-lg";
        
        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = projects.shortLabel;

        const projectsName = document.createElement("h3");
        projectsName.className = "text-xl font-bold mb-2";
        projectsName.textContent = projects.name;

        const projectsCategory = document.createElement("p");
        projectsCategory.className = "text-md font-bold ";
        projectsCategory.textContent = projects.category;

        const projectsDescription = document.createElement("p");
        projectsDescription.className = "text-sm ";
        projectsDescription.textContent = projects.description;

        const projectsTechnologies = document.createElement("p");
        projectsTechnologies.className = "text-sm ";
        projectsTechnologies.textContent = projects.technologies;
        
        const projectsStatus = document.createElement("p");
        projectsStatus.className = "text-sm p-1 text-center bg-red-300 rounded-xl shadow-lg mt-4";
        projectsStatus.textContent = projects.status;

        const projectsLiveDemo = document.createElement("button");
        projectsLiveDemo.className = "text-sm p-1 text-center bg-red-500 hover:bg-green-500 rounded shadow-lg justify-start";
        projectsLiveDemo.textContent = projects.liveDemo;

        const projectsGithub = document.createElement("button");
        projectsGithub.className = "text-sm p-1 text-center bg-purple-300 hover:bg-green-500 rounded shadow-lg justify-start";
        projectsGithub.textContent = projects.github;

        card.appendChild(projectsName);
        card.appendChild(projectsCategory);
        card.appendChild(projectsDescription);
        card.appendChild(projectsTechnologies);
        card.appendChild(projectsStatus);
        card.appendChild(projectsLiveDemo);
        card.appendChild(projectsGithub);

        projectsContainer.appendChild(card);

    });

    console.log("Projects rendered succesfully");
}