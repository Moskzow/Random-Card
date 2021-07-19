/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let deck = [];
let colors = ["red", "black"];
let suits = ["♣", "♦", "♥", "♠"];
let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = () => {
  let randomColor = generateRandom(colors);
  let randomSuit = generateRandom(suits);
  let randomNumber = generateRandom(numbers);
  let card = document.querySelector("#card");

  card.style.height = "500px";
  card.style.width = "350px";
  card.style.borderRadius = "10%";
  card.style.backgroundColor = "white";
  card.style.border = "2px solid black";

  let suit = document.querySelector("#suit");

  suit.style.fontSize = "200px";

  let color = document.createTextNode(randomSuit);

  suit.appendChild(color);
  suit.style.color = randomColor;

  let number = document.querySelector("#number");

  number.style.fontSize = "200px";
  number.style.textalign = "center";

  let colorNumber = document.createTextNode(randomNumber);

  number.appendChild(colorNumber);
  number.style.color = randomColor;
};

let btn = document.createElement("BUTTON");

btn.style.borderRadius = "10%";
btn.style.fontSize = "20px";
btn.style.marginTop = "30px";
btn.style.width = "350px";
btn.innerText = "Create a new card";
btn.style.color = "black";
btn.addEventListener("click", () => {
  window.location.replace("");
});

document.body.appendChild(btn);

const generateRandom = item => {
  return item[Math.floor(Math.random() * item.length)];
};
