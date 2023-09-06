const myJoke = document.getElementById("quote");
const myButton = document.getElementById("my-btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";  


  let getQuote = () => {
    fetch(url)
    .then(data => data.json())
    .then(joke => {
        myJoke.innerText = `${joke.joke}`
    })
  }
  getQuote();
  myButton.addEventListener("click", getQuote);

