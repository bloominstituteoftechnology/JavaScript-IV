// CODE here for your Lambda Classes
class Person {
    constructor(stats){
        this.name = stats.name,
        this.age = stats.age,
        this. location = stats.location,
        this. gender = stats.gender
    }
    speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(details) {
    super (details);
    this.specialty = details.specialty,
    this.favLanguage = details.favLanguage,
    this.catchPhrase = details.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentStats) {
        super (studentStats);
        this.previousBackground = studentStats.previousBackground,
        this.classname = studentStats.classname,
        this.favSubjects = studentStats.favSubjects
    }
    listsSubjects() {
        console.log(this.favSubjects)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManagers extends Instructor {
    constructor(pmStats) {
        super (pmStats);
        this.gradClassName = pmStats.gradClassName,
        this.favInstructor = pmStats.favInstructor
    }
    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const Joe = new Person ({
    name: 'Joe',
    age: 35,
    location: 'Anywhere, USA',
    gender: 'Male'
})

const mrMiyagi = new Instructor({
    name: 'Mr. Miyagi',
    age: 73,
    location: 'Okinawa, Japan',
    gender: 'Male',
    favLanguage: 'Japanese',
    specialty: "Karate",
    catchPhrase: 'Wax on, wax off.'
})

const Marc = new Student({
    name: 'Marc',
    age: 32,
    location: 'Yucaipa,CA',
    gender: 'Male',
    previousBackground: 'None',
    classname: 'CSPT2',
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const Javier = new ProjectManagers({
    name: 'Javier',
    age: 35,
    location: 'Colton, CA',
    gender: 'Male',
    specialty: 'Javascript',
    favLanguage: 'See specialty',
    catchPhrase: 'Whilst',
    gradClassName: 'CSPT2',
    favInstructor: 'Dan Frehner'
});

console.log(Joe);
Joe.speak();
mrMiyagi.speak();
mrMiyagi.demo('Karate');
mrMiyagi.grade(Marc, 'Karate');
Marc.sprintChallenge('Javascript IV');
Javier.grade(Marc, 'Javascript');
Javier.standUp('#CSPT2');
Javier.debugsCode(Marc, 'Array Methods');