class Person {
    constructor(personProps) {
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

const alice = new Person({
    "name": "Alice",
    "age": 18,
    "location": "Alaska",
    "gender": "Female"
});

const bob = new Person({
    "name": "Bob",
    "age": 25,
    "location": "Bolivia",
    "gender": "Male"
});

console.log(alice);
console.log(bob);
console.log(alice.speak());
console.log(bob.speak());


// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
    }
}