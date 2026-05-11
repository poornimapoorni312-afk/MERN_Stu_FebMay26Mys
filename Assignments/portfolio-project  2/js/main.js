document.addEventListener("DOMContentLoaded", function () {
  // Render skills
  renderFilters(skills);
  renderSkills();
  initModal();
  initContactValidation();
  initThemeToggle();
  renderRecentProjects();

  createProjectCards();
  renderProject();
  setGreeting();
  loadGitHubStats();
  initCopyEmail();

  // ✅ ADD THIS SORTING CODE HERE
  const sortSelect = document.getElementById("project-sort");

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const sortedData = sortProjects(projectsData, e.target.value);
      renderProject(sortedData);
    });
  }
});