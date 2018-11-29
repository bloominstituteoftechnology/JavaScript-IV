// CODE here for your Lambda Classes
// -----------Person Class-----------
class Person {
	constructor(human) {
		this.name = human.name;
		this.age = human.age;
		this.location = human.location;
		this.gender = human.gender;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
	}
}

// -----------Instructor Class-----------
class Instructor extends Person {
	constructor(human) {
		super(human);
		this.specialty = human.specialty;
		this.favLanguage = human.favLanguage;
		this.catchPhrase = human.catchPhrase;
	}

	demo(subject) {
		return `Today we a learning about ${subject}`;
	}

	grade(studentObject, subject) {
		return `${studentObject.name} recieves a perfect score on ${subject}`;
	}
}

// -----------Student Class-----------
class Student extends Person {
	constructor(human) {
		super(human);
		this.previousBackground = human.previousBackground;
		this.className = human.className;
		this.favSubjects = human.favSubjects;
	}

	listSubjects() {
		this.favSubjects.forEach(function(elem) {
			console.log(elem);
		});
	}

	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

// -----------Project Manager Class-----------
class ProjectManager extends Instructor {
	constructor(human) {
		super(human);
		this.gradClassName = human.gradClassName;
		this.favInstructor = human.favInstructor;
	}

	standUp(channel) {
		return `${this.name} announces to ${channel}, @ 4:15pm!`;
	}

	debugsCode(studentObject, subject) {
		return `${this.name} debugs ${studentObject.name}\'s code on ${subject}`;
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

const imon = new Student({
	name: 'Imon',
	location: 'Corona',
	age: 34,
	gender: 'male',
	previousBackground: 'mechanic',
	className: 'fsw16',
	favSubjects: [ 'Html', 'CSS', 'JavaScript' ]
});

const jerry = new ProjectManager({
	name: 'Jerry',
	location: 'Long Beach',
	age: 37,
	gender: 'male',
	favLanguage: 'React',
	specialty: 'Front-end',
	catchPhrase: `Don't forget the homies`,
	gradClassName: 'CS1',
	favInstructor: 'Fred'
});

console.log(imon.speak());
console.log(fred.demo('javascript'));
console.log(fred.grade(imon, 'javascript'));
console.log(imon.listSubjects());
console.log(imon.PRAssignment('HTML'));
console.log(imon.sprintChallenge('javascript fundamentals'));
console.log(jerry.standUp('channel'));
console.log(jerry.debugsCode(imon, 'javascript'));
