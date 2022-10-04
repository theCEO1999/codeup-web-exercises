// Ajax Request with jQuery
$.get("data/murals.json", function (data){
    console.log(data);
});

// Ajax request with Fetch API

fetch("data/murals.json").then(function (response){
    return response.json();
}).then(function(data){
    console.log(data)
})

// Abbreviated Fetch request using arrow functions
fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

// Callback: a function passed as an argument to another function;
// it can run after another function has finished running

function greeter(greeting, name, displayFunction){
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

function displayToOutputDiv(output){
    $("#output").html(output);
}

greeter("Yo", "Caleb", displayToOutputDiv);

setTimeout(  () => greeter("yo", "again", displayToOutputDiv), 3000);
setTimeout(function(){
    greeter("Yo", "AGAIN", displayToOutputDiv)
}, 8000)
setTimeout(greeter, 12000, "Yoooo", "wyd", displayToOutputDiv);

const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

generateGreeting(greetings, names, displayToOutputDiv);
setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv);

const aPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (Math.random() > 0.5){
            resolve("I was found");
        } else {
            reject("I was lost");
        }
    },3000);
});

aPromise.then(value => console.log(value)).catch(error=>console.log(error));

fetch("data/murals.json").then(response => {
        console.log(response.status);
        console.log(response.headers);
        console.log(url);
        return response.json();
}
    ).then(data => console.log(data)).catch(error => console.log("oh, no it doesnt work!"));