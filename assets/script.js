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

// → Fonction d'initialisation du carrousel
function initCarousel() {
	// → 0. Protection si tableau vide (évite une erreur si `slides` est vide)
	if (!slides.length) {
		console.warn("Le tableau slides est vide !");
		return; // → arrête juste la fonction, pas le script global
	}

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
		bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // → mise à jour image
		bannerImg.alt = slides[index].tagLine.replace(/<[^>]*>?/gm, ''); // → ajout d'un alt dynamique 
		bannerText.innerHTML = slides[index].tagLine; // → mise à jour texte

		// → gestion dots
		dots.forEach(dot => dot.classList.remove('dot_selected'));  // → désélectionne tous
		dots[index].classList.add('dot_selected');                  // → sélectionne dot actuel
	}

	// → Initialisation du carrousel au chargement
	updateBanner(currentIndex);
	
// → 5. Flèche droite (navigation avec modulo)
	arrowRight.addEventListener('click', () => {
		console.log("Flèche droite cliquée");   // → Affiché dans la console
		currentIndex = (currentIndex + 1) % slides.length; // → passe à la suivante + revient à 0 automatiquement)
		updateBanner(currentIndex);            // → (mise à jour carrousel)
	});

// → 5b. Flèche gauche (navigation avec modulo)
	arrowLeft.addEventListener('click', () => {
	    console.log("Flèche gauche cliquée");  // → Affiché dans la console
		currentIndex = (currentIndex - 1 + slides.length) % slides.length; // → passe à la précédente + revient à la fin automatiquement
		updateBanner(currentIndex);            // → (mise à jour carrousel)
	});
}
// → Lancement du carrousel
initCarousel();