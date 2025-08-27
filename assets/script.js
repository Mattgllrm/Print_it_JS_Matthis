const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// → 1. Sélection des éléments DOM
const arrowLeft = document.querySelector('.arrow_left');   // → flèche gauche
const arrowRight = document.querySelector('.arrow_right'); // → flèche droite
const dotsContainer = document.querySelector('.dots');     // → container pour les dots
const bannerImg = document.querySelector('.banner-img');   // → image principale
const bannerText = document.querySelector('#banner p');    // → texte sous l'image

// → 2. Création des dots dynamiques
slides.forEach((_, index) => {
	const dot = document.createElement('div');   // → créer un dot
	dot.classList.add('dot');                    // → ajout classe dot
	if (index === 0) {
		dot.classList.add('dot_selected');       // → premier dot actif
	}
	dotsContainer.appendChild(dot);              // → ajoute dot au container
});

// → 2b. Sélection des dots créés
const dots = document.querySelectorAll('.dot'); // → NodeList de tous les dots

// → 3. Index de la slide affichée
let currentIndex = 0;                           // → commence à 0 (slide 1)

// → 4. Fonction pour mettre à jour le carrousel
function updateBanner(index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // → change image
	bannerText.innerHTML = slides[index].tagLine;                       // → change texte

	// → gestion dots
	dots.forEach(dot => dot.classList.remove('dot_selected')); // → désélectionne tous
	dots[index].classList.add('dot_selected');                 // → sélectionne dot actuel
}

// → 5. Flèche droite
arrowRight.addEventListener('click', () => {
	currentIndex++;                        // → next slide
	if (currentIndex >= slides.length) {   // → si dernière slide
		currentIndex = 0;                  // → revenir à la première
	}
	updateBanner(currentIndex);            // → mise à jour carrousel
});

// → 5b. Flèche gauche
arrowLeft.addEventListener('click', () => {
	currentIndex--;                        // → slide précédente
	if (currentIndex < 0) {                // → si avant la première
		currentIndex = slides.length - 1;  // → aller à la dernière
	}
	updateBanner(currentIndex);            // → mise à jour carrousel
});