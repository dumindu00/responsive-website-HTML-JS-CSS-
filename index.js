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










const openBtn = document.getElementById("openFormBtn");
const closeBtn = document.getElementById("closeFormBtn");
const modal = document.getElementById("formModal");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// close when clicking outside form
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});



const form = document.querySelector(".form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()


    const data = {
        fullname: document.querySelector("#fullName").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#number").value,
        message: document.querySelector("#message").value
    }

    const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (res.ok) {
        alert("Inquiry sent successfully!")
        form.reset()
    } else {
        alert("Something went wrong.")
    }
})