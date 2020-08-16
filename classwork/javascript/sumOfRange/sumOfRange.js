
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;
var newElement = prompt("Enter a number of your choice: ");

// explicitly telling JS to interpret the value entered by the user as an integer
newElement = parseInt(newElement);

testArray.push(newElement);

for (var position = 0; position < testArray.length; position++) {
    sum += testArray[position];
}

console.log("The sum of " + testArray + " is: " + sum);





/*  ASKING USER TO INPUT 5 NUMBERS TO ADD

var inputSum = 0;
for (var i =0; i <= 4; i++){
    var newInputElement = prompt("Enter a number of your choice: ");
    newInputElement = parseInt(newInputElement);
    inputSum += newInputElement;
}

Console.log("The sum of the values entered is: " + inputSum);

*/