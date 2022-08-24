"use strict";

/* ########################################################################## */
// let flavor = prompt("Welcome to Codeup ice cream. What flavor do you want?");
//
// flavor = flavor.toLowerCase();

// if (flavor === "chocolate") {
//     alert("one chocolate coming right up!");
// } else if (flavor === "vanilla"){
// } else {
//     alert("we do not have that flavor. Sorry! :(");
// }

// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor.  Sorry! :(");
//         break;
// }

// let decision = confirm("Are you sure you want to close this page?");
// alert(decision);

// if (decision) {
//     alert("OK, closing the page.");
// } else {
//     alert("OK, keeping the page open.");
// }

// (decision)?alert("Closing the page"):alert("Keeping page open");

// let number = prompt("Enter a number");

// function divisibleByFive(number) {
//     if(number % 5 === 0){
//         alert("That number is divisible by 5");
//     } else {
//         alert("That number is not divisible by 5");
//     }
// }

// function divisibleByFive(number){
//     alert(number % 5 === 0 ? "That number is divisible by 5": "That number is not divisible by 5");
// }
//
// divisibleByFive(prompt("Enter a number"));

// function alertMVPCustomer(purchaseTotal){
//     if (purchaseTotal > 1000){
//         alert("MVP!")
//     }
// }
//
// alertMVPCustomer(1001);

// function isMVP(purchaseTotal){
//     return purchaseTotal > 1000;
// }
//
// let customer1purchase = 1001;
//
// if (isMVP(customer1purchase)){
//     alert("MVP!")
// }



/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// color = color.toLowerCase();
//
// function analyzeColor(color) {
//     if (color === red) {
//         return "Blood is red";
//     } else if (color === blue) {
//         return "The ocean is blue";
//     } else if (color === green) {
//         return "The grass is green";
//     } else {
//         return "I dont know that color...";
//     }
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let color = prompt("what is your favourite color?");
//
// color = color.toLowerCase();
//
// switch (color) {
//     case("blue"):
//         alert("The ocean is my favorite "+ color);
//         break;
//     case("red"):
//         alert("Blood is my favorite "+ color);
//         break;
//     case("green"):
//         alert("Grass is my favorite "+ color);
//         break;
//     case("black"):
//         alert(color + " always reminds me of death...");
//         break;
//     case("white"):
//         alert(color + " reminds me of good");
//         break;
//     default:
//         alert("I hate that color, don't say it again!");
//         break;
// }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var luckyNumber = Math.floor(Math.random() * 5)
function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber === 0){
        return totalAmount;
    } else if (luckyNumber === 1){
        let discounted1 = totalAmount * .10;
        return totalAmount - discounted1;
    } else if (luckyNumber === 2){
        let discounted2 = totalAmount * .25;
        return totalAmount - discounted2;
    } else if (luckyNumber === 3){
        let discounted3 = totalAmount * .35;
        return totalAmount - discounted3;
    } else if (luckyNumber === 4){
        let discounted4 = totalAmount * .50;
        return totalAmount - discounted4;
    } else if (luckyNumber === 5){
        console.log("You get it free!");
    }
}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log("Your lucky number is " + luckyNumber);
let billPrompt = (prompt("What is your total bill amount?"));
alert("Your lucky number was " + luckyNumber + '/n' +
"your price before discount was $" + billPrompt + '/n' +
"your price after discount is $" + calculateTotal(luckyNumber, billPrompt ));

if (luckyNumber === 0){
    let noDiscount = billPrompt * 1;
    console.log(billPrompt);
} else if (luckyNumber === 1) {
    let oneDiscount = billPrompt * .10;
    console.log(billPrompt - oneDiscount);
} else if (luckyNumber === 2) {
    let twoDiscount = billPrompt * .25;
    console.log(billPrompt - twoDiscount);
} else if(luckyNumber === 3) {
    let threeDiscount = billPrompt * .35;
    console.log(billPrompt - threeDiscount);
} else if (luckyNumber === 4) {
    let fourDiscount = billPrompt * .50;
    console.log(billPrompt - fourDiscount);
} else if (luckyNumber === 5) {
    let fiveDiscount = billPrompt * 0;
    console.log("You get it free!");
}




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function isNumber(value) {
    return !(isNaN(value) || typeof value === "boolean");
}
function oddOrEven(number){
    return number % 2 === 0 ? number + " is even" : number + " is odd";
}
function numberPlus100(number){
    return number.toString() + " plus 100 equals " + (number + 100);
}
function negativeOrPositive(number){
    return number < 0 ? number + " is a negative number. " : number + " is a positive number.";
}
function getNumber(){
    if (confirm("Do you want to enter a number?")){
        return parseFloat(prompt("Enter a number"));
    }
}



let wantsToEnterNum = confirm("Would you like to enter a number?");
if (wantsToEnterNum) {
    let userNumber = parseFloat(prompt("Enter your number?"));
    if (isNumber(userNumber)) {
        alert(oddOrEven(userNumber));
        alert(numberPlus100(userNumber));
        alert(negativeOrPositive(userNumber));
    } else {
        alert("Incorrect input data type");
    }
}
    function analyzeNumber(number){
        if (number === undefined){
            return false;
        }

analyzeNumber(getNumber());

console.log(getNumber())
    }


