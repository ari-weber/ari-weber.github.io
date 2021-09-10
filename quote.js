gsap.registerPlugin(TextPlugin);

let url = "https://quotes.rest/qod?language=en";
const box = document.getElementById("quoteBox");
const footer = document.getElementById("footer")

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
  setTimeout(() => {
    typeQuote(text);
  }, 1000);
});

function typeQuote(quoteText){
  let text =  String(quoteText);
  gsap.to(box, {
    duration: 1,
    text: {
      value: text
    }
  });
}