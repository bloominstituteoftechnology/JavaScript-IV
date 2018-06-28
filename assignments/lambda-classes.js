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



