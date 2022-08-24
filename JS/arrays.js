// declaring an array literal:
// each item in an array is called an element
//

let groceryList = ['bread', 'eggs', 'butter', 'milk'];
console.log(groceryList);
//
// // looping over an array. basic case:
//
// for(let i = 0; i < groceryList.length; i++){
//     console.log(i);
// }
//
// // Looping over an array: conditional to access last element
//
// for(let i = 0; i < groceryList.length; i++){
//     if (i === groceryList.length - 1){
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + "and");
//     }
// }

// let shoppingList = ['socks', 'dog food', 'external hard drive', 'toothpaste'];
//
// for(let l = 0; l < shoppingList.length; l++){
//     if (l === shoppingList.length - 1){
//         console.log("I need to go to the store and get " + shoppingList[l] + ".");
//     } else {
//         console.log("I need to go to the store and get " + shoppingList[l] + " and");
//     }
// }


let texasCities = ["san antonio", "houston", "dallas", "el paso"];
// for(let i = 0; i < texasCities; i++){
//     if (i % 2 === 1) {
//         console.log(texasCities[i] + " is an odd city");
//     } else {
//         console.log(texasCities[i]);
//     }
//
// }

function outputArray(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

// outputArray(texasCities);

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// forEach loop takes an anonymous function
// the function we pass to the forEach loop has up to three parameters
// the first parameter represents the array elements
// the second parameter represents the element index
// the third parameter represents the array itself
// the second and third parameters are optional

// prices.forEach(function(price, index){
//     console.log("Item number " + (index +1) + " costs " + price)
// });

prices.forEach(price => {
    console.log(price)
});

groceryList.push("potatoes", "serranos");
console.log(groceryList);
groceryList.pop();
console.log(groceryList);

groceryList.unshift('sliced cheddar');
console.log(groceryList);
groceryList.shift();
console.log(groceryList);

let indexOfButter = groceryList.indexOf("butter");
console.log(indexOfButter);

groceryList[indexOfButter] = "peanut butter";
console.log(groceryList);


groceryList[0] = "avocados";
console.log(groceryList);

let firstHalfOfGroceryList = groceryList.slice(0, 2);
console.log(firstHalfOfGroceryList);
let secondHalfOfGroceryList = groceryList.slice(2);
console.log(secondHalfOfGroceryList);

firstHalfOfGroceryList.push("butter");

groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);

groceryList.sort();
console.log(groceryList);
console.log(groceryList.reverse());

prices.sort(function(a,b){
    return a-b;
});
console.log(prices);

groceryList[3] = "Bacon";
console.log(groceryList);
console.log(groceryList.sort());

// for (let i = o; i < groceryList.length; i++){
// groceryList[i] = groceryList[i].toLowercase();
// }
// console.log(grocerylist.sort());

groceryList.forEach((item, index, array) => {
    array[index] = item.toLowerCase();
})
console.log(groceryList);


