// isNumber function that checks if input is a number, type of input is a boolean or null or undefined
const isNumber = function(input){
    return !(isNaN(input) || typeof input === 'boolean' || input === null || input === undefined);
}

// loops through an array of strings and returns the string with the longest length.
const longestString = function (arrayOfStrings){
    let longest = '';
    for (let i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
    }
    return longest;
}

//

