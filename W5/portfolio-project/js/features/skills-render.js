function renderSkills() {
    const skillsContainer = document.getElementById("skills-container");

    if (!skillsContainer) {
        console.log("Skills Container not found");
        return;
    }

    skillsContainer.innerHTML = "";

    skillsData.forEach(function (skill) {
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        // icon
        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = skill.shortLabel;

        iconBox.appendChild(iconText);

        // name
        
        const skillName = document.createElement("h3");
        skillName.className = "text-xl font-bold mb-2";
        skillName.textContent = skill.name;

        // percentage text
        const percentText = document.createElement("p");
        percentText.className = "text-sm font-bold mb-2";
        percentText.textContent = "0%"; // start from 0

        // description
        const skillDescription = document.createElement("p");
        skillDescription.className = "text-sm mb-4";
        skillDescription.textContent = skill.description;

        // progress container
        const progressContainer = document.createElement("div");
        progressContainer.className = "w-full bg-gray-300 h-3 rounded";

        // progress bar
        const progressBar = document.createElement("div");
        progressBar.className = "skill-bar h-3 rounded";
        progressBar.setAttribute("data-width", skill.level + "%");

        // 🌈 dynamic color based on level
        if (skill.level >= 85) {
            progressBar.classList.add("bg-green-500");
        } else if (skill.level >= 70) {
            progressBar.classList.add("bg-blue-500");
        } else {
            progressBar.classList.add("bg-red-400");
        }

        progressContainer.appendChild(progressBar);

        // append all
        card.appendChild(iconBox);
        card.appendChild(skillName);
        card.appendChild(percentText);
        card.appendChild(skillDescription);
        card.appendChild(progressContainer);

        skillsContainer.appendChild(card);
    });

    console.log("skills rendered successfully");
}