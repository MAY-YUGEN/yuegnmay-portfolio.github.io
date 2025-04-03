// This file is used for back to top button

console.log(".js for back to top button is running.")

const backToTop = document.querySelector(".back-to-top");
const observerTarget = document.querySelector("header");

const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
        if (!entry.isIntersecting){
            backToTop.classList.add("show");
        }else{
            backToTop.classList.remove("show");
        }
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) { 
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});


observer.observe(observerTarget);
