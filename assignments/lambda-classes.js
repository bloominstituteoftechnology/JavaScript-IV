// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
        this.grade = attributes.grade;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor (instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor (studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects() {
        console.log(`Me gusta ${this.favSubjects}`);
    }
    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}


class ProjectManagers extends Instructor {
    constructor (pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standUp(student, channel) {
        console.log(`${student.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(name, student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    }
}


// Person test
const personTest = new Person ({
    name: "The Rascal",
    age: 45,
    location: "Brazil",
    gender: "M",
    grade: 75
})

console.log(personTest);
personTest.speak();



// Instructor test
const instructorTest = new Instructor ({
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Vamos"
})

console.log(instructorTest);
instructorTest.demo("Maths");
instructorTest.grade(personTest, "English");



// Student test
const studentTest = new Student ({
    previousBackground: "Pilot",
    className: "FSW15",
    favSubjects: "Python"
})

console.log(studentTest);
studentTest.listsSubjects();
studentTest.PRAssignment(personTest, 'JavaScript');
studentTest.sprintChallenge(personTest, 'React');




// Project Manager test
const pmTest = new ProjectManagers ({
    gradClassName: "Best",
    favInstructor: "Josh"
})

console.log(pmTest);
pmTest.standUp(personTest, 'secretChannel');
pmTest.debugsCode('Kenny', personTest, 'The Impossible');
