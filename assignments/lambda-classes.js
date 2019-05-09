// CODE here for your Lambda Classes

// Create class Person to serve as base class
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

// testing person
var david = new Person({
    name: 'David',
    age: 32,
    location: 'London',
    gender: 'M'
})

console.log(david); // Person {name: "David", age: 32, location: "London", gender: "M"}
david.speak(); // Hello my name is David, I am from London.

// create class Instructor which inherits from Person
class Instructor extends Person {
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// testing instructor 
var emma = new Instructor({
    name: 'Emma',
    age: 26,
    location: 'Dublin',
    gender: 'F',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: '"You see, it makes sense if you think about it"'
});

console.log(emma); // Instructor {name: "Emma", age: 26, location: "Dublin", gender: "F", specialty: "Redux", …}
emma.demo("Immutability"); // Today we are learning about Immutability.
emma.grade(david, "redux"); // David receives a perfect score on redux
