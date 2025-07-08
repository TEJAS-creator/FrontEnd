const show = document.getElementsByClassName("show")[0]; // get the first element

function display() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(i => i.json())
    .then(joke => {
      const jokeText = `${joke.setup} - ${joke.punchline}`;
      console.log(jokeText);
      show.innerHTML = jokeText;
    })
    .catch(error => {
      show.innerHTML = "Oops! Failed to fetch a joke.";
    });
}
