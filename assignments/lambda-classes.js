// CODE here for your Lambda Classes
class People {
	constructor(basicInfo) {
		this.name = basicInfo.name;
		this.age = basicInfo.age;
		this.location = basicInfo.location;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}
class Instructor extends People {
	constructor(instructorInfo) {
		super(instructorInfo);
		this.specialty = instructorInfo.specialty;
		this.favLanguage = instructorInfo.favLanguage;
		this.catchPhrase = instructorInfo.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}
	phrase() {
		return this.catchPhrase;
	}
}
class Student extends People {
	constructor(studentInfo) {
		super(studentInfo);
		this.previousBackground = studentInfo.previousBackground;
		this.className = studentInfo.className;
		this.favSubjects = studentInfo.favSubjects;
	}
	listsSubjects() {
		this.favSubjects.forEach(function(subject) {
			return subject;
		});
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}
class ProjectManager extends Instructor {
	constructor(pmInfo) {
		super(pmInfo);
		this.gradClassName = pmInfo.gradClassName;
		this.favInstructor = pmInfo.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
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
const mike = new Instructor({
	name: 'mike',
	location: 'New York',
	age: 32,
	gender: 'male',
	favLanguage: 'Python',
	specialty: 'Django',
	catchPhrase: `I'm a Python master`,
});
const jake = new Student({
	name: 'Jake',
	location: 'Dallas',
	age: 26,
	previousBackground: 'a lot',
	className: 'Web',
	favSubjects: ['Math', 'Science', 'History']
})
const matt = new Student({
	name: 'Matt',
	location: 'Austin',
	age: 29,
	previousBackground: 'IT',
	className: 'CSWEB',
	favSubjects: ['Space', 'Science', 'History']
})
const tyler = new Student({
	name: 'Tyler',
	location: 'Ozona',
	age: 24,
	previousBackground: 'Medical',
	className: 'CSWEB',
	favSubjects: ['Biology', 'Electronics', 'History']
})
const jordan = new ProjectManager({
	name: 'Jordan',
	location: 'Denver',
	age: 40,
	gradClassName: 'CSPT2',
	favInstructor: mike
})
const tammy = new ProjectManager({
	name: 'Tammy',
	location: 'Houston',
	age: 24,
	gradClassName: 'CS9',
	favInstructor: fred
})
console.log(fred.speak());
console.log(fred.grade(matt, matt.favSubjects[2]));
console.log(mike.speak());
console.log(mike.phrase());
console.log(mike.demo('JavaScript'));
console.log(tyler.PRAssignment('Biology'));
console.log(tyler.sprintChallenge('Biology'));
console.log(tyler.speak());
console.log(matt.PRAssignment('History'));
console.log(matt.sprintChallenge('History'));
console.log(matt.speak());
console.log(tammy.standUp('CSPT2_tammy'));
console.log(tammy.debugsCode(matt, matt.favSubjects[1]));
console.log(jordan.standUp('CS9_jordan'));
console.log(jordan.debugsCode(jake, jake.favSubjects[0]));