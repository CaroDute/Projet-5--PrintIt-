let slides = [
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


// Variables //

let arrowImgLeft = document.querySelector(".arrow_left");
let arrowImgRight = document.querySelector(".arrow_right");
let dotSelected = document.querySelector(".dot_selected")
let dots = document.querySelector(".dots")


// Interaction avec les flèches //

arrowImgLeft.addEventListener("click",() => {
	alert("c'est ok à gauche")
})


arrowImgRight.addEventListener("click", () => {
	alert("c'est ok à droite")
}) 

// Ajout des bullet points //

// Création dans le HTML des dots //
let dot = document.createElement("span")


// PLacement de dot dans la div dots //
dots.appendChild(dot)


// Application du style CSS des dots //
dot.classList.add("dot")

