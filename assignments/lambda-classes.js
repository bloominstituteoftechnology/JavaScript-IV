// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    } 
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        console.log('Today we are learning about ' + subject)
    }
    grade(student) {
        console.log(`${this.name} receives a perfect score on ${this.subject}`)
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listSubjects() {

    }
    PRAssignment() {

    }
    sprintChallenge() {

    }
}

class ProjectManagers extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp() {

    }
    debugsCode() {

    }
}

//Objects here
const fred = new Instructor({
    name: 'Fred Flintstone',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'Caveman',
    specialty: 'Bowling',
    catchPhrase: 'Yaba-daba-do'
});

const barney = new Instructor({
    name: 'Barney Rubble',
    location: 'Bedrock',
    age: 35,
    gender: 'male',
    favLanguage: 'Caveman',
    specialty: 'Knuclehead',
    catchPhrase: 'ha ha ha'
})

const wilma = new Instructor({
    name: 'Wilma Flintstone',
    location: 'Bedrock',
    age: 32,
    gender: 'female',
    favLanguage: 'Caveman',
    specialty: 'cooking',
    catchPhrase: 'Oh Fred'
})





