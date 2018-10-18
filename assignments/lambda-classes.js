/*
    === Person ===
    * name
    * age
    * location
    * gender


    * speak() // prototype method -> returns a log of `Hello my name is ${this.name}, I am from ${this.location}`
*/

class Person {
    // Class Initializer and Attributes
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    // Class Methods
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}




// Tests
const adam = new Person({
    name: 'Adam',
    age: 28,
    location: 'North America',
    gender: 'm'
});

const eve = new Person({
    name: 'Eve',
    age: 25,
    location: 'Africa',
    gender: 'f'
});


console.log(adam);
console.log(adam.speak());

console.log(eve);
console.log(eve.speak());