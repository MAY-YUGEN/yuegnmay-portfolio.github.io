const backToTop = document.querySelector(".back-to-top");
const observerTarget = document.querySelector("header")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
});

observer.observe(observerTarget);

/*
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 900){
        backToTop.style.visibility = "visible";
    }else{
        backToTop.style.visibility = "hidden";
    }
});*/