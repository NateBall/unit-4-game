// Global Variables
// ===========================================================


// Math 
var userGuess = 0;
var compGuess = Math.floor(Math.random() * 101) + 19;;
var totWins = 0;
var totLosses = 0;


// Gems
var pinkGem = Math.floor(Math.random() * 12) + 1;
var blueGem = Math.floor(Math.random() * 12) + 1;
var yellowGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;


// Functions
// ========================================================
$(document).ready(function(){
    // Computer's Guess
    $("#compGuess").text(compGuess);

    // buttons for gems

    $('#pinkGem').on('click', function(){
        userGuess = userGuess + pinkGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').text(userGuess);
    }); 

    $('#blueGem').on('click', function(){
        userGuess = userGuess + blueGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').text(userGuess);
    }); 

    $('#yellowGem').on('click', function(){
        userGuess = userGuess + yellowGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').text(userGuess);
    }); 

    $('#greenGem').on('click', function(){
        userGuess = userGuess + greenGem;
        console.log("New userGuess= " + userGuess);
        $('#userGuess').text(userGuess);
    }); 

    // Compares User versus Computer Score
    if (userGuess == compGuess){
        yay();
      }
      else if ( userGuess > compGuess){
        loser();
      } 
    
   

    // Reset
    
});












