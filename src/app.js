/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let simbolo = ["♣", "♥", "♦", "♠"];
  let numero = [
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

  let simboloIndex = Math.floor(Math.random() * simbolo.length);
  let numeroInd = Math.floor(Math.random() * numero.length);
  document.querySelector(".simbolo1").append(simbolo[simboloIndex]);
  document.querySelector(".numero").append(numero[numeroInd]);
  document.querySelector(".simbolo2").append(simbolo[simboloIndex]);

  if (simbolo[simboloIndex] === "♣" || simbolo[simboloIndex] === "♥") {
    let color1 = document.querySelector(".simbolo1");
    let color2 = document.querySelector(".simbolo2");
    //let color3 = document.querySelector(".numero");
    color1.style.color = "red";
    color2.style.color = "red";
    //color3.style.color = "red";
  }
};
