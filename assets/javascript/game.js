// Global Variables
// ===========================================================


// Math 
var userGuess = 0;
var compGuess = Math.floor(Math.random() * 101) + 19;
var totWins = 0;
var totLosses = 0;


// Gems
var pinkGem = Math.floor(Math.random() * 12) + 1;
var blueGem = Math.floor(Math.random() * 12) + 1;
var yellowGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;


// Functions
// ========================================================
$(document).ready(function () {
    // Computer's Guess
    $("#compGuess").html(compGuess);

    // buttons for gems

    $('#pinkGem').on('click', function () {
        userGuess = userGuess + pinkGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').html(userGuess);
        winLoss();
    });

    $('#blueGem').on('click', function () {
        userGuess = userGuess + blueGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').html(userGuess);
        winLoss();
    });

    $('#yellowGem').on('click', function () {
        userGuess = userGuess + yellowGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').html(userGuess);
        winLoss();
    });

    $('#greenGem').on('click', function () {
        userGuess = userGuess + greenGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').html(userGuess);
        winLoss();
    });

    // Compares User versus Computer Score
    var winLoss = function() {
        if (userGuess === compGuess) {
            alert("Yay! You win!");
            // tot wins increase
            totWins++;
            $(".totalWins").html(totWins);
        }
        else if (userGuess > compGuess) {
            alert("Sorry! Try Again!");
            // tot losses increase
            totLosses++;
            $(".totalLosses").html(totLosses);
        }
    };



});

// Reset
// ===================================================
var reset = function() {
    userGuess = 0;
    compGuess = Math.floor(Math.random() * 101) + 19;
    pinkGem = Math.floor(Math.random() * 12) + 1;
    blueGem = Math.floor(Math.random() * 12) + 1;
    yellowGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
};

$('.playAgain').on('click', function () {
    console.log(compGuess, pinkGem);
    reset();
    $("#compGuess").text(compGuess);
    $('#userGuess').text("");
});










