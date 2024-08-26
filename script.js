// script.js

// Sélectionner les éléments du DOM
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Ajouter un écouteur d'événements pour le clic sur le bouton hamburger
hamburger.addEventListener('click', () => {
    // Basculer l'affichage du menu de navigation en ajoutant/supprimant la classe 'open'
    navMenu.classList.toggle('open');
});
