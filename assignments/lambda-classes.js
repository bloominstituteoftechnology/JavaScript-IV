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
    demo(subjet) {
       console.log(`Today we are learning about ${subject}`);

    }
    grade(student) {
        console.log(`${student.name} receives a perfect scoe on ${this.subject}`);
    }
}

class Student extends Instructor {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;

    }
    listSubjects(student) {
        console.log(this.favSubjects);
    }
    
}