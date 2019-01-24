// CODE here for your Lambda Classes

// Base class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
         return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// Instructor class
class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// Student class
class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
    }
    listsSubjects() {
        return `Favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// Project Manager class
class ProjectManagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const richard = new Instructor({
    name: 'Richard Beldin',
    age: 35,
    location: 'San Francisco',
    gender: 'Male',
    specialty: 'Data Visualization Development',
    favLanguage: "Python",
    catchPhrase: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
});

const screech = new Student({
    name: 'Screech Powers',
    age: 17,
    location: 'Silicon Valley',
    gender: 'Male',
    previousBackground: 'Physics',
    className: 'FSW 8',
    favSubjects: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
});

const zack = new ProjectManagers({
    name: 'Zack Morris',
    age: 18,
    location: 'Silicon Valley',
    gender: 'Male',
    gradClassName: 'FSW 4',
    favInstructor: 'Richard',
});

console.log(richard.name);
console.log(richard.specialty);
console.log(richard.favLanguage);
console.log(richard.catchPhrase);
console.log(richard.demo('Express'));
console.log(richard.grade(screech, 'Redux'));
console.log(screech.age);
console.log(zack.location);
console.log();
