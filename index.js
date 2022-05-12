var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random num gen
var randomDiceImage = "dice" + randomNumber1 + ".png"; //
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber2 + ".png";
//var randomImageSource2 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1);
if (randomNumber1 === 6) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
} else if (randomNumber2 === 6) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
} else {
    document.querySelector("h1").innerHTML = " BOTH FAILED";
}