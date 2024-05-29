function handleMenuclick(){
    var icon=document.querySelector("#nav-link");
    if(icon.style.display == "none"){
        icon.style.display="block";
    }
    else{
        icon.style.display="none";
    }
}

//slideshow
let index = 0;
let transitionDelay = 2000;
let slideContainer = document.querySelector(".slideshow");
let slides = slideContainer.querySelectorAll(".slide");
for (let slide of slides) {
    slide.style.transition = `all ${transitionDelay / 1000}s linear`;
}
showSlide(index);
function showSlide(slideNumber) {
    slides.forEach((slide, i) => {
        slide.style.display = i == slideNumber ? "block" : "none";
    });
    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

setInterval(() => showSlide(index), transitionDelay);
