function show(section) {
  const content = document.getElementById("content");

  // fade-out / fade-in du contenu
  content.style.opacity = 0;
  setTimeout(() => {
    content.innerHTML = "Vous êtes dans : " + section;
    content.style.opacity = 1;
  }, 300);

  // Réorganisation aléatoire des mèches
  const strands = document.querySelectorAll(".strand");
  strands.forEach((s) => (s.style.order = Math.floor(Math.random() * 10)));

  // La mèche cliquée passe devant
  document.querySelector(`.strand[onclick="show('${section}')"]`).style.order =
    -1;
}
