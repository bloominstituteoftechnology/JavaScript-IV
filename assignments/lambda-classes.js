// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instuctor extends Person {
    constructor(instuctorAtts) {
        super(instuctorAtts);
        this.specialty = instuctorAtts.specialty;
        this.faveLanguage = instuctorAtts.faveLanguage;
        this.catchPhrase = instuctorAtts.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${this.subject}`
    }

    grade(student, subject) {
        return `${this.student.name} receives a perfect score on ${this.subject}`
    }
}

class Student extends Person {
    constructor(studentAtts){
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubject = studentAtts.favSubject;
    }

    listSubjects() {  //use apply when consol logging?
        return `My facorite subjects are ${this.favSubject}`
    }
}


//Instructor
const josh = new Person ({
    name: 'Josh',
    age: 34,
    location: 'Internets',
    gender: 'Male',
    specialty: 'Redux',
    faveLanguage: 'JavaScript',
    catchPhrase: 'Invoke!'
});

//Student
const student = new Person ({
    name: 'Latifah',
    age: 27,
    location: 'Austin TX',
    gender: 'Female',
    previousBackground: 'Teacher',
    className: 'FSW15',
    favSubject: ['HTML', 'CSS', 'JavaScript']

});

//Project Manager
const projectManager = new Instuctor ({
    name: 'Jon',
    age: 29,
    location: 'Interwebs',
    gender: 'Male',
    gradClassName: 'CS14',
    favInstructor: 'Josh'
})