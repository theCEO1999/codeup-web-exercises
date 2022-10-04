const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');
let allDogsTrained = dogs.reduce((accumulator, dog) => {
    let newDog = {
        dogName: dog.dogName,
        age: dog.age,
        isTrained: true
    };
    accumulator.push(newDog);
    return accumulator;
}, []);
console.log(allDogsTrained)

console.log("Exercise 4:");
let youngDogs = dogs.filter((dog) => {
    return dog.age < 3;
});
console.log(youngDogs);

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');
let combinedDogYears = dogs.reduce((accumulator, dog, index) => {
    if (index === (dogs.length - 1)) {
        accumulator + parseInt(dog.age);
        return ( accumulator * 7);
    }
    else {
        return accumulator + parseInt(dog.age);
    }
}, 0);
console.log(combinedDogYears);


