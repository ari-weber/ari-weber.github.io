$(window).scroll(IsInView);

var HasBeenScrolled = false;
var windowHeight;

function floatIn(){
    gsap.from("#leftIcon", {rotation: -90, x: -600, duration: 2});
    gsap.from("#midIcon", {rotation: -900, opacity: -0/5, duration: 2});
    gsap.from("#rightIcon", {rotation: 90, x: 600, duration: 2});
}

$( document ).ready(function() {
    console.log( "ready!" );
});

function IsInView(){
    var point = $("#scrollPoint");
    if(isScrolledIntoView(point) && !HasBeenScrolled){
        HasBeenScrolled = true;
        floatIn();
        console.log("SCROLLED IN");
    }
}