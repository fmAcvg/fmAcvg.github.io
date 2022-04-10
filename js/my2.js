let section = document.getElementsByClassName('sec');
let menu = document.getElementsByClassName("dot");
window.onwheel = (event) => {
    let index = 0;
    for (let i = 0; i<section.length;i++){
        let element = section[i];
        let top = event.pageY - event.y;
        let offset = element.offsetTop - 150;

        let height = element.offsetHeight;
        if (top >= offset) {
            console.log(offset)
            Array.from(menu).forEach((link,j) => {
                link.classList.remove('active');

                if (j===i){
                    link.classList.add("active");
                }
            });
        }

        index ++;
    }
};
