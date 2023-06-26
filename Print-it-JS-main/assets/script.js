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

let slideIndex= 0;
const banner = document.querySelector("#banner");
const bannerImage = banner.children.item(0);
const bannerTagLine = document.querySelector("#tagline")

let boutonGauche = document.getElementById("Boutongauche");
boutonGauche.addEventListener("click", () => {
	slideIndex-- ;
    if (slideIndex < 0) {
        slideIndex = slides.length -1;
    }
	displaySlide(slideIndex);
	console.log("Vous avez cliqué sur le bouton gauche")
});

let boutonDroit = document.getElementById("Boutondroit");
boutonDroit.addEventListener("click", () => {
	slideIndex++ ;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
	displaySlide(slideIndex);
	console.log("Vous avez cliqué sur le bouton droit")
});

function bulletPoint(slides) {
	for (let i = 0; i < slides.length; i++) {
		const slideDot = document.createElement("div");
		slideDot.classList.add("dot")
		const slideDots = document.querySelector(".dots");
		slideDots.appendChild(slideDot);
		console.log(i)
	}
	const dots = document.querySelectorAll(".dot");
	dots[0].classList.add("dot_selected");
}

bulletPoint(slides); 

function displaySlide(slideIndex) {
	const dots= document.querySelectorAll(".dot");
	for (let i = 0; i < slides.length; i++) {
		dots[i].classList.remove("dot_selected");
	}
	dots[slideIndex].classList.add("dot_selected");
	bannerImage.src = "./assets/images/slideshow/" + slides[slideIndex].image ;
    bannerTagLine.innerHTML = slides[slideIndex].tagLine ;
}