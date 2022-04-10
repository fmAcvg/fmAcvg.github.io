let section = document.getElementsByClassName('sec');
let menu = document.getElementsByClassName("dot");

window.addEventListener("DOMContentLoaded", function() {
  console.log(section.length)
  Array.from(section).forEach(function(element) {
    console.log(element.offsetTop);
  });
});

window.onwheel = (event) => {
    let index = 0;
    for (let i = 0; i<section.length;i++){
        let element = section[i];
        let top = event.pageY - event.y;
        let offset = element.offsetTop - 150;
        let height = element.offsetHeight;
        if (i === 0 && top < offset) {
          Array.from(menu).forEach((link, j) => {
            if (j === i) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
          break;
        }
        if (top >= offset && top < offset + height) {
            Array.from(menu).forEach((link,j) => {
                link.classList.remove('active');

                if (j===i + 1){
                    link.classList.add("active");
                }
            });
        }

        index ++;
    }
};
