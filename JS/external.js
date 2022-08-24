// console.log("Hello from external Javascript");
//
// alert("Welcome to my Website!");
//
// let color = prompt("What is your favorite color?")
// alert(color + "is my favorite too!");
//
// let daysOfLittleMermaid = prompt("How many days did you rent the little mermaid?");
// let daysOfBrotherBear = prompt("how many days did you rent brother bear?");
// let daysOfHercules = prompt("How many days did you rent hercules?");
//
// let totalCost = (daysOfLittleMermaid * 3) + (daysOfBrotherBear * 3) + (daysOfHercules * 3);
// alert("Your total rental cost is " + totalCost + "dollars");
//
// let hoursAtGoogle = prompt("How many hours did you work at google?");
// let payAtGoogle  prompt("What is your hourly rate at google?");
// let hoursAtAmazon = prompt("How many hours did you work at amazon?");
// let payAtAmazon = prompt("What is your hourly rate at amazon?");
// let hoursAtFacebook = prompt("How many hours did you work at facebook?");
// let payAtFacebook = prompt("What is your hourly rate at facebook?");
//
// let totalPay = (hoursAtGoogle * payAtGoogle + hoursAtAmazon * payAtAmazon + hoursAtFacebook * payAtFacebook;
//
// alert("Your total pay is: " + totalPay + " dollars");

// let classNotFull = confirm("Is the class full?");
// let noScheduleConflict = confirm("Is there a scheduling conflict?");
//
// let canEnroll = !classNotFull && !noScheduleConflict;
//
// if (canEnroll){
//     alert("You can enroll")
// } else {
//     alert("You cant enroll");
// }

let numberOfItemsBought = prompt("How many items did the customer buy?");
let offerExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Is the customer a premium member?");

let makeProductOffer = (premiumMember || numberOfItemsBought > 2) && !offerExpired;

if (makeProductOffer) {
    alert("You get a product offer!")
} else {
    alert("You are a peon!")
}


