// Mouse events
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover",function() {
  hoverBox.textContent  = "Mouse is over me";
  hoverBox.style.backgroundColor = "lightYellow";
});

hoverBox.addEventListener("mouseout",function() {
    hoverBox.textContent  = "hover is over me";
    hoverBox.style.backgroundColor = "";
  });