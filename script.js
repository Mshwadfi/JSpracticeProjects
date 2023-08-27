"use strict";

let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("no number");
  } else {
    if (guess === secretNum) {
      displayMessage("correct Number");
      document.querySelector(".number").textContent = secretNum;

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      highScore = Math.max(highScore, score);
      document.querySelector(".highscore").textContent = highScore;
    } else {
      if (score > 1) {
        displayMessage(guess > secretNum ? "Too High" : "Too Low");
        // score--;
        document.querySelector(".score").textContent = --score;
      } else {
        displayMessage("you lost");
        score = 0;
        document.querySelector(".score").textContent = score;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;
  displayMessage("start..");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
