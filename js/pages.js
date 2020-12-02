// Page number
let pageNumber = 0

// Page content
// From https://www.hypable.com/the-good-place-quotes/
const pages = [
    {
        heading: "Eleanor Shellstrop",
        copy: "We do nothing. We hope that our early successes make up for the embarrassing mess we’ve become. Like Facebook. Or America.",
        background: "#78C9ED",
        circle: "#007DC4"
    },
    {
        heading: "Jason Mendoza",
        copy: "When something dope comes along, you gotta lock it down! If you’re always frozen in fear and taking too long to figure out what to do, you’ll miss your opportunity.",
        background: "#FC8776",
        circle: "#C31E08"
    },
    {
        heading: "Michael",
        copy: "If soulmates do exist, they’re not found. They’re made.",
        background: "#7AE4AE",
        circle: "#02A341"
    },
    {
        heading: "Chidi Anagonye",
        copy: "Here’s an idea. What if we don’t worry about whatever comes next?",
        background: "#F3CF99",
        circle: "#C2802A"
    },
    {
        heading: "Janet",
        copy: "But since nothing seems to make sense, when you find something or someone that does, it’s euphoria.",
        background: "#E2B0DA",
        circle: "#8D4982"
    },
    {
        heading: "Tahani Al-Jamil",
        copy: "I would say I outdid myself, but I’m always this good. So I simply did myself.",
        background: "#D9D393",
        circle: "#C6B304"
    }
]

// Pick relevant tags 
const prevTag = document.querySelector("footer img.prev")
const nextTag = document.querySelector("footer img.next")
const randomTag = document.querySelector("footer img.random")
const headingTag = document.querySelector("h1")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

// Functions for clicking buttons 
const next = function () {
    if (pageNumber < (pages.length - 1)) {
        pageNumber++;
    } else {
        pageNumber = 0;
    }
    updateSection(pageNumber);
}

const previous = function () {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        pageNumber = (pages.length - 1);
    }
    updateSection(pageNumber);
}

const random = function () {
    let newPageNum = getRandomNum();
    while (newPageNum == pageNumber) {
        newPageNum = getRandomNum();
    }
        pageNumber = newPageNum;
        updateSection(pageNumber);
}

const getRandomNum = function () {
    let randomNum = Math.floor(Math.random() * (pages.length ));
    // console.log(randomNum)
    return randomNum;
}

const updateSection = function (pageNumber) {
    document.getElementById("promo").style.display = "none";
    headingTag.innerHTML = pages[pageNumber].heading;
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}

prevTag.addEventListener("click", function () {
    previous();
})

nextTag.addEventListener("click", function () {
    next();
})

randomTag.addEventListener("click", function () {
    random();
})


// Functions for pressing arrows on keyboard
document.addEventListener("keyup", function (event) {
    console.log(event)
    if (event.key === "ArrowRight") {
        next();
    } else if (event.key === "ArrowLeft") {
        previous();
    } else if (event.key === " ") {
        random();
    }
})