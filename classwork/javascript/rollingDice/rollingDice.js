
var numSides = prompt("How many sides the die will have?"); 
var throwTime = prompt("How many times do you want to throw this die?");

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < throwTime; i++){
    console.log(rollDice(numSides));
}