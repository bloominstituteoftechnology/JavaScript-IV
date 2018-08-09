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
    "age": 38,
    "location": "California",
    "gender": "Female",
    "specialty": "Redux",
    "favLanguage": "JavaScript",
    "catchPhrase": "Don't forget the homies",
});

const david = new Instructor({
    "name": "David",
    "age": 40,
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


// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => {
            return console.log(subject);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

const erwin = new Student({
    "name": "Erwin",
    "age": 28,
    "location": "Estonia",
    "gender": "Male",
    "specialty": "React",
    "favLanguage": "Assembly",
    "catchPhrase": "Don't have a cow, man.",
    "previousBackground": "Secret Agent",
    "className": "CS13",
    "favSubjects": ["Html", "CSS", "JavaScript"],
});

const fred = new Student({
    "name": "Fred",
    "age": 30,
    "location": "France",
    "gender": "Male",
    "specialty": "SQL",
    "favLanguage": "C++",
    "catchPhrase": "Ruh roh!",
    "previousBackground": "Astronaut",
    "className": "CS132",
    "favSubjects": ["LESS", "React", "SQL"],
});

console.log("\nTESTING STUDENT CLASS.")
console.log(erwin);
console.log(fred);
erwin.listsSubjects();
console.log(fred.PRAssignment("HTML"));
console.log(erwin.sprintChallenge("CSS"));
