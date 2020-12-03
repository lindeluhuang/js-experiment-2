const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

// when click toggle, toggle class of "open" on main tag
// and if it's open, say toggle tag say "closed" and vise versa
toggleTag.addEventListener("click", function () {
    mainTag.classList.toggle("open");

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="assets/close.svg"> Close`
    } else {
        toggleTag.innerHTML = `<img src="assets/menu.svg"> Menu`
    }
})

