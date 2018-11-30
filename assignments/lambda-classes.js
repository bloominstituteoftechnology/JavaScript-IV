// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
        this.student = props.student;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location} `;
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.cathPhrase = props.cathPhrase;
        
    }
    demo(subject) {
       console.log(`Today we are learning about ${subject}`);

    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect scoe on ${subject}`);
    }
}

class Student extends Instructor {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;

    }
    listSubjects() {
        console.log(this.favSubjects);
    }
    PRassignment(subject) {
        console.log(`student.name has submitted a PR for ${subject}`);

    }
    sprintchallenge(subject) {
        console.log(`student.name has begun sprint challenge on ${subject}`);
    }
}