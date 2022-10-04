//write a function that accepts an array of numbers and returns its average.
// // Bonus: if there are any nom numeric values in the array, return false.
// // numeric strings should count as numeric values.
// const isNumber = function(input){
//     return !(isNaN(input) || typeof input === 'boolean' || input === null);
// }
// let array = [5, 10, 15];
//
// function averageArray(array){
//
//     let total = 0;
//     for(let i = 0; i < array.length; i++){
//         if (!isNumber(array[i])){return false;}
//         total += array[i];
//     }
//     return total/array.length;
// }
// // write a function that accepts an array of strings and returns the longest string.
// // if there are two strings of equal length it returns the one with the lowest index.
// // Bonus: if there are any values that are not strings, return false.
//
// let stringArray = ["Jabba", "Darth Maul", "Hondo"];
//
// function longestString(arrayOfStrings){
//     let longest = '';
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
//     }
//     return longest;
// }
//
// //// Write a function, calculateTotalStudents, that returns the total number of students
// // recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
// function calculateTotalStudents(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++){
//         total += array[i].students;
//     }
//     return total;
// }
//
// let numericArray = [8, 10, 20]
//
// function arraySum(array){
//     let total = 0;
//     for (let i = 0; i < array.length; i++){
//         total += array[i];
//     }
//     return total;
// }
//
// console.log(arraySum(numericArray));
//
// const neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }
//
// // Write a function that takes a neighborhood object and determines if it is desirable.
// // A neighborhood is desirable if the median home price is
// // less than 300000, crime rates are low, and the total rating of schools is at least 24.
//
// function neighborhoodDesirable(neighborhoodsObject) {
//     let schoolRating = 0;
//     for (let i = 0; i < neighborhoodsObject.schools.length; i++) {
//         schoolRating += neighborhoodsObject.schools[i].rating;
//     }
//     return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low";
// }
//
//
//
//
// // Write a function called convertToObject that takes in a string that is the name of a class,
// // and a number that is the number of students, and returns an object with the properties `class`
// // and `students`
// //convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
//
// const convertToObject = function(nameOfClass, numberOfStudents){
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }
//
// console.log(convertToObject("intro to programming", 20));
//
// //Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
// //
// // A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// //
// // Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// //
// //     your referral bonus, and
// //
// //     the price of a beer can
// //
// // For example:
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


