// This is a roundabout way to create dice game
var randomNumber1 = Math.ceil(Math.random(0,6) * 6);
var randomNumber2 = Math.ceil(Math.random(0,6) * 6);

// Player 1 rolling dice
function p1DiceRoll() {
  if (randomNumber1 == 1) {
    document.querySelector(".player1 img").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber1 == 2) {
    document.querySelector(".player1 img").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber1 == 3) {
    document.querySelector(".player1 img").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber1 == 4) {
    document.querySelector(".player1 img").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber1 == 5) {
    document.querySelector(".player1 img").setAttribute("src", "images/dice5.png");
  }
  else {
    document.querySelector(".player1 img").setAttribute("src", "images/dice6.png");
  }
}

// Player 2 roling dice
function p2DiceRoll() {
  if (randomNumber2 == 1) {
    document.querySelector(".player2 img").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber2 == 2) {
    document.querySelector(".player2 img").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber2 == 3) {
    document.querySelector(".player2 img").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber2 == 4) {
    document.querySelector(".player2 img").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber2 == 5) {
    document.querySelector(".player2 img").setAttribute("src", "images/dice5.png");
  }
  else {
    document.querySelector(".player2 img").setAttribute("src", "images/dice6.png");
  }
}

p1DiceRoll();
p2DiceRoll();

// change title depending on result
function resultTitle() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  }
  else {
    document.querySelector("h1").textContent = "DRAW!";
  }

}

resultTitle();
