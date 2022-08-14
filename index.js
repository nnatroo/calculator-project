var lengthOfNumbers = document.querySelectorAll(".number").length;
var lengthOfOperators = document.querySelectorAll(".operator").length;
var operand1 = "";
var operand2 = "";
var operator = "";


// Adding event listener to number buttons
for (var i = 0; i < lengthOfNumbers; i++) {
    document.querySelectorAll(".number")[i].addEventListener("click", numbInput);
}

// Adding event listener to C button -> calling clearInput function
document.querySelector("#c-button").addEventListener("click", clearInput);

// Adding event listener to operators
for (var i = 0; i < lengthOfOperators; i++) {
    document.querySelectorAll(".operator")[i].addEventListener("click", operatorClickHandler)
}

// Adding event listenet to equal button
document.querySelector(".equal-button").addEventListener("click", equalButtonHandler)

// Function used to clear input box
function clearInput() {
    document.querySelector(".input-text").innerHTML = "";
    clearSavedData();
}

// Show inputed numbers on input-box
function numbInput() {
        console.log(this.innerHTML);
        document.querySelector(".input-text").innerHTML += this.innerHTML;
}

function operatorClickHandler() {
    // console.log(this);
    // Save operand1 & save as Number 
    operand1 = Number(document.querySelector(".input-text").innerHTML);
    // console.log(operand1, typeof(operand1));

    // Save operator
    operator = this.innerHTML;
    console.log(operator);

    // Clear input box
    document.querySelector(".input-text").innerHTML = "";
}

function equalButtonHandler() {
    // Save operand2 
    operand2 = Number(document.querySelector(".input-text").innerHTML);
    // console.log(operand2);

    switch (operator) {
        case "+":
            compute("addition");
            break;
        case "-":
            compute("subtraction");
            break;
        case "*":
            compute("multiplication");
            break;

        case "/":
            compute("division");
            break;

        default:
            break;
    }

}

function clearSavedData() {
    operand1 = "";
    operand2 = "";
    operator = "";
}

function compute(operation) {
    if (operation == "addition") {
        var result = operand1 + operand2;
        // Show result on input box
        document.querySelector(".input-text").innerHTML = result;
        clearSavedData();
    } else if (operation == "subtraction") {
        var result = operand1 - operand2;
        // Show result on input box
        document.querySelector(".input-text").innerHTML = result;
        clearSavedData();

    } else if (operation == "multiplication") {
        var result = operand1 * operand2;
        // Show result on input box
        document.querySelector(".input-text").innerHTML = result;
        clearSavedData();

    } else if (operation == "division") {
        var result = operand1 / operand2;
        // Show result on input box
        document.querySelector(".input-text").innerHTML = result;
        clearSavedData();

    } else {
        console.log("Some Unexpected Error !")
    }
}