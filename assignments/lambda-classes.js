// CODE here for your Lambda Classes
class Person {
	constructor(personAttributes) {
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
		this.gender = personAttributes.gender;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person{
	constructor(instructorAttributes){
		super(instructorAttributes);
		this.speciality = instructorAttributes.speciality;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}
}

class Student extends Person {
	constructor(studentAttributes){
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
	}
	listSubjects() {
		this.favSubjects.forEach(subject => console.log(subject));
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject){
		return `${this.name} has begun a sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(projectManagerAttributes){
		super(projectManagerAttributes);
		this.gradClassName = projectManagerAttributes.gradClassName;
		this.favInstructor = projectManagerAttributes.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}'`;
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

const joe = new Student({
  name: 'Joe',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const steve = new ProjectManager({
  name: 'Steve',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

console.log(fred.name);
console.log(joe.name);
console.log(steve.name);
