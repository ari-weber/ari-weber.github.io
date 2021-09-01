let url = "https://quotes.rest/qod?language=en";
const box = document.getElementById("quoteBox");

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
    box.innerHTML = text;
  });