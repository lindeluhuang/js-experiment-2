// pick all of the images, layer based off of z-index

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// keep track of 2 things: which slide talking about, z-index
let currentSlide = 0;
let z = 1;

// when click slide area, change slide based on z-index
slideArea.addEventListener("click", function () {
    currentSlide++;
    z++;
    if (currentSlide > images.length - 1) {
        currentSlide = 0
    }

    // remove animation from style for every image
    images.forEach(image => {
        image.style.animation = ""
    })

    // pick the right image
    images[currentSlide].style.zIndex = z;
    images[currentSlide].style.animation = "fade 0.5s"
})

// when put mouse over slide area, put all images in random place
slideArea.addEventListener("mouseenter", function() {
    images.forEach(image => {
        const x = 25 * Math.floor( Math.random() * 5 ) - 50;
        const y = 25 * Math.floor( Math.random() * 5 ) - 50;

        image.style.transform = `translate(${x}px,${y}px)`;
    })
})

// when I move my mouse away, put image back
slideArea.addEventListener("mouseleave", function () {
    images.forEach(image => {
        image.style.transform = "";
    })
})