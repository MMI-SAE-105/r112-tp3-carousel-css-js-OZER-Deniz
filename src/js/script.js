// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {

prevButton.addEventListener("click", () => {
    scrollBy({ 
        left: +260, behavior: "smooth" 
    })});


nextButton.addEventListener("click", () => {
    scrollBy({
        left: +260, behavior : "smooth"
    })});
};

const premierItem = document.querySelector(".carousel__item");
scrollAmout = 981;
