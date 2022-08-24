

// let numEntered = prompt("Enter in a odd number 1-50: ");
// if (numEntered % 2 === 1 && numEntered > 0 && numEntered <= 50){
//     console.log("Number to skip is: " + numEntered);
// } else {
//     alert("That is not an odd number");
// }
//
// for (let i = 1; i <= 50; i+=2){
//     let numEntered = prompt("Enter in a odd number 1-50: ");
//     if (numEntered % 2 === 1 && numEntered > 0 && numEntered <= 50){
//         console.log("Number to skip is: " + numEntered);
//         break;
//     } else {
//         alert("That is not an odd number");
//     }
// }
function isNumber(value){
    return !(isNaN(value) || typeof value === 'boolean');
}

while(true){
    let oddNumber = prompt("Enter in a odd number 1-50: ");
    if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1 && isNumber(oddNumber)){
        console.log("Number to skip is: " + oddNumber);
        console.log("");
        for(let i = 1; i < 51; i += 2){
            if (i == oddNumber){
                console.log("Yikes! Skipping number " + oddNumber);
                continue;
            } else {
                console.log("Here is an odd number " + i);
            }
        }
        break;
    }
}





    // console.log("Here is an odd number: " + i){
    //     if (numEntered % 2 !== 0);
    //     break;
    // }
    //