// //This function works better
// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
//     let x = 0; //accumulator variable
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
//         x = i; //match the accumulator to the number of levels
//     }
//     return x;
// }
// //
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
// //     These transitions are shown as either linear or radial.
// //     Because they are of the image data type, gradients can be used anywhere an image might be.
// //     The most popular use for gradients would be in a background element.
// //     A linear gradient is horizontal,
// //     i.e the gradient colors appears as one on top of the other but for the radial,
// //     it takes a shape of either an oval or circle. A linear gradient progress in linear way,
// //     whereas radial gradient propagate either in a circle or ecliptic way.</p>
//
//
// const attendance = {
//     miami: 32789,
//     buffalo: 45678,
//     portland: 24567
// }
// //
// // // function totalAttendance(attendanceObject){
// // //     let attendanceArray = Object.values(attendanceObject);
// // //     let total = 0;
// // //     for (let i =0; i < attendanceArray.length; i++){
// // //         total += attendanceArray[i];
// // //     }
// // //     return total;
// // // }
// //
// // function totalAttendance(attendanceObject){
// //     let total = 0;
// //     for (const prop in attendance){
// //         total += attendance[prop];
// //     }
// //     return total;
// // }
// //
// // // function totalAttendance(attendanceObject){
// // //     let attendanceArray = object.values(totalAttendance);
// // //     let total = 0;
// // //     attendanceArray.forEach(function(attendance){
// // //         total += attendance;
// // //     })
// // // }
// //
// // //returns the average
// //
// // function averageAttendance(attendanceObject){
// //     let total = 0;
// //     for (const prop in attendance){
// //         total += attendance[prop];
// //     }
// //     return total/Object.keys(attendance).length;
// // }
// //
// // function createObject(attendanceObject){
// //     let total = 0;
// //     for (const prop in attendance){
// //         total += attendance[prop];
// //     }
// //     return {
// //         totalAttendance: total,
// //         averageAttendance: total/Object.keys(attendance).length;
// //     }
// // }
//
// /**
//  * Convert Address to Object
//  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//  *
//  * Examples
//  *
//  * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
//  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
//  **/
// let address = '8646 Sunny Oaks'
// //
// // function convertAddressToObject(addressString){
// //     return {
// //         streetNumber: addressString.substring(0, addressString.indexOf(' ')),
// //         streetName: addressString.substring(addressString.indexOf(' ')+ 1)
// //     }
// // }
// // either function works^
// function convertAddressToObject(addressString){
//     let addressArray = addressString.split(' ');
//     return {
//         streetNumber: addressArray[0],
//         streetName: addressArray.slice(1, addressArray.length).join(' ')
//     }
// }
//
// /**
//  * Count total pets
//  * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//  *
//  * Examples
//  *
//  * >> totalPets([
//  *       {name: 'Fernando Mendoza', pets: 1},
//  *       {name: 'Douglas Hirsh', pets: 8},
//  *       {name: 'Kenneth Howell', pets: 2}
//  *    ]) ➞ 11
//  */
// let peopleAndPets = ([
//     {name: 'Fernando Mendoza', pets: 1},
//     {name: 'Douglas Hirsh', pets: 8},
//     {name: 'Kenneth Howell', pets: 2}
// ])
//
// // function totalPets(arrayOfObjects){
// //     let totalPetsArray = Object.values(arrayOfObjects);
// //     let total = 0;
// //     for (let i =0; i < arrayOfObjects.length; i++){
// //         total += arrayOfObjects[i].pets;
// //     }
// //     return total;
// // }
// // both work but the function below uses a for each to do the same thing
// // function totalPets(arrayOfObjects){
// //     let total = 0;
// //     arrayOfObjects.forEach(function(object){
// //         total += object.pets;
// //     });
// //     return total:
// // }
//
// // function below works using .reduce but still does the same as the two above
// function totalPets(arrayOfObjects){
//     return arrayOfObjects.reduce(function(acc, currentValue){
//         return acc + currentValue.pets;
//     }, 0)
// }
//
// /**
//  * Find the Smallest and Biggest Numbers
//  * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//  *
//  * Examples
//  * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//  * >> minMax([2334454, 5]) ➞ [5, 2334454]
//  * >> minMax([1]) ➞ [1, 1]
//  *
//  * Notes
//  * All test arrays will have at least one element and are valid.
//  */
// function minMax(){
//
// }
//
// /**
//  * Filter out Strings from an Array
//  * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
//  *
//  * Examples
//  *
//  * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//  * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//  * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
//  *
//  * Notes
//  * Zero is a non-negative integer.
//  * The given array only has integers and strings.
//  * Numbers in the array should not repeat.
//  * The original order must be maintained.
//  */
//
//
// // second JS Test practice
//
// function doubleNumber(number){
//     return number * 2;
// }
//
// function upperCase(string){
//     return string.toUpperCase();
// }
//
// function repeatString(string){
//     return string.concat(', ', string);
// }
//
// let myArray = [1, 2, 3, 4, 5, 6]
//
// function removeFirstElement(array){
//     array.shift();
//     return array
// }
//
// function moveFirstToLast(array){
//     let firstElement = array.shift();
//     array.push(firstElement);
//     return array;
// }
//
// const students = [
//         {
//          id: 1,
//          name: "Jacek",
//          notes: [5, 3, 4, 2, 5, 5]
//         },
//         {
//              id: 2,
//              name: "Ewa",
//              notes: [2, 3, 3, 3, 2, 5]
//         },
//         {
//         id: 3,
//        name: "Zygmunt",
//         notes: [2, 2, 4, 4, 3, 3]
//         }
// ]
//
// function getStudentTopNotes (arrayOfStudentObjects){
//     const topNotes = [];
//     arrayOfStudentObjects.forEach(studentObject => {
//         topNotes.push(Math.max(...studentObject.notes));
//     });
//     return topNotes;
// }
// //
// // function getStudentTopNotes(arrayOfStudentObjects){
// //     let topNotes = [];
// //     for (let i = 0; i < arrayOfStudentObjects.length; i++){
// //         let topNote = arrayOfStudentObjects[i].notes[0];
// //         for (let j = 0; j < arrayOfStudentObjects[i].notes.length; j++){
// //             if (arrayOfStudentObjects[i].notes[j] > topNote){
// //                 topNote = arrayOfStudentObjects[i].notes[j];
// //             }
// //         }
// //         topNotes.push(topNote);
// //     }
// //     return topNotes;
// // }
//
// // Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
// let cityAndState = 'San Antonio, Texas';
//
//
//
// //Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties
//
// function analyzeString(string){
//     return {
//         length: string.length,
//         firstLetter: string.charAt(0),
//         lastLetter: string.charAt(string.length - 1)
//     };
// }
//
// // write a function that removes every odd number from an array of numbers
// myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function removeOddsFromAnArray(array){
//     const newArray = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
//
// // write a function that takes an array of numeric values and returns an array with all those vvalues
//
// function doubleNumbers(array){
//     const newArray = [];
//     for (let i = 0; i < array.length; i++){
//         newArray.push(array[i] * 2);
//     }
//     return newArray;
// }
//
// // const isNumber = function(input){
// //     return !(isNaN(input) || typeof input === 'boolean' || input === null || input === undefined);
// // }
//
// let array = [5, 10, 15];
//
// let array2 = [-25, -22, 258, 68];
//
// let array3 = ["notANumber", 25, 78];
//
// function arrayAverage(array){
//     if (array === undefined){return false;}
//     let total = 0;
//     for (let i = 0; i < array.length; i++){
//         if (!isNumber(array[i])){return false;}
//         total += array[i];
//     }
//     return total/array.length;
// }
//
// let stringArray = ["buzzworthy", "Jabba", "Darth Maul", "Hondo", "buzzworthy"];
//
// function longestString(arrayOfStrings){
//     let longest = '';
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
//     }
//     return longest;
// }
//
// //// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
// function calculateTotalStudents(array){
//     let total = 0;
//     for (let i = 0; i < array.length; i++){
//         total += array[i].students;
//     }
//     return total;
// }
//
// // If this stumps you , try starting with the simpler form of the problem: write a function that calculates the sum of the elements of an array.  Thus, if you give it
// let numericArray = [8, 10, 20];
// // the function should return 38
//
// function arraySum(array){
//     let total = 0;
//     for (let i = 0; i < array.length; i++){
//         total += array[i];
//     }
//     return total;
// }
//
// // Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`
//
//
// const convertToObject = (nameOfClass, numberOfStudents) => {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }
//
//
// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood3 = {
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }
//
// // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
//
// function desirableNeighborhood(neighborhoodsObject){
//     let total = 0;
//     for (let i = 0; i < neighborhoodsObject.schools.length; i++){
//         total += neighborhoodsObject.schools[i].rating;
//     }
//     return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >= 24;
// }
//
// //Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// function beeramid(bonus, price){
//     let totalCost = 0;
//     let levels = 0;
//     while (totalCost < bonus){
//         totalCost += levels * levels * price;
//         if (totalCost + ((levels +1) ** 2 * price) > bonus){break;}
//         levels++;
//     }
//     return levels;
// }
//
// const attendance = {
//     miami: 32789,
//     buffalo: 45678,
//     portland: 24567
// }
//
// function totalAttendance(attendanceObject){
//     let total = 0;
//     for (const prop in attendance){
//         total += attendance[prop];
//     }
//     return total;
// }
//
// function averageAttendance(attendanceObject){
//     let total = 0;
//     for (const prop in attendance){
//         total += attendance[prop];
//     }
//     return total/Object.keys(attendance).length;
// }

//-----------------------------------------DOM WARM UPS------------------------------------------------------------------------

// when the user clicks the button that has the text "Change Heading", the text of
// the <h1> element changes to read "I pwn the DOM"
// Every time the user enters a character in the input with id "source", that
// character appears in the <p> element with the id "output"
// $("button").on('click', function (){
//     $("h1").text("I pwn the DOM");
// });

document.getElementsByTagName('button')[0].addEventListener('click', function (e){
    document.getElementsByTagName("h1")[0].innerHTML = "I pwn the DOM";
});

$("#source").on('keyup',function (){
    $("#output").text($("#source").val())
});


