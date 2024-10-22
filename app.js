let difficulty = prompt("Choose a difficulty: easy, medium, hard");

let randomNum = 0;
let maxTries = 0;
let maxNumber = 0;
let attempts = [];

function rand(difficulty) {
  if (difficulty === "easy") {
    maxTries = 7;
    maxNumber = 20;
  } else if (difficulty === "medium") {
    maxTries = 6;
    maxNumber = 50;
  } else if (difficulty === "hard") {
    maxTries = 2;
    maxNumber = 100;
  }
  return (randomNum = Math.floor(Math.random() * 20) + 1);
}

rand(difficulty);
console.log(randomNum);

const guessForm = document.getElementById("guess-form");
const feedback = document.getElementById("feedback");
const attemptsList = document.getElementById("attempts-list");
let attemptsCount = 0;

function updateAttemptsList(guess) {
  const li = document.createElement("li");
  li.textContent = `Attempt #${attemptsCount}: ${guess}`;
  attemptsList.appendChild(li);
}

guessForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const userGuess = parseInt(document.getElementById("guess").value);
  attempts.push(userGuess);
  attemptsCount++;

  if (attemptsCount > maxTries) {
    feedback.textContent = `You lose! The number was ${randomNum}`;
    guessForm.querySelector("button").disabled = true;
  } else if (userGuess === randomNum) {
    feedback.textContent = `You win! The number was ${randomNum}`;
    feedback.classList.add("win");
    guessForm.querySelector("button").disabled = true;
  } else if (userGuess < randomNum) {
    feedback.textContent = "Go higher";
  } else {
    feedback.textContent = "Go lower";
  }

  updateAttemptsList(userGuess);
});
