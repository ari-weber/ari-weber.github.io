$(window).scroll(QuIsInView);

var QuHasBeenScrolled = false;
var QuWindowHeight;

gsap.registerPlugin(TextPlugin);

let url = "https://quotes.rest/qod?language=en";
const box = document.getElementById("quoteBox");
const footer = document.getElementById("footer")
var quoteText = "";

fetch(url, {
    method: "GET", // default is get
    headers: {     // set headers easily
    "Accept": "application/json",
  },
}).then((res) => {
  return res.json()
}).then((json) => {
  console.log(json);
  let text = "Quote of the Day: " + json.contents.quotes[0].quote + " - " + json.contents.quotes[0].author;
  console.log(text);
  box.innerText = "";
  quoteText = String(text);
});

function typeQuote(){
  let text = String(quoteText);
  gsap.to(box, {
    duration: 1,
    text: {
      value: text
    }
  });
}

$( document ).ready(function() {
  console.log( "ready!" );
});

function QuIsInView(){
  var point = $("#QuScrollPoint");
  if(isScrolledIntoView(point) && !QuHasBeenScrolled){
      QuHasBeenScrolled = true;
      typeQuote();
      console.log("SCROLLED IN");
  }
}