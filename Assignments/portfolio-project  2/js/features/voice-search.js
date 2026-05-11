// js/features/voice-search.js

function initVoiceSearch() {
  const btn = document.getElementById("voice-search");
  const input = document.getElementById("project-search");

  if (!btn || !input) return;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.log("Voice search not supported");
    btn.textContent = "❌";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.interimResults = false;

  // 🔍 Find best matching project
  function findBestMatch(query) {
    query = query.toLowerCase();

    let bestMatch = null;

    for (let project of projectsData) {
      const text = (
        project.name +
        " " +
        project.category +
        " " +
        project.description +
        " " +
        project.technologies.join(" ")
      ).toLowerCase();

      if (text.includes(query)) {
        bestMatch = project;
        break; // stop at first good match
      }
    }

    return bestMatch;
  }

  btn.addEventListener("click", () => {
    recognition.start();
    btn.textContent = "🎙️";
    btn.classList.add("animate-pulse");
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript
      .toLowerCase()
      .trim();

    console.log("Voice:", transcript);

    input.value = transcript;

    const match = findBestMatch(transcript);

    if (match) {
      // ✅ Show only matched project
      renderProject([match]);

      // ✅ Auto-click after render
      setTimeout(() => {
        const cards = document.querySelectorAll("#projects-container > div");

        cards.forEach((card) => {
          if (
            card.innerText
              .toLowerCase()
              .includes(match.name.toLowerCase())
          ) {
            card.click(); // trigger your existing click event
          }
        });
      }, 200);
    } else {
      // ❌ No match
      renderProject([]);
    }

    btn.textContent = "🎤";
    btn.classList.remove("animate-pulse");
  };

  recognition.onerror = () => {
    btn.textContent = "🎤";
    btn.classList.remove("animate-pulse");
  };

  recognition.onend = () => {
    btn.textContent = "🎤";
    btn.classList.remove("animate-pulse");
  };
}

document.addEventListener("DOMContentLoaded", initVoiceSearch);