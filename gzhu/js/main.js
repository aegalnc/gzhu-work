const slider = document.querySelector(".slider");
const imgs = document.getElementsByClassName("slider-img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const box_img = document.getElementById("box-img");
const box_btn = document.getElementById("box-btn");
const box = document.getElementsByClassName("box");

let counter = 0;
let lastCounter = 0
function carousel() {
    if(counter < 0) {
    counter = imgs.length - 1;
    } else if(counter > imgs.length - 1) {
    counter = 0;
    } 
    imgs[lastCounter].setAttribute("style", "opacity: 0; transition: opacity 1s ease-in-out;");
    imgs[counter].setAttribute("style", "opacity: 1; transition: opacity 1s ease-in-out;");     
}


prev.addEventListener("click", () => {
    lastCounter = counter;
    counter--;
    carousel();
})

next.addEventListener("click", () => {
    lastCounter = counter;
    counter++;
    carousel();
})

setInterval(() => {
    lastCounter = counter;
    counter++;
    carousel();
}, 5000);

box_btn.addEventListener("click", () => {
    box[0].style.display = "none";
})

const step = 1;
let derectionX = "right";
let derectionY = "down";
setInterval(move, 50);

function move() {
    if(box[0].offsetTop < 0) {
        derectionY = "down";
        console.log("1");
        console.log(box[0].offsetTop);
    }
    if(box[0].offsetTop > (window.innerHeight || document.documentElement.clientHeight) - box[0].offsetHeight) {
        derectionY = "up";
        console.log("2");
        console.log(box[0].offsetBottom);
    }
    if(box[0].offsetLeft < 0) {
        derectionX = "right";
        console.log("3");
        console.log(box[0].offsetRight);
    }
    if(box[0].offsetLeft > (window.innerWidth || document.documentElement.clientWidth) - box[0].offsetWidth) {
        derectionX = "left";
        console.log("4");
        console.log(box[0].offsetLeft);
    }
    if (derectionX == "right") {
        box[0].style.left = box[0].offsetLeft + step + "px";
        console.log(box[0].offsetLeft);
    } else if(derectionX == "left") {
        box[0].style.left = box[0].offsetLeft - step + "px";
        console.log("6");
    }
    if (derectionY == "down") {
        box[0].style.top = box[0].offsetTop + step + "px";
        console.log("7");
    } else if(derectionY == "up") {
        box[0].style.top = box[0].offsetTop - step + "px";
        console.log("8");
    }
}


