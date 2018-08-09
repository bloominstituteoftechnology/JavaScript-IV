// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
	this.name = attributes.name;
	this.location = attributes.location;
	this.age = attributes.age;
	this.gender = attributes.gender;
    }
    speak() {
	console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person {
    constructor(instructorAttributes) {
	super(instructorAttributes);
	this.specialty = instructorAttributes.specialty;
	this.favLanguage = instructorAttributes.favLanguage;
	this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
	console.log(`Today we are learning about ${subject}`);
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
	console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
	console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
	console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
	super(pmAttributes);
	this.gradClassName = pmAttributes.gradClassName;
	this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {
	console.log(`${this.name} announces to ${channel}, @channel standby times!​`);
    }
    debugsCode (student, subject) {
	console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

const bob = new Student({
    name: 'Bob',
    location: 'San Francisco',
    age: 40,
    gender: 'male',
    previousBackground: 'spy',
    className: 'CS13',
    favSubjects: ['React', 'node.JS']
});

const carol = new Student({
    name: 'Carol',
    location: 'Colorado Springs',
    age: 35,
    gender: 'female',
    previousBackground: 'architect',
    className: 'CS13',
    favSubjects: ['CSS', 'C']
});

const dan  = new Instructor({
    name: 'Dan',
    location: 'Nebraska',
    age: 64,
    gender: 'male',
    specialty: 'fsdgh',
    favLanguage: 'LISP',
    catchPhrase: 'My name is Bond. Dan Bond'
});

const erin  = new Instructor({
    name: 'Erin',
    location: 'New York',
    age: 90,
    gender: 'female',
    specialty: 'data structures',
    favLanguage: 'R',
    catchPhrase: 'Tidyverse is my life'
});

const frank = new ProjectManager({
    name: 'Frank',
    location: 'Dallas',
    age: 10,
    gender: 'male',
    favLanguage: 'english',
    specialty: 'server architecture',
    catchPhrase: `Cowabunga`,
    gradClassName: 'CS3',
    favInstructor: 'Dan'
});

const alice = new ProjectManager({
    name: 'Alice',
    location: 'Bedrock',
    age: 33,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'data science',
    catchPhrase: `little old ladies`,
    gradClassName: 'CS1',
    favInstructor: 'Erin'
});

bob.PRAssignment('JavaScript');
bob.speak();
carol.listsSubjects();
carol.sprintChallenge('JavaScript Fundamentals');
dan.demo('frameworks');
erin.grade(bob, 'frameworks');
frank.standUp('CS13');
alice.debugsCode('Carol', 'SQL');
