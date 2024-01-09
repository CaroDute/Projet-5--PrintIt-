let slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Variables //

// DOTS //
let dots = document.querySelector(".dots");
let dot = document.querySelector(".dot");

// IMG //

let arrowImgLeft = document.querySelector(".arrow_left")
let arrowImgRight = document.querySelector(".arrow_right")
let bannerImg = document.querySelector(".banner-img")
let bannerText = document.querySelector("#banner p")

let indexSlides = 0


function clickLeft () {
	indexSlides--
	if (indexSlides < 0){
		indexSlides = 3
	}
	updateImg()
}

function clickRight () {
	indexSlides++
	if (indexSlides >= slides.length){
		indexSlides = 0
	}
	updateImg()
}

function updateImg () {
	bannerImg.src = slides[indexSlides].image
	bannerText.innerHTML = slides[indexSlides].tagLine
	updateDots ()
}


arrowImgLeft.addEventListener ("click", clickLeft)
arrowImgRight.addEventListener ("click", clickRight)


// Boucle pour avoir autant de bullet point que d'image //
for (i = 0; i < slides.length; i++){

dot = document.createElement("span") // Création dans le HTML des dots //

dots.appendChild(dot) // PLacement de dot dans la div dots //

dot.classList.add("dot")// Application du style CSS des dots //

updateDots ()

}


function updateDots() {
    let dotsAll = document.querySelectorAll(".dot");

    for (let i = 0; i < dotsAll.length; i++) {
        if (i === indexSlides) {
            dotsAll[i].classList.add("dot_selected"); // Ajoute la classe dot_selected au bullet correspondant à l'image en cours
        } else {
            dotsAll[i].classList.remove("dot_selected"); // Supprime la classe dot_selected des autres bullets
        }
    }
}