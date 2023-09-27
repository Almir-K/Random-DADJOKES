const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const container = document.querySelector(".container"); // Added container element

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;

  // Generate a random color and apply it to the container background
  const randomColor = getRandomColor();
  container.style.backgroundColor = randomColor;
}

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//USING.THEN
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   generateJoke();

//   function generateJoke() {
//     fetch("https://icanhazdadjoke.com/", config)
//       .then(res => res.json())
//       .then(data => {
//         jokeEl.innerHTML = data.joke;
//       });
//   }
// }
