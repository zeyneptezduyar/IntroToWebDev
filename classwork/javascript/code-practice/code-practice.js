
var rangeFun = document.forms["rangeFun"];
var startNum = document.getElementById("startNum");
var endNum = document.getElementById("endNum");
var stepNum = document.getElementById("stepNum");
var results = document.getElementById("results");
var textResult = document.getElementById("textResult");

var startDisplay = document.getElementById("startDisplay");
var endDisplay = document.getElementById("endDisplay");
var stepDisplay = document.getElementById("stepDisplay");


function validate(){
    rangeFun.className = "needs-validation";

    var start = parseInt(startNum.value);
    var end = parseInt(endNum.value);
    var step = parseInt(stepNum.value);

    if (!rangeFun.checkValidity()) {
        rangeFun.className = "was-validated";
        return false;
    }


    startDisplay.innerText = start;
    endDisplay.innerText = end;
    stepDisplay.innerText = step;

    textResult.style.display = "block";

    for (var i = start; i < end; i += step) {
        if (i % 2 == 0) {
            results.innerText = results.innerText + "\n" + i;
        }
    }
    
    return false;
}
