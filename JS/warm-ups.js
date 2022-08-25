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
