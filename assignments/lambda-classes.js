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
const david = new Person({
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
const emma = new Instructor({
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


// create class Student that inherits from Person
class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className  = student.className;
        this.favSubjects = student.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// testing student
const isaac = new Student({
    name: 'Isaac',
    age: 23,
    location: 'Dublin',
    gender: 'M',
    previousBackground: 'Business & Law',
    className: 'JavaScript IV',
    favSubjects: ['Introduction to User Interface and Git', 'Advanced CSS', 'JavaScript Fundamentals']
})

console.log(isaac); // Student {name: "Isaac", age: 23, location: "Dublin", gender: "M", previousBackground: "Business & Law", …}
isaac.listsSubjects(); // Introduction to User Interface and Git - Advanced CSS - JavaScript Fundamentals
isaac.PRAssignment('JavaScript IV'); // Isaac has submitted a PR for JavaScript IV
isaac.sprintChallenge('JavaScript Fundamentals'); // Isaac has begun sprint challenge on JavaScript Fundamentals

// Create class Project Manager that inherits from Instructors
class ProjectManager extends Instructor {
    constructor(projectManager) {
        super(projectManager);
        this.gradClassName = projectManager.gradClassName;
        this.favInstructor = projectManager.favInstructor;
    }

    standup(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// testing ProjectManager
const elizabeth = new ProjectManager({
    name: 'Elizabeth',
    age: 25,
    location: 'Belgium',
    gender: 'F',
    specialty: 'Backend Dev',
    favLanguage: 'Java',
    catchPhrase: '"Easy peezy"',
    gradClassName: "EU1",
    favInstructor: "Emma"
});

console.log(elizabeth); // ProjectManager {name: "Elizabeth", age: 25, location: "Belgium", gender: "F", specialty: "Backend Dev", …}
elizabeth.standup("eu_elizabeth"); // Elizabeth announces to eu_elizabeth, @channel standy times!
elizabeth.debugsCode(isaac, "Advanced CSS"); // Elizabeth debugs Isaac's code on Advanced CSS


