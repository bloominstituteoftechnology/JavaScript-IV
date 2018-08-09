// Person class
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
    "gender": "Female",
});

const bob = new Person({
    "name": "Bob",
    "age": 25,
    "location": "Bolivia",
    "gender": "Male",
});

console.log("TESTING PERSON CLASS.")
console.log(alice);
console.log(bob);
console.log(alice.speak());
console.log(bob.speak());


// Instructor class
class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

const cindy = new Instructor({
    "name": "Cindy",
    "age": 28,
    "location": "California",
    "gender": "Female",
    "specialty": "Redux",
    "favLanguage": "JavaScript",
    "catchPhrase": "Don't forget the homies",
});

const david = new Instructor({
    "name": "David",
    "age": 30,
    "location": "Delaware",
    "gender": "Male",
    "specialty": "React",
    "favLanguage": "Python",
    "catchPhrase": "I forgot the homies",
});

console.log("\nTESTING INSTRUCTOR CLASS.")
console.log(cindy);
console.log(david);
console.log(cindy.demo("Classes"));
console.log(david.grade({
    "name": "Dave",
}, "Geography"));
