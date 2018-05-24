// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}.`;  
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClass = attributes.gradClass;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const wilma = new Student({
    name: 'Wilma',
    location: 'Couchrock',
    previousBackground: 'waitress',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const pebbles = new ProjectManager({
    name: 'Pebbles',
    location: 'Bedstone',
    gradClass: 'CS1',
    favInstructor: 'Sean'
});

console.log(fred);
console.log(wilma);
console.log(pebbles);
console.log(fred.speak());
console.log(wilma.speak());
console.log(pebbles.speak());
console.log(fred.demo("Redux"));
console.log(fred.grade(wilma, "JavaScript"));
console.log(wilma.listSubjects());
console.log(wilma.PRAssignment("Python"));
console.log(wilma.sprintChallenge("Elm"));
console.log(pebbles.demo("HTML"));
console.log(pebbles.grade(wilma, "CSS"));
console.log(pebbles.standUp("CS132"));
console.log(pebbles.debugsCode(wilma, "JavaScript"));
