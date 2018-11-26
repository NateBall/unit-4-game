// Global Variables
// ===========================================================


// Math 
var userGuess = 0;
var compGuess = 0;
var totWins = 0;
var totLosses = 0;
var savedNum = Math.floor(Math.random() * 12) + 1;

// Gems
var pinkGem = 0;
var blueGem = 0;
var yellowGem = 0;
var greenGem = 0;


// Reset
// ========================================================= 
$("reset").click(function() {

    });



// Process
// =========================================================
startPlay ();



// Functions
// ========================================================
$(document).ready(function(){

    // jQuery methods go here...
    $("button").click(function(){
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    });

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



// Saves the number until reset is pressed
$(".colGem").click(function() {
    $("#scoreNum").html(savedNum);
  });

// Code for random max min with function
<button onclick="document.getElementById('compGuess').innerHTML = getRndInteger(19,120)">Click Me</button>

<button onclick="document.getElementById('pinkGem blueGem yellowGem greenGem').innerHTML = getRndInteger(1,12)"></button>






