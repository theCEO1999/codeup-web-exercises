//write a function that accepts an array of numbers and returns its average.
// Bonus: if there are any nom numeric values in the array, return false.
// numeric strings should count as numeric values.
const isNumber = function(input){
    return !(isNaN(input) || typeof input === 'boolean' || input === null);
}
let array = [5, 10, 15];

function averageArray(array){

    let total = 0;
    for(let i = 0; i < array.length; i++){
        if (!isNumber(array[i])){return false;}
        total += array[i];
    }
    return total/array.length;
}
// write a function that accepts an array of strings and returns the longest string.
// if there are two strings of equal length it returns the one with the lowest index.
// Bonus: if there are any values that are not strings, return false.

let stringArray = ["Jabba", "Darth Maul", "Hondo"];

function longestString(arrayOfStrings){
    let longest = '';
    for (let i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
    }
    return longest;
}

//// Write a function, calculateTotalStudents, that returns the total number of students
// recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i].students;
    }
    return total;
}

let numericArray = [8, 10, 20]

function arraySum(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(arraySum(numericArray));

const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable.
// A neighborhood is desirable if the median home price is
// less than 300000, crime rates are low, and the total rating of schools is at least 24.

function neighborhoodDesirable(neighborhoodsObject) {
    let schoolRating = 0;
    for (let i = 0; i < neighborhoodsObject.schools.length; i++) {
        schoolRating += neighborhoodsObject.schools[i].rating;
    }
    return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low";
}




// Write a function called convertToObject that takes in a string that is the name of a class,
// and a number that is the number of students, and returns an object with the properties `class`
// and `students`
//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

const convertToObject = function(nameOfClass, numberOfStudents){
    return {
        class: nameOfClass,
        numberOfStudents: numberOfStudents
    }
}

console.log(convertToObject("intro to programming", 20));

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// whats the cost of each level? level * level * priceOfCan
// need a totalCost accumulator variable and some kind of level variable to keep track of what level im on
//and i need to keep looping until totalCost > bonus


//This function works
// function beeramid(bonus, price){
//     let totalCost = 0;
//     let levels = 0;
//     while (totalCost < bonus) {
//         totalCost += levels * levels * price;
//         if (totalCost + ((levels +1) ** 2 * price) > bonus){break;}
//         levels++;
//     }
//     return levels;
// }


//This function works better
function beeramid (bonus,price){
    let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
    let x = 0; //accumulator variable
    for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
        x = i; //match the accumulator to the number of levels
    }
    return x;
}
//
// // 2. Color Properties
// //
// // How does hexadecimal color coding work?
// //
// //     Why use CSS color names over hex values and vice versa?
// Hex codes can be more useful to a developer when a specific desired color is preferred.
//     Using defined colors such as "blue" may be dependent on the browser's definition of blue, ' +
// 'but a hex code will ensure the desired color is displayed regardless of browser definition.
//
// //     Why use rgb to define a CSS color vs. a hex value?
//
// //     What is the difference between 3 digit hex values and 6?
// 3 digit hex values are a simplified version of 6 digit hex values. Not all 6 digit hex values can be converted into a 3 digit. An example of what can be converted is when duplicate characters are present:
//     #FFCC00 => #FC0
// //
//     'background' and 'background-color' properties can produce the same output; why is this possible?
//  background actually is a shorthand for
//  background-color
//  background-image
//  background-position
//  background-repeat
//  background-attachment
//  background-clip
//  background-origin
//  background-size
// Thus, besides the background-color, using the background shorthand you could also add one or more values without repeating any other background-* property more than once.
// //
// //     What is the 'a' in rgba?
// <p> Alpha is used to adjust transparency.
//     The alpha is a number between 0.0 (fully transparent) and 1.0 ( fully opaque)</p>
// //
// //     What is the 'Digital Color Meter' on a Mac? How is the helpful?
// <p>The DigitalColor Meter is an application that comes installed with every Mac.
//     Its primary use is to locate a color on your screen and provide the values of that color.
//     Those colors can be provided as three different values such as RGB, Hexadecimal, and as a percentage.</p>
//     <h3>What are CSS gradients?</h3>
// <p>Gradients are CSS elements of the image data type that show a transition between two or more colors.
//     These transitions are shown as either linear or radial.
//     Because they are of the image data type, gradients can be used anywhere an image might be.
//     The most popular use for gradients would be in a background element.
//     A linear gradient is horizontal,
//     i.e the gradient colors appears as one on top of the other but for the radial,
//     it takes a shape of either an oval or circle. A linear gradient progress in linear way,
//     whereas radial gradient propagate either in a circle or ecliptic way.</p>
