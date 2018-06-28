// CODE here for your Lambda Classes
// Start of my code //

// Creating our base-class, Person
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}// End of Parent

// Start of Instructor class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    } 
}// End of Instructor

// Start of Student class
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects () {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment (subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge () {
        console.log(`${student.name} has begun spring challenge on ${subject}`);
    }
}// End of Student

// Start of Project Manager class
class ProjectManager extends Person{
    constructor(projectmanagerAttributes) {
        super(projectmanagerAttributes);
        this.gradClassName = projectmanagerAttributes.gradClassName;
        this.favInstructor = projectmanagerAttributes.favInstructor;
    }
    standUp (channel) {
        console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode () {
        console.log(`${name} debugs {student.name}'s code on ${subject}`)
    }
}// End of Project Manager


// Objects 

// People Objects Bill, Fred, and Jess
const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
});
const bill = new Person({
    name: 'bill',
    location: 'LA',
    age: 33,
    gender: 'male',
});
const jess = new Person({
    name: 'Jessica',
    location: 'NY',
    age: 25,
    gender: 'female',
});

// Instructor Objects Josh, Ryan, and Dr.Fins
const josh = new Instructor({
    name: 'Josh',
    location: 'Mountains',
    age: 35,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: `Don't forget the homies`,
});
const ryan = new Instructor({
    name: 'Ryan',
    location: 'Georgia',
    age: 42,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'UI',
    catchPhrase: `Alright, alright, alright.`,
});
const fins = new Instructor({
    name: 'Fins',
    location: 'Tank',
    age: 4,
    gender: 'male',
    favLanguage: 'FishScript',
    specialty: 'Swimming',
    catchPhrase: `blagh`,
});

// Student Objects Steph, Klay, and Spuds
const steph = new Student({
    name: 'Steph',
    location: 'SF',
    age: 31,
    gender: 'male',
    previousBackground: '3-pt',
    className: 'CS4',
    favSubjects: 'Spelling',
});
const klay = new Student({
    name: 'Klay',
    location: 'Cali',
    age: 28,
    gender: 'male',
    previousBackground: 'Baller',
    className: 'CS7',
    favSubjects: 'English',
});
const spuds = new Student({
    name: 'Spuds',
    location: 'Underground',
    age: 1,
    gender: 'female',
    previousBackground: 'Teacher',
    className: 'CS10',
    favSubjects: 'Math',
});

