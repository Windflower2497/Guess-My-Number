"use strict";
//Initial values
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let widthHr = 100;
let highscore = 0;
//Enter or click to start
document.querySelector(".guess").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".check").click();
  }
});
//Game start---------------
document.querySelector(".check").addEventListener("click", function () {
  //Animation for message
  document.querySelector(".message").style.color = "aqua";

  setTimeout(() => {
    document.querySelector(".message").style.color = "white";
  }, 300);

  //Input guess
  const guess = Number(document.querySelector(".guess").value);
  //When there is NO INPUT
  if (!guess) {
    document.querySelector(".message").textContent = " 😎 Not A Number";
  }
  //When players WIN
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#6EBD62";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //When the guess is TOO HIGH
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🐱‍🚀 Too High!";
      score--;
      widthHr = widthHr - 5;
      document.querySelector(".hr-above").style.width = `${widthHr}%`;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥲 You Lost The Game!";
      document.querySelector(".score").textContent = 0;
      widthHr = 0;
      document.querySelector(".hr-above").style.width = `${widthHr}%`;
      document.querySelector("body").style.backgroundColor = "#6F21FD";
      document.querySelector(".number").textContent = secretNumber;
    }
    //When the guess is TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🐟 Too Low!";
      score--;
      widthHr = widthHr - 5;
      document.querySelector(".hr-above").style.width = `${widthHr}%`;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥲 You Lost The Game!";
      document.querySelector(".score").textContent = 0;
      widthHr = 0;
      document.querySelector(".hr-above").style.width = `${widthHr}%`;
      document.querySelector("body").style.backgroundColor = "#6F21FD";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});
//Clear Button
document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();
});

//Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  widthHr = 100;
  document.querySelector(".hr-above").style.width = `${widthHr}%`;
  document.querySelector(".guess").focus();
});
