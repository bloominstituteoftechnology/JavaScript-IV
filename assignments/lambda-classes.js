// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}`);
    }
} //end parent class

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);  //use this here???
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(item, index, array) {
            console.log(item);
        })
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);  //subject arg??  this.subject??
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
    }
    debugsCode(student) {
        console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`);
    }
}

const josh = new Instructor ({
    name: 'Josh',
    location: 'Utah', 
    age: 35,
    gender: 'male',
    favLanguage: 'CSS', 
    specialty: 'Front-end',
    catchPhrase: 'You shall not pass!'
})

const ian = new Student ({
    name: 'Ian',
    location: 'Jackson', 
    age: 43,
    gender: 'male',
    favLanguage: 'JS', 
    specialty: 'skiing',
    catchPhrase: 'alrigth alright'
})

const kevin = new ProjectManager ({
    name: 'Kevin',
    location: 'Chicago', 
    age: 30,
    gender: 'male',
    favLanguage: 'CSS', 
    specialty: 'dropping sick beats',
    catchPhrase: 'Did you spend 20 minutes on it?'
})

console.log(ian.location);
console.log(josh.catchPhrase);
console.log(kevin.specialty);