"use strict";
//Initial values
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let widthHr = 100;
let highscore = 0;
//Selectors
const guess_Selector = document.querySelector(".guess");
const message_Selector = document.querySelector(".message");
const check_Selector = document.querySelector(".check");
const body_Selector = document.querySelector("body");
const number_Selector = document.querySelector(".number");
const highscore_Selector = document.querySelector(".highscore");
const score_Selector = document.querySelector(".score");
const hr_Selector = document.querySelector(".hr-above");

//Enter or click to start
guess_Selector.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    check_Selector.click();
  }
});
//Game start---------------
check_Selector.addEventListener("click", function () {
  //Animation for message
  message_Selector.style.color = "aqua";

  setTimeout(() => {
    message_Selector.style.color = "white";
  }, 300);

  //Input guess
  const guess = Number(guess_Selector.value);
  //When there is NO INPUT
  if (!guess) {
    message_Selector.textContent = " 😎 Not A Number";
  }
  //When players WIN
  else if (guess === secretNumber) {
    message_Selector.textContent = "🎉 Correct Number!";
    body_Selector.style.backgroundColor = "#6EBD62";
    number_Selector.style.width = "30rem";
    number_Selector.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscore_Selector.textContent = highscore;
    }
  }
  //When the guess is TOO HIGH
  else if (guess > secretNumber) {
    if (score > 1) {
      message_Selector.textContent = "🐱‍🚀 Too High!";
      score--;
      widthHr = widthHr - 5;
      hr_Selector.style.width = `${widthHr}%`;
      score_Selector.textContent = score;
    } else {
      message_Selector.textContent = "🥲 You Lost The Game!";
      score_Selector.textContent = 0;
      widthHr = 0;
      hr_Selector.style.width = `${widthHr}%`;
      body_Selector.style.backgroundColor = "#6F21FD";
      number_Selector.textContent = secretNumber;
    }
    //When the guess is TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      message_Selector.textContent = "🐟 Too Low!";
      score--;
      widthHr = widthHr - 5;
      hr_Selector.style.width = `${widthHr}%`;
      score_Selector.textContent = score;
    } else {
      message_Selector.textContent = "🥲 You Lost The Game!";
      score_Selector.textContent = 0;
      widthHr = 0;
      hr_Selector.style.width = `${widthHr}%`;
      body_Selector.style.backgroundColor = "#6F21FD";
      number_Selector.textContent = secretNumber;
    }
  }
});
//Clear Button
document.querySelector(".clear").addEventListener("click", function () {
  guess_Selector.value = "";
  guess_Selector.focus();
});

//Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message_Selector.textContent = "Start guessing...";
  score_Selector.textContent = score;
  number_Selector.textContent = "?";
  guess_Selector.value = "";
  body_Selector.style.backgroundColor = "#222";
  number_Selector.style.width = "15rem";
  widthHr = 100;
  hr_Selector.style.width = `${widthHr}%`;
  guess_Selector.focus();
});
