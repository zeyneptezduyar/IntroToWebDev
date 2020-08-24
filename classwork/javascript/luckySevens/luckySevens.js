
var inputNumber = document.forms["inputNumber"];
var startingBet = document.getElementById("startingBet");

var horizline = document.getElementById("horizline");

var resultsJumbotron = document.getElementById("resultsJumbotron");
var resultTitle = document.getElementById("resultTitle");
var results = document.getElementById("results");

var startingBetDisplay = document.getElementById("startingBetDisplay");
var rollCountDisplay = document.getElementById("rollCountDisplay");
var highestAmountDisplay = document.getElementById("highestAmountDisplay");
var rollCountAtHighestDisplay = document.getElementById("rollCountAtHighestDisplay");


function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var total = dice1 + dice2;
    return total;
}

function validate() {
    inputNumber.className = "needs-validation";

    // checking the form's validity with the Constraint Validation API's checkValidity function
    if (!inputNumber.checkValidity()) {
        inputNumber.className = "was-validated";
        return false;
    }

    var start = parseInt(startingBet.value);

    if (start <= 0  || isNaN(start)) {
        alert("Starting bet must be bigger than 0 and must be a number");
        return false;
    }

    var gameMoney = start;
    var rollCount = 0;
    var highestAmount = 0;
    var rollCountAtHighest = 0;

    while (gameMoney >= 1) {
        rollCount += 1;
        var total = rollDice();
        if (total == 7) {
            gameMoney += 4;
        }else {
            gameMoney -= 1;
        }
        if (gameMoney > highestAmount) {
            highestAmount = gameMoney;
            rollCountAtHighest = rollCount;
        }
    }
    
    alert("Game Over");
    startingBetDisplay.innerText = "$" + start + ".00";
    rollCountDisplay.innerText = rollCount;
    highestAmountDisplay.innerText = "$" + highestAmount + ".00";
    rollCountAtHighestDisplay.innerText = rollCountAtHighest;

    horizline.style.display = "block";
    resultsJumbotron.style.display = "block";
    resultTitle.style.display = "block";

    results.style.display = "block";
    submitButton.innerText = "Again?";
    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}