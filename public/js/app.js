const home = document.querySelectorAll('.home');
let t;
let move = 0;
home.forEach(element => {
    element.addEventListener("mouseover", function () {
        move = 0;
        clearInterval(t);
        t = setInterval(translateY, 1);
        const item = this;
        function translateY() {
            item.style.transform = `translateY(${move}px)`;
            move--;
            let check = item.getAttribute("style");
            if (check == "transform: translateY(-600px);") {
                move++;
            }
        }

    })
});
home.forEach(element => {
    element.addEventListener("mouseout", function () {
        clearInterval(t);
        t = setInterval(translateX, 1);
        const item = this;
        function translateX() {
            item.style.transform = `translateY(${move}px)`;
            move++;
            let check = item.getAttribute("style");
            if (check == "transform: translateY(0px);") {
                clearInterval(t);
            }
        }
    })
});