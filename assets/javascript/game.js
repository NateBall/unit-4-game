


// Code for random max min with function
<button onclick="document.getElementById('demo').innerHTML = getRndInteger(19,120)">Click Me</button>

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




