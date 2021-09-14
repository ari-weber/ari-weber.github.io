var windowHeight;
var leftIcon = document.getElementById("leftIcon");
var rightIcon = document.getElementById("rightIcon");
var grid = document.getElementById("grid");

document.addEventListener('DOMContentLoaded', function(event){
    setTimeout(() => {
        floatIn();
    }, 500);
})

function floatIn(){
    gsap.from("#leftIcon", {rotation: -90, x: -700, duration: 2});
    gsap.from("#rightIcon", {rotation: 90, x: 700, duration: 2});
}