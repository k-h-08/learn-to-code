// Local storage tracking and greeting
window.addEventListener("DOMContentLoaded", () => {
  const progressDisplay = document.getElementById("progressDisplay");
  let lastVisited = localStorage.getItem("lastVisitedLesson");

  if (lastVisited && progressDisplay) {
    progressDisplay.innerHTML = `You last visited: <strong>${lastVisited}</strong>`;
  }
});

// On each lesson page, add this to set progress:
// localStorage.setItem("lastVisitedLesson", "Intro to HTML");
