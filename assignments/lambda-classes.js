// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.location = attributes.location,
        this.age = attributes.age
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attributes){
    super(attributes); 
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(subject){
        return `${ron.name} recieves a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(attributes){
    super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = ["AI", "HTML", "Javascript"] 
    }
    listSubjects(){
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
    super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(name, channel){
        return `${name} announces to ${channel} channel standy times!`;
    }
    debugsCode(student, subject){
        return `${tom.name} debugs ${student}'s code on ${subject}`;
    }
}



const jack = new Person({
    name: 'Jack',
    location: "The moon",
    age: "30"
})

const robin = new Instructor({
    name: "Robin",
    location: "USA",
    age: "31",
    specialty: "Javascript",
    catchPhrase: "Snooze you lose"
})

const ron = new Student({
    name: "Ron",
    location: "Japan",
    age: "24",
    previousBackground: "Teacher",
    className: "Web25",
    favSubjects: ["CSS", "HTML", "React"]
})

const tom = new ProjectManager({
    name: "Tom",
    location: "Canada",
    age: "40",
    gradClassName: "CS1",
    favInstructor: "Rita",
})

console.log(jack.speak());
console.log(ron.listSubjects());
console.log(ron.PRAssignment("English"));
console.log(ron.sprintChallenge("React"));
console.log(tom.standUp("Tom", "Slack"));
console.log(tom.debugsCode("Ron", "React"));
console.log(robin.demo("PHP"));
console.log(robin.grade("CSS"));