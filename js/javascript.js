//On récuère le bouton:
monBouttonTop = document.getElementById("monBoutonTop");

// Quand l'utilisateur descend de 20px on montre le bouton
window.onscroll = function() {scrollFonction()};

function scrollFonction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    monBouttonTop.style.display = "block";
  } else {
    monBouttonTop.style.display = "none";
  }
}

// Quand le bouton est cliqué on remonte
function topFonction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}