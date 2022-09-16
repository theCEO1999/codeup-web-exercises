// 3 steps to event handling
// // 1. get a reference to the element that will trigger the event
// //
// let theButton = document.querySelector("button");
//
// // // 2. Write the function that will be triggered by the event
// // // a function is a set of instructions. this kind of function that is triggered by an event is called an event handler,
// // // or also called callback
// // // the function contains the instructions that will run when the event is triggered
// function eventHandler(){
//     alert(`I am a Square!`);
// }
//
// // // 3. Register the handler
// //
// // // We can use addEventListener with two arguments: the type of event and
// // // the function that will be triggered
// //
// // // theButton.addEventListener('click', eventHandler)
// //
// theButton.onclick = eventHandler;
// //

let theSquare = document.querySelector('.square');
// let theHandler = function(){
//     alert(`I am a square and I am blue`);
// }

theSquare.addEventListener('click', function(e){
    console.log(e.target.className);
    let theColor = getComputedStyle(e.target).backgroundColor
    console.log(theColor);
    document.getElementById('anotherSquare').style.backgroundColor = getComputedStyle(e.target).backgroundColor;
});



let theButton = document.querySelector('button');

let buttonClickFunction = function(){
    document.querySelector('p').innerText = "You Changed Me";
}

theButton.onclick = buttonClickFunction;

document.querySelector('body').addEventListener('click', function(event){
    console.log(getComputedStyle(event.target).backgroundColor);
})

theButton.onclick = buttonClickFunction;

let formInput = document.getElementById("form-input");

formInput.onkeyup = function (){
    console.log(formInput)
}