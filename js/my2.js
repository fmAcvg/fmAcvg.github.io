"use strict";

const pages = document.getElementsByClassName("sec");
const navHeight = document.getElementById("nav").clientHeight;
const dots = document.getElementsByClassName("dot");

var active = 0;

window.addEventListener("scroll", function() {
    const offset = innerHeight / -2 + navHeight;
    for (let i = 0; i < pages.length; i ++) {
        if (scrollY < pages[i].offsetTop + pages[i].clientHeight + offset) {
            if (i !== active) {
                dots[active].classList.remove("active");
                dots[i].classList.add("active");

                active = i;
            }

            break;
        }
    }
});
