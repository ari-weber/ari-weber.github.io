document.addEventListener('DOMContentLoaded', function(event){
    document.querySelector('body').style.opacity = -10;
    setTimeout(() => {
        document.querySelector('body').style.opacity = 1;
    }, 1);
})