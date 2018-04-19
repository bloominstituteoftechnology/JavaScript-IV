// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from
        ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.specialty}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}



class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }        
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes){
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUP(channel) {
        return `${this.name} annouces to ${channel}, @channel Standy Times!!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

// Instuctor Ojects

const josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: "Utah",
    gender: 'M',
    specialty: 'Everything, but is Fond of front end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Look at those Jazz go!'
});

const ryan = new Instructor({
    name: 'Ryan',
    age: 32,
    location: "Utah",
    gender: 'M',
    specialty: 'Everything, but is Fond of React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Look at those Jazz go!'
});

// Project Manager Objects

const jackee = new ProjectManager ({
    name: 'Jackee',
    age: 35,
    location: 'North Dakota',
    gender: 'F',
    specialty: 'Everything',
    favLanguage: 'JavaScript',
    catchPhrase: 'You can do it!',
    gradClassName: 'CS_4',
    favInstructor: 'Josh'
});

const moises = new ProjectManager ({
    name: 'Moises',
    age: 25,
    location: 'Florida',
    gender: 'M',
    specialty: 'Everything',
    favLanguage: 'JavaScript',
    catchPhrase: 'You got this!',
    gradClassName: 'CS_4',
    favInstructor: 'Josh'
});

// student Objects

const lonnie =  new Student ({
    name: 'Lonnie',
    age: 45,
    location: 'Texas',
    gender: 'M',
    className: 'cs10',
    favSubjects: 'Everything'
})

const maribel =  new Student ({
    name: 'Maribel',
    age: 35,
    location: 'Phillippines',
    gender: 'F',
    className: 'cs10',
    favSubjects: 'Everything'
})

console.log(josh.location);
console.log(josh.catchPhrase);
console.log(josh.demo('Life'));
console.log(josh.grade('Maribel', 'JavaScript'));

console.log(jackee.standUP('cs10_jackee'));
console.log(jackee.debugsCode('lonnie', 'javaScript'));
console.log(jackee.gradClassName);
console.log(jackee.location);

console.log(lonnie.speak());
console.log(lonnie.PRAssignment('JavaScript-IV'));
console.log(lonnie.sprintChallenge('JavaScript Fundamentals'));
