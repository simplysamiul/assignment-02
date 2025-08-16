// for addition
function addition(a, b) {
    return (a + b)
};

// for subtraction
function subtraction(a, b) {
    return (a - b);
};

// for multiplication
function multiplication(a, b) {
    return (a * b)
};

// for division
function division(a, b) {
    return (a / b);
};


// calculate function
function calculator(operation, firstDigit , secondDigit ) {
    
    // convert uppercase to lowercase
    const operationType = operation.toLowerCase();
    
    if (operationType === "add" || operationType === "subtract" || operationType === "multiply" || operationType === "divide") {
        // console.log(operationType, firstDigit, secondDigit)
        // for addition
        if (operationType === "add") { return addition(firstDigit, secondDigit) }
        // for subtraction
        else if (operationType === "subtract") { return subtraction(firstDigit, secondDigit) }
        // for multipication
        else if (operationType === "multiply") { return multiplication(firstDigit, secondDigit) }
        // for division
        else if (operationType === "divide") {
            if (firstDigit > 0 && secondDigit > 0) {
                return division(firstDigit, secondDigit);
            } else {
                return "Error: Division by zero is not allowed"
            }
        }
    } else {
        return "Error: Invalid operation"
    }
}


console.log(calculator("add", 10, 5));

console.log(calculator("subtract", 10, 5));

console.log(calculator("multiply", 4, 3));

console.log(calculator("divide", 20, 4));

console.log(calculator("divide", 10, 0));

console.log(calculator("invalid", 5, 3));