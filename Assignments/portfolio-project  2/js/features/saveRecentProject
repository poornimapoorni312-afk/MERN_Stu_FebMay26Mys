function saveRecentProject(project) {
  let recent = JSON.parse(localStorage.getItem("recentProjects")) || [];

  // remove duplicate
  recent = recent.filter(p => p.id !== project.id);

  // add to top
  recent.unshift(project);

  // keep max 5
  if (recent.length > 5) {
    recent = recent.slice(0, 5);
  }

  localStorage.setItem("recentProjects", JSON.stringify(recent));

  renderRecentProjects();
}