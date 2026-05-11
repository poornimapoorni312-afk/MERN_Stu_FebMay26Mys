const githubUsername = "Poornima";
async function loadGitHubStats() {
  const statsContainer = document.getElementById("stats");

  if (!statsContainer) return;

  try {
    const res = await fetch(`https://api.github.com/users/${github.com/poornimapoorni312-afk/MERN_Stu_FebMay26Mys}`);
    const data = await res.json();

    statsContainer.innerHTML = `
      <div class="bg-white p-6 rounded-xl shadow-lg text-center">
        <h3 class="text-xl font-bold mb-2">GitHub Stats</h3>
        <p>Repos: ${data.public_repos}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
      </div>
    `;
  } catch (err) {
    console.log("GitHub stats error", err);
  }
}