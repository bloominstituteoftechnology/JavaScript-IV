// CODE here for your Lambda Classes
// CODE here for your Lambda Classes
class Person {
    constructor(personProps){
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructProps){
        super(instructProps);
        this.specialty = instructProps.specialty;
        this.favLanguage = instructProps.favLanguage;
        this.catchPhrase = instructProps.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listSubjects(){
        console.log(this.favSubjects);
    }
    pRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pMProps){
        super(pMProps);
        this.gradClassName = pMProps.gradClassName;
        this.favInstructor = pMProps.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const barry = new Instructor({
    name: 'Barry',
    age: 75,
    location: 'New Jack City',
    gender: 'M',
    favLanguage: 'C',
    specialty: 'Old things',
    catchPhrase: `Is my microphone on`
});

barry.demo('Internet');

const larry = new Student({
    name: 'Larry',
    age: 8,
    location: 'Partytown',
    gender: 'M',
    previousBackground: 'Child',
    className: 'FSW22',
    favSubjects: [
        'CSS',
        'Javascript',
        'Nap time',
    ]
});

larry.listSubjects();
larry.sprintChallenge('Javascript classes');
barry.grade(larry, 'Javascript classes');

const garry = new ProjectManager({
    name: 'Garry',
    age: '???',
    location: 'Parts Unknown',
    gender: 'M',
    gradClassName: 'FSW0',
    favInstructor: 'Not Barry'
});

garry.standUp('The Endless Void');
garry.debugsCode(larry, 'Javascript classes');

