document.addEventListener('DOMContentLoaded', function(event){
    document.querySelector('body').style.opacity = -10;
    setTimeout(() => {
        document.querySelector('body').style.opacity = 1;
    }, 1);
})

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }