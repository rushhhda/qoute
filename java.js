let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let container = document.querySelector("#container");

changeQuote = () => {
  num = Math.floor(Math.random() * quote.length);
  text.innerText = quote[num];
};
btn.addEventListener("click", changeQuote);
