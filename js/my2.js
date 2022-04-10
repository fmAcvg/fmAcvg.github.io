let section = document.getElementsByClassName('.sec');
console.log(section)
let menu = document.querySelectorAll("#sidenav span");
window.onscroll = () => {
    section.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        console.log(top)
        let id = i.getAttribute('id');
        if (top >= offset && top < offset + height) {
            menu.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });
};
