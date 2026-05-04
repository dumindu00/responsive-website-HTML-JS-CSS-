const images = document.querySelectorAll(".features-right img")
let currentIndex = 0

function changeImage() {
    images[currentIndex].classList.remove("active")

    currentIndex = (currentIndex + 1) % images.length

    images[currentIndex].classList.add('active')
}

if (images.length > 0) {
setInterval(changeImage, 3000)
}


const hamburger = document.getElementById("hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})