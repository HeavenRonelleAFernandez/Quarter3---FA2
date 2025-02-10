function result(text) {
    document.getElementById("result").innerHTML = text;
}

function addition(num1, num2) {
    var sum = num1 + num2;
    result("The sum of " + num1 + " and " + num2 + " is " + sum);
}

function subtraction(num1, num2) {
    var difference = num1 - num2;
    result("The difference of " + num1 + " and " + num2 + " is " + difference);
}

function multiplication(num1, num2) {
    var product = num1 * num2;
    result("The product of " + num1 + " and " + num2 + " is " + product);
}

function division(num1, num2) {
    if (num2 !== 0) {
        var quotient = num1 / num2;
        result("The quotient of " + num1 + " and " + num2 + " is " + quotient);
    } else {
        result("Cannot divide by zero.");
    }
}

function modulus(num1, num2) {
    var remainder = num1 % num2;
    result("The modulus of " + num1 + " and " + num2 + " is " + remainder);
}