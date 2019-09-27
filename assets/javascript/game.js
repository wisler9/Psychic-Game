
var introQuestion = document.getElementById("intro-question");
var inputText = document.getElementById("inputText");
var winsText = document.getElementById("winsText");
var losesText = document.getElementById("losesText");
var guessesText = document.getElementById("guessesText");

// Initializing variables 
var wins = 0;
var loses = 0;
var counter = 0
var guesses = 10;
var collectionOfLetters = [];


// Initialize Letter Array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Function generates a random letter
function compGen() {
    var randomNumber = Math.floor((Math.random() * 26) + 0);
    var computerLetter = letters[randomNumber];
    return computerLetter;
}


let compLetter = compGen();


// onkeyup event
// console.log(compLetter);
document.onkeyup = function (event) {
    var pressedKey = event.key;
    console.log(compLetter)

    if (compLetter === pressedKey) {
        console.log("Yeah buddy, that's it!");
        wins++;
        counter++;
        guesses--;

        compLetter = compGen();
    } else if (guesses === 0) {
        guesses = 10;
        counter = 0;
        loses = 0;
        collectionOfLetters = [];
    }

    else {
        console.log("Try again!")
        loses++;
        counter++;
        guesses--
    }

    // var collectionOfLetters = [];
    collectionOfLetters.push(pressedKey);

    inputText.textContent = "You chose: " + collectionOfLetters;

    winsText.textContent = "Wins: " + wins;
    losesText.textContent = "Loses: " + loses;
    if (counter === 1) {
        guessesText.textContent = "You guessed " + counter + " time. You now have " + guesses + " guesses left."
    } else if (guesses === 1) {
        guessesText.textContent = "You guessed " + counter + " times. You now have " + guesses + " guess left."
    }
    else {
        guessesText.textContent = "You guessed " + counter + " times. You now have " + guesses + " guesses left."
    }
}
