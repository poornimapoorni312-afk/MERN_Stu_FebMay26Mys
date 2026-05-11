function sortProjects(data, type) {
  let sorted = [...data];

  switch (type) {
    case "az":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "za":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case "newest":
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;

    case "oldest":
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      break;

    default:
      return data;
  }

  return sorted;
}

sortSelect.addEventListener("change", (e) => {
  console.log("SORT CHANGED:", e.target.value);

  const sortedData = sortProjects(projectsData, e.target.value);
  console.log("SORTED DATA:", sortedData.map(p => p.name));

  renderProject(sortedData);
});