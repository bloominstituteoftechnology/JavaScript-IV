// CODE here for your Lambda Classes
class Person {
    
    constructor(personProp){
        this.name = personProp.name;
        this.age = personProp.age;
        this.location = personProp.location;
        this.gender = personProp.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I aam from ${this.location}`;
    }
}

class Instructor extends Person {
    
    constructor(instrucProp) {
        super(personProp);
        this.specialty = instrucProp.specialty;
        this.favLanguage = instrucProp.favLanguage; //Array of objects in an object
        this.catchPhrase = instrucProp.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    //Remember this is for students only
    grade(Student, subject){
        return `${Student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    
    constructor(studentProp) {
        super(personProp);
        this.previousBackground = studentProp.previousBackground;
        this.className = studentProp.className;
        this.favSubjects = studentProp.favSubjects;     //Array of objects in an object
    }

    listsSubjects(){
        return this.favSubjects.forEach(item => item);
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}

class ProjectManager extends Instructor {
    
    constructor(pmProp) {
        super(instrucProp);
        this.gradClassName = pmProp.gradClassName;
        this.favInstructor = pmProp.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`
    }

    debugsCode(Student, subject) {
        `${Student.name}'s code on ${subject}`;
    }
}

//CREATE OBJECTS TO TEST:

const somePerson = new Person({
    name: 'Julia',
    age: 90,
    location: 'Washington',
    gender: 'female'
});

const mark = new Student({
    name: "Mark",
    age: 22,
    location: 'Chicago',
    gender: 'male',
    previousBackground: 'Unknown',
    className: 'CS132',
    favSubjects: ['JS', 'LESS', 'HTML', 'CSS', 'React']
})

const carissa = new Student({
    name: "Carissa",
    age: 30,
    location: 'Los Angeles',
    gender: 'female',
    previousBackground: 'Coding Dojo',
    className: 'CSPT2',
    favSubjects: ['C', 'CSS', 'React']
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: ['JavaScript', 'C', 'Delphi'],
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});