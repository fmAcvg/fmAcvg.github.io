function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 900
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("#sidenav span");

window.onscroll = () => {
    section.forEach((i) => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        let id = i.getAttribute("id");

        if (top >= offset && top < offset + height) {
            menu.forEach((link) => {
                link.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reveals2 = document.querySelectorAll(".reveal2");
    var revealstop = document.querySelectorAll(".revealtop");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            reveals2[i].classList.add("active");
            revealstop[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
            reveals2[i].classList.remove("active");
            revealstop[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal()


