//scroll to fixed navabar

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("header");
    if (window.scrollY > 50) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

//menu-bar
const menubar = document.querySelector(".menu_bar")
const item = document.querySelector(".nav-item")
let value = false;

menubar.addEventListener("click", () => {
    value = !value;
    if (value === true) {

        item.classList.add("active")
    }
    else {
        item.classList.remove("active");
    }

    if (item.classList.contains("active")) {
        menubar.innerHTML = "X"
    }
    else {
        menubar.innerHTML = "&#9776;"
    }
})



let counter = 0;
let counter1 = 0;

autoScrolling();
const slides = document.querySelectorAll(".movie_frame .movie_container");
const next = document.querySelector(".right_side");
const prev = document.querySelector(".left_side");
const itemWidth = slides[0].offsetWidth + 78;
console.log(itemWidth)

next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

function slideNext() {
    counter = (counter + 1) % slides.length;
    updateSlidePosition();
}

function slidePrev() {
    counter = (counter - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * itemWidth}px)`;
    });
}


const slideNews = document.querySelectorAll(".slide");
const nextNews = document.querySelector(".nextnews");
const prevNews = document.querySelector(".prevnews");
const dots = document.querySelectorAll(".dot")

nextNews.addEventListener("click", slideNewsNext);
prevNews.addEventListener("click", slideNewsPrev);

function slideNewsNext() {
    counter1 = (counter1 + 1) % slideNews.length;
    updateSlideNewsPosition();
    indicators();
}

function slideNewsPrev() {
    counter1 = (counter1 - 1 + slideNews.length) % slideNews.length;
    updateSlideNewsPosition();
    indicators();
}

function updateSlideNewsPosition() {
    slideNews.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter1 * 100}%)`;
    });
}

function autoScrolling() {
    setInterval(() => {
        slideNewsNext();
    }, 3000);
}

function indicators() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[counter1].className += " active";
}