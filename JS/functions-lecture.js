// The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. Parenthesis with zero or more parameters
// 4. If there is more than one parameter, the list is comma seperated
// 5. Curly braces contain the function body
// 6. The function body contains the code that runs when the function is envoked
// 7. [Optional but common] return statement
function sayHello(greeting, name) {
    return `${greeting}, ${name}`;
}

function localOrGlobal(){
    let number = 20;
}
console.log(number);
// Here number has local scope so it will not work

let number = 20;
// Function declarations
function localOrGlobal(){
    let number = 10;
    console.log(number);
}
localOrGlobal();
console.log(number);

// Function expression
// function expressions are not hoisted, so this will not work

const bark = function() {
    console.log("Woof!");
}
// function declaration
// function declarations are hoisted, so this will work:

yap();

function yap(){
    console.log("Yip yap");
}

add = function(num1, num2){
    return num1 + num2;
}
// function declaration
function add(num1, num2){
    return num1 + num2;
}
// function expression
const add = function(num1, num2){
    return num1 + num2;
}

// arrow function -- if it only returns something, you dont need a return keyword
const add = (num1, num2) => num1 + num2;

// If there is only one parameter, you dont need parentheses around the parameter
const addTen = number => number + 10;

// If there are no parameters, you use empty parenthesis
const helloWorld = () => "Hello World";

