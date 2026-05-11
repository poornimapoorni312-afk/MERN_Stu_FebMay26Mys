function initCopyEmail() {
  const email = "your@email.com";
  const btn = document.getElementById("copy-email");

  if (!btn) return;

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(email);
    btn.textContent = "Copied!";
  });
}